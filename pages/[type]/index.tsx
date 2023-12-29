import Head from 'next/head';
import { useCallback, useContext, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Container, Skeleton, TextInput, rem, Title, Text, Button, Image } from '@mantine/core';
import { Shell } from '@/iMedia/components/Shell/Shell';
import AppContext from '@/iMedia/context/AppContext';
import classes from './style.module.css';
import downloadIcon from './download.png';
import FileSaver from 'file-saver';

export default function DownloadPage() {
  const { configData } = useContext(AppContext);

  const router = useRouter();

  const supportedTypes = useMemo(
    () => configData?.releaseVersion.map((v) => v.type) ?? [],
    [configData]
  );

  useEffect(() => {
    const { type: _type } = router.query;
    const type = (_type as string | undefined) || '';
    if (supportedTypes.findIndex((v) => v === type) !== -1) {
      FileSaver.saveAs(`/api/get/download?type=${type}`, `AnimeSub-${type}.apk`);
    }
  }, [supportedTypes, router.query]);

  const performDownload = useCallback(() => {
    const { type: _type } = router.query;
    const type = (_type as string | undefined) || '';
    FileSaver.saveAs(`/api/get/download?type=${type}`, `AnimeSub-${type}.apk`);
  }, [router.query]);

  const unSupportedCpn = useMemo(
    () => (
      <Container size="xl" px="md" mt={rem(80)}>
        <Skeleton visible>
          <br />
          <br />
          <br />
          <br />
        </Skeleton>
      </Container>
    ),
    []
  );

  const thankyouCpn = useMemo(
    () => (
      <Container size="xl" px="md" mt={rem(80)}>
        <div className={classes.wrapper}>
          <Container
            w={{ base: '50%', md: '10%' }}
            p={20}
            bg="white"
            className={classes.imageContainer}
          >
            <Image src={downloadIcon.src} className={classes.image} />
          </Container>
          <div className={classes.body}>
            <Title className={classes.title}>Cám ơn đã download!</Title>
            <Text fw={500} fz="lg" mb={5}>
              File APK sẽ được download...
            </Text>
            <Text fz="sm" c="dimmed">
              Bấm button dưới đây nếu việc download không được thực hiện!
            </Text>

            <div className={classes.controls}>
              <Button
                variant="outline"
                color="gray"
                size="md"
                radius="md"
                style={{ flex: 1, minWidth: '50%', width: rem(100) }}
                mt="sm"
                onClick={performDownload}
              >
                Tải về APK
              </Button>
            </div>
          </div>
        </div>
      </Container>
    ),
    []
  );

  const mainContent = useMemo(() => {
    const { type: _type } = router.query;
    const type = (_type as string | undefined) || '';
    if (supportedTypes.findIndex((v) => v === type) !== -1) {
      return thankyouCpn;
    }
    return unSupportedCpn;
  }, [supportedTypes, router.query]);

  return (
    <Shell headerHeight={80}>
      <Head>
        <title>AnimeSub - Ứng dụng xem anime miễn phí</title>
      </Head>
      <div id="main">{mainContent}</div>
    </Shell>
  );
}
