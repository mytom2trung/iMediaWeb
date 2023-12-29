import { ActionIcon, Container, Group, Stack, Text, Image, Space } from '@mantine/core';
import { useContext, useMemo } from 'react';
import Link from 'next/link';
import classes from './Footer.module.css';
import LogoName from '../LogoName/LogoName';
import telegramIcon from '@/iMedia/resources/imgs/telegram.svg'
import facebookIcon from '@/iMedia/resources/imgs/ic_facebook.svg';
import AppContext from '@/iMedia/context/AppContext';

export function Footer() {
  const { configData } = useContext(AppContext);

  const facebookIconCpn = useMemo(
    () =>
      configData?.social.facebook && (
        <Link href="//fb.com/animehay.fanpage" target="_blank">
          <ActionIcon size="lg" color="gray" variant="subtle" bg="white">
            <Image src={facebookIcon.src} width={18} height={18} />
          </ActionIcon>
        </Link>
      ),
    [configData]
  );

  const teleIconCpn = useMemo(
    () =>
      configData?.social.zalo && (
        <Link href="https://t.me/+B-Vh8f4e55VhMzg1" target="_blank">
          <ActionIcon size="lg" color="gray" variant="subtle" bg="white">
            <Image src={telegramIcon.src} width={18} height={18} />
          </ActionIcon>
        </Link>
      ),
    [configData]
  );

  const emailCpn = useMemo(
    () =>
      configData?.social.mail && (
        <Link href="mailto:contact.animehay@gmail.com">
          <Text>{`Liên hệ: contact.animehay@gmail.com`}</Text>
        </Link>
      ),
    [configData]
  );

  return (
    <div className={classes.footer}>
      <Container className={classes.innerFooter}>
        <LogoName />
        <Stack>
          <Group gap={0} className={classes.linksFooter} justify="flex-end" wrap="nowrap">
            {facebookIconCpn}
            <Space w="md" />
            {teleIconCpn}
          </Group>
          {emailCpn}
        </Stack>
      </Container>
    </div>
  );
}
