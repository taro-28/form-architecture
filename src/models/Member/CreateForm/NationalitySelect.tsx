import { FC, memo } from 'react';
import { Text } from '@chakra-ui/react';
import { useMemberCreateForm } from './useMemberCreateForm';

export const MemberCreateFormNationalitySelect: FC = memo(() => {
  const { NationalitySelect, NationalitySelectOptionAndLabels } =
    useMemberCreateForm();

  return (
    <>
      <Text>国籍</Text>
      <NationalitySelect>
        {NationalitySelectOptionAndLabels.map(({ SelectOption, label }) => (
          <SelectOption key={label}>{label}</SelectOption>
        ))}
      </NationalitySelect>
    </>
  );
});
