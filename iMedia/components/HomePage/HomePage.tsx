import Head from 'next/head';
import bannerImage from './phonedark.png';
import { Banner } from '../Banner/Banner';
import { ReleaseList } from '../ReleaseList/ReleaseList';
import { Shell } from '../Shell/Shell';

export function HomePage() {
  return (
    <Shell headerHeight={80}>
      <Head>
        <title>AnimeSub</title>
      </Head>
      <Banner image={`${bannerImage.src}`} />
      <div id="main">
        <ReleaseList />
      </div>
    </Shell>
  );
}
