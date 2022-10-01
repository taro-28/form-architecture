import { FC, memo } from 'react';
import { Text } from '@chakra-ui/react';
import { useMemberCreateForm } from './hooks';

export const MemberCreateFormGenderRadio: FC = memo(() => {
  const { GenderRadioGroup, GenderRadioAndLabels } = useMemberCreateForm();

  return (
    <>
      <Text>性別</Text>
      <GenderRadioGroup>
        {GenderRadioAndLabels.map(({ GenderRadio, label }) => (
          <GenderRadio key={label}>{label}</GenderRadio>
        ))}
      </GenderRadioGroup>
    </>
  );
});
