'use server'
import { CountryData, SingleCountry } from '@/types/CountryData'

export async function fetchCountries(): Promise<CountryData[]> {
  const response = await fetch('https://restcountries.com/v3.1/all')
  const data = await response.json()
  return data
}

export async function fetchCountryByName(
  name: string
): Promise<SingleCountry[]> {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
  const data = await res.json()
  return data
}

export async function fetchBorderNames(codes: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${codes}&fields=name,cca3`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
