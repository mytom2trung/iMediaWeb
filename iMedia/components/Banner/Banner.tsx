import {
  Title,
  Overlay,
  Group,
  Text,
  SimpleGrid,
  Container,
  ThemeIcon,
  rem,
  Image,
} from '@mantine/core';
import { useCallback } from 'react';
import classes from './Banner.module.css';
import data from './data';

interface BannerProps {
  image: string;
}

export function Banner({ image }: BannerProps) {
  const features = useCallback(
    () =>
      data.map((feature) => (
        <div key={feature.title}>
          <ThemeIcon className={classes.featureIcon} size={44} radius="md">
            <Image
              alt={`${feature.icon.src}`}
              style={{ width: 24, height: 24 }}
              src={`${feature.icon.src}`}
            />
          </ThemeIcon>

          <div className={classes.featureBody}>
            <Text className={classes.featureTitle}>{feature.title}</Text>
            <Text className={classes.featureDescription}>{feature.description}</Text>
          </div>
        </div>
      )),
    []
  );
  return (
    <div className={classes.wrapper}>
      <Container size="xl" px="md">
        <div className={classes.bodyWrapper}>
          <div className={classes.image} style={{ backgroundImage: `url(${image})` }} />
          <Overlay className={classes.overlay} opacity={1} zIndex={0} />
          <div className={classes.body}>
            <Text className={classes.supTitle}>AnimeSub</Text>
            <Title className={classes.title}>
              <span className={classes.highlight}>
                Trải nghiệm xem anime miễn phí <br /> Thế giới wibu trong tầm tay
              </span>
            </Title>

            <Text className={classes.description}>
            Xem phim anime vietsub online xem trên điện thoại di động và máy tính nhanh nhất. Là một website xem phim anime vietsub miễn phí tốt nhất. Liên tục cập nhật các anime sớm nhất từ các fansub Việt Nam.
            </Text>

            <Group className={classes.controls}>
              <div />
            </Group>

            <SimpleGrid
              cols={{ base: 1, sm: 4 }}
              spacing={{ base: 'lg', sm: 'xl' }}
              className={classes.features}
              mt={100}
              visibleFrom="lg"
            >
              {features()}
            </SimpleGrid>
          </div>
        </div>
      </Container>
    </div>
  );
}
