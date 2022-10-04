import { FC, memo } from 'react';
import { Text } from '@chakra-ui/react';
import { useMemberCreateForm } from './useMemberCreateForm';

export const MemberCreateFormNameInput: FC = memo(() => {
  const { NameInput, NameErrorMessage } = useMemberCreateForm();

  return (
    <>
      <Text>氏名</Text>
      <NameInput />
      <NameErrorMessage />
    </>
  );
});
