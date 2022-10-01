import { FC, memo } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { MemberCreateFormEmailInput } from './EmailInput';
import { MemberCreateFormGenderRadio } from './GenderRadio';
import { MemberCreateFormNameInput } from './NameInput';
import { MemberCreateFormNationalitySelect } from './NationalitySelect';
import { useMemberCreateForm } from './hooks';

export const MemberCreateForm: FC = memo(() => {
  const { submit } = useMemberCreateForm();

  return (
    <Box>
      <Box>
        <MemberCreateFormNameInput />
      </Box>
      <Box>
        <MemberCreateFormEmailInput />
      </Box>
      <Box>
        <MemberCreateFormGenderRadio />
      </Box>
      <Box>
        <MemberCreateFormNationalitySelect />
      </Box>
      <Button onClick={submit}>保存</Button>
    </Box>
  );
});
