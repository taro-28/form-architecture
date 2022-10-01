import { FC, memo } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import { useMemberCreateForm } from './hooks'

export const MemberCreateForm: FC = memo(() => {
  const {
    NameInput,
    NameErrorMessage,
    GenderRadioGroup,
    GenderRadioAndLabels,
    EmailInput,
    submit,
    NationalitySelect,
    NationalitySelectOptionAndLabels
  } = useMemberCreateForm()

  return (
    <Box>
      <Text>氏名</Text>
      <NameInput />
      <NameErrorMessage />
      <Text>性別</Text>
      <GenderRadioGroup>
        {GenderRadioAndLabels.map(({ GenderRadio, label }) => (
          <GenderRadio key={label}>{label}</GenderRadio>
        ))}
      </GenderRadioGroup>
      <Text>メールアドレス</Text>
      <EmailInput />
      <Text>国籍</Text>
      <NationalitySelect>
        {NationalitySelectOptionAndLabels.map(({ SelectOption, label }) => (
          <SelectOption key={label}>{label}</SelectOption>
        ))}
      </NationalitySelect>
      <Button onClick={submit}>保存</Button>
    </Box>
  )
})
