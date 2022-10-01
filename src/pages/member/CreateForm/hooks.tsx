import {
  Input,
  InputProps,
  Radio,
  RadioGroup,
  RadioGroupProps,
  RadioProps,
  Select,
  SelectProps,
  Text,
  TextProps
} from '@chakra-ui/react'
import { ErrorMessage } from '@hookform/error-message'
import { useController, useForm, UseFormHandleSubmit } from 'react-hook-form'
import { GENDER, Gender, NATIONALITY, Nationality, useMember } from '../hooks'

interface MemberCreateFormInputs {
  name: string
  gender: Gender
  email: string
  nationality: Nationality
}

type UseMemberCreateFormReturn = {
  submit: ReturnType<UseFormHandleSubmit<MemberCreateFormInputs>>
  NameInput: (props: Omit<InputProps, 'name' | 'isInvalid'>) => JSX.Element
  NameErrorMessage: (props: Omit<TextProps, 'children'>) => JSX.Element
  GenderRadioGroup: (props: Omit<RadioGroupProps, 'name'>) => JSX.Element
  GenderRadioAndLabels: Array<{
    GenderRadio: (props: Omit<RadioProps, 'value'>) => JSX.Element
    label: Gender
  }>
  EmailInput: (props: Omit<InputProps, 'name'>) => JSX.Element
  NationalitySelect: (props: SelectProps) => JSX.Element
  NationalitySelectOptionAndLabels: Array<{
    SelectOption: (
      props: Omit<
      React.DetailedHTMLProps<
      React.OptionHTMLAttributes<HTMLOptionElement>,
      HTMLOptionElement
      >,
      'value'
      >
    ) => JSX.Element
    label: Nationality
  }>
}

export const useMemberCreateForm: () => UseMemberCreateFormReturn = () => {
  const { member } = useMember()
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<MemberCreateFormInputs>({
    defaultValues: member
  })
  const { name } = errors
  const submit = handleSubmit((data) => console.log(data))

  const NameInput = (props: Omit<InputProps, 'name' | 'isInvalid'>) => (
    <Input
      {...register('name', {
        maxLength: { value: 30, message: '氏名は30文字以内で入力してください' }
      })}
      {...props}
      isInvalid={!(name == null)}
    />
  )
  const NameErrorMessage = (props: Omit<TextProps, 'children'>) => (
    <ErrorMessage
      errors={errors}
      name="name"
      render={({ message }) => <Text {...props}>{message}</Text>}
    />
  )

  const EmailInput = (props: Omit<InputProps, 'name'>) => (
    <Input {...register('email')} {...props} />
  )

  const GenderRadioGroup = (props: Omit<RadioGroupProps, 'name'>) => {
    const { field } = useController({
      name: 'gender',
      control
    })

    return <RadioGroup {...field} {...props} />
  }

  const GenderRadioAndLabels = Object.values(GENDER).map((gender) => ({
    GenderRadio: (props: Omit<RadioProps, 'value'>) => (
      <Radio value={gender} {...props} />
    ),
    label: gender
  }))

  const NationalitySelect = (props: SelectProps) => <Select {...props} {...register('nationality')} />
  const NationalitySelectOptionAndLabels = Object.values(NATIONALITY).map(
    (nationality) => ({
      SelectOption: (
        props: Omit<
        React.DetailedHTMLProps<
        React.OptionHTMLAttributes<HTMLOptionElement>,
        HTMLOptionElement
        >,
        'value'
        >
      ) => <option {...props} value={nationality} />,
      label: nationality
    })
  )

  return {
    submit,
    NameInput,
    NameErrorMessage,
    GenderRadioGroup,
    GenderRadioAndLabels,
    EmailInput,
    NationalitySelect,
    NationalitySelectOptionAndLabels
  }
}
