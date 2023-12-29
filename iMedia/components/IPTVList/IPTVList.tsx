import { Container, Paper, Text, List, Title, SimpleGrid, Group } from '@mantine/core';
import { useContext, useMemo } from 'react';
import classes from './IPTVList.module.css';
import AppContext from '@/iMedia/context/AppContext';
import { ButtonCopy } from '../ButtonCopy/ButtonCopy';

const IPTVCard = ({ title, content = [] }: { title: string; content: string[] }) => (
  <Paper withBorder radius="md" className={classes.card}>
    <Text size="xl" fw={500} mt="md">
      {title}
    </Text>
    <List>
      {content.map((v) => (
        <List.Item>
          <Group>
            <Text size="sm" mt="sm" c="dimmed">
              {v}
            </Text>
            <ButtonCopy content={v} />
          </Group>
        </List.Item>
      ))}
    </List>
  </Paper>
);

export function IPTVList() {
  const { configData } = useContext(AppContext);

  const listCard = useMemo(
    () =>
      (configData?.iptv || []).map((iptv) => <IPTVCard title={iptv.title} content={iptv.links} />),
    [configData]
  );
  return (
    <Container size="xl" px="md" className={classes.wrapper}>
      <Title>Danh sách IPTV gợi ý</Title>
      <SimpleGrid mt={60} cols={1} verticalSpacing={{ base: 'xl', md: 50 }}>
        {listCard}
      </SimpleGrid>
    </Container>
  );
}
