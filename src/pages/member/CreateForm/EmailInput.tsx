import { FC, memo } from 'react';
import { Text } from '@chakra-ui/react';
import { useMemberCreateForm } from './useMemberCreateForm';

export const MemberCreateFormEmailInput: FC = memo(() => {
  const { EmailInput } = useMemberCreateForm();

  return (
    <>
      <Text>メールアドレス</Text>
      <EmailInput />
    </>
  );
});
