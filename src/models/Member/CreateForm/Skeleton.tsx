import { FC } from 'react';
import { Skeleton, SkeletonText, Stack } from '@chakra-ui/react';

export const MemberCreateFormSkelton: FC = () => {
  return (
    <Stack>
      <SkeletonText noOfLines={1} />
      <Skeleton height="10" />
      <SkeletonText noOfLines={1} />
      <Skeleton height="10" />
      <SkeletonText noOfLines={1} />
      <Skeleton height="10" />
      <SkeletonText noOfLines={1} />
      <Skeleton height="10" />
    </Stack>
  );
};
