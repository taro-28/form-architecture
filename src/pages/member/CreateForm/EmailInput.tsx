import { FC, memo } from 'react';
import { Text } from '@chakra-ui/react';
import { useMemberCreateForm } from './hooks';

export const MemberCreateFormEmailInput: FC = memo(() => {
  const { EmailInput } = useMemberCreateForm();

  return (
    <>
      <Text>メールアドレス</Text>
      <EmailInput />
    </>
  );
});
