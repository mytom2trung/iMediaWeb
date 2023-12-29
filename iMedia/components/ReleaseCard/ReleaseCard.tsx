import { Card, Image, Text, Group, Button, Title, rem } from '@mantine/core';
import Link from 'next/link';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import classes from './ReleaseCard.module.css';

// function GooglePlayButton({ href }: { href: string }) {
//   return (
//     <Link className={classes.button} href={href}>
//       <Image
//         src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
//         alt="Get it on Google Play"
//       />
//     </Link>
//   );
// }

interface IReleaseData {
  title: string;
  version: string;
  descriptionGG: string;
  linkGG: string;
  descriptionAPK: string;
  linkAPK: string;
  type: string;
}

interface ReleaseCardProps {
  data: IReleaseData;
}

export function ReleaseCard({ data }: ReleaseCardProps) {
  const { title, descriptionGG, linkGG, type } = data;
  const router = useRouter();
  const onClickDownload = useCallback(() => {
    router.push(`/${type}`);
  }, []);
  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Title size="h2">{title}</Title>
        </Group>
      </Card.Section>

      {/* <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          {descriptionGG}
        </Text>
        <Group style={{ flex: 1, minWidth: '50%', width: rem(100) }} mt="sm">
          <GooglePlayButton href={linkGG} />
        </Group>
      </Card.Section> */}

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          {descriptionGG}
        </Text>
        <Button
          variant="outline"
          color="gray"
          size="md"
          radius="md"
          style={{ flex: 1, minWidth: '50%', width: rem(100) }}
          mt="sm"
          onClick={onClickDownload}
        >
          Tải về APK
        </Button>
      </Card.Section>
    </Card>
  );
}

export type { IReleaseData };
