import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { version: _version, type: _type } = req.query;
    const type = (_type as string | undefined)?.trim().toLowerCase() || '';
    const version = (_version as string | undefined)?.trim().toLowerCase() || '';

    if (type.length === 0) {
      throw new Error('Mising Param');
    }

    let link = '';

    if (type === 'phone') {
      let appVersion = process.env.MOBILE_NEWEST;
      if (version.length > 0) {
        appVersion = version;
      }
      link = `./apks/${type}/${appVersion}`;
    }

    if (type === 'tv') {
      let appVersion = process.env.TV_NEWEST;
      if (version.length > 0) {
        appVersion = version;
      }
      link = `./apks/${type}/${appVersion}`;
    }

    if (!fs.existsSync(link)) {
      throw new Error('File not exist');
    }
    const files = fs.readdirSync(link);
    let file = files.find((f) => path.parse(f).ext === '.apk') || '';
    file = `${link}/${file}`;

    if (!fs.existsSync(file)) {
      throw new Error('File not exist');
    }

    const fileStream = fs.createReadStream(file);

    res.setHeader('Content-disposition', 'attachment; filename=iMedia-mobile.apk');
    res.setHeader('Content-type', 'application/vnd.android.package-archive');

    fileStream.pipe(res);
  } catch (error) {
    res.status(404);
    res.json({ message: (error as Error | undefined)?.message || `${error}` });
    res.end();
  }
}
