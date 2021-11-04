type CityType = {
  title: string
  countryTitle: string
}
type AddressType = {
  streetTitle: string
  city: CityType
}
type TechnologiesType = {
  id: number
  title: string
}
type StudentType = {
  id: number
  name: string
  age: number
  isActive: boolean
  address: AddressType
  technologies: TechnologiesType[]
}

export const student: StudentType = {
  id: 1,
  name: "Sasha",
  age: 28,
  isActive: true,
  address: {
    streetTitle: 'Krymskogo',
    city: {
      title: "BC",
      countryTitle: "UA",
    },
  },
  technologies: [
    {id: 1, title: "HTML"},
    {id: 2, title: "CSS"},
    {id: 3, title: "JS"},
  ],
}
