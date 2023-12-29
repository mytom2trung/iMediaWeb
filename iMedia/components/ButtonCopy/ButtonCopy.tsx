import { ActionIcon, rem, Tooltip } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { IconCopy, IconCheck } from '@tabler/icons-react';

export function ButtonCopy({ content }: { content: string }) {
  const clipboard = useClipboard();
  return (
    <Tooltip
      label="Link copied!"
      offset={5}
      position="bottom"
      radius="xl"
      transitionProps={{ duration: 100, transition: 'slide-down' }}
      opened={clipboard.copied}
    >
      <ActionIcon variant="light" onClick={() => clipboard.copy(content)}>
        {clipboard.copied ? (
          <IconCheck style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        ) : (
          <IconCopy style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        )}
      </ActionIcon>
    </Tooltip>
  );
}
