import useSWR from 'swr'

export const GENDER = {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
} as const
export type Gender = typeof GENDER[keyof typeof GENDER]

export const NATIONALITY = {
  JAPAN: 'JAPAN',
  CHINA: 'CHINA'
} as const
export type Nationality = typeof NATIONALITY[keyof typeof NATIONALITY]

type Member = {
  id: number
  name: string
  gender: Gender
  email: string
  nationality: Nationality
}

const fetchMember: () => Promise<Member> = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    id: 1,
    name: 'taro',
    gender: 'MALE',
    email: 'taro@example.com',
    nationality: 'JAPAN'
  }
}

export const useMember: () => {
  member: Member
} = () => {
  const { data } = useSWR('member', fetchMember, { suspense: true })
  if (data == null) throw Error()

  return { member: data }
}
