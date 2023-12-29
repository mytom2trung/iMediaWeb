interface SocialData {
  link: string;
}
interface ConfigData {
  releaseVersion: {
    title: string;
    version: string;
    descriptionGG: string;
    linkGG: string;
    descriptionAPK: string;
    linkAPK: string;
    type: string;
  }[];
  social: {
    facebook: SocialData;
    zalo: SocialData;
    mail: SocialData;
  };
  iptv: {
    title: string;
    links: string[];
  }[];
}

export type {
    SocialData,
    ConfigData
}