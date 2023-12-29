import {
  Group,
  AppShell,
  Container,
  RemoveScroll,
  BackgroundImage,
  Burger,
  Transition,
  Paper,
} from '@mantine/core';

import Link from 'next/link';

import { useDisclosure } from '@mantine/hooks';
import classes from './Shell.module.css';

import { links } from '@/iMedia/utils/conts';
import bgImage from '@/iMedia/resources/imgs/background.png';
import { Footer } from '../Footer/Footer';
import LogoName from '../LogoName/LogoName';

export interface ShellProps {
  children: React.ReactNode;
  headerHeight?: number;
}

interface NavItemProps {
  links: { link: string; label: string }[];
}

const itemLinks = (linksData: { link: string; label: string }[]) =>
  linksData.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={() => {
        close();
      }}
    >
      {link.label}
    </a>
  ));

export const NavItem = ({ links: linksData }: NavItemProps) => (
  <Group gap={5} visibleFrom="xs">
    {itemLinks(linksData)}
  </Group>
);

export function Shell({ children, headerHeight = 60 }: ShellProps) {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <AppShell header={{ height: headerHeight }}>
      <AppShell.Header className={RemoveScroll.classNames.zeroRight}>
        <Container size="xl" px="md" className={classes.inner}>
          <Link href="/" className={`mantine-focus-auto ${classes.link}`}>
            <LogoName />
          </Link>
          <NavItem links={links} />
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          <Transition transition="pop-top-right" duration={200} mounted={opened}>
            {(styles) => (
              <Paper
                className={classes.dropDown}
                withBorder
                style={[styles, { top: headerHeight }]}
              >
                {itemLinks(links)}
              </Paper>
            )}
          </Transition>
        </Container>
      </AppShell.Header>
      <BackgroundImage src={bgImage.src}>
        <AppShell.Main>
          <div className={classes.main}>{children}</div>
        </AppShell.Main>
      </BackgroundImage>
      <Footer />
    </AppShell>
  );
}
