interface CommonName {
  common: string
  official: string
  nativeName: {
    ell: {
      common: string
      official: string
    }
    tur: {
      common: string
      official: string
    }
  }
}

interface Currency {
  name: string
  symbol: string
}

interface IDD {
  root: string
  suffixes: string[]
}

interface Languages {
  ell: string
  tur: string
}

interface Translations {
  ara: {
    official: string
    common: string
  }
  bre: {
    official: string
    common: string
  }
  ces: {
    official: string
    common: string
  }
  cym: {
    official: string
    common: string
  }
  deu: {
    official: string
    common: string
  }
  est: {
    official: string
    common: string
  }
  fin: {
    official: string
    common: string
  }
  fra: {
    official: string
    common: string
  }
  hrv: {
    official: string
    common: string
  }
  hun: {
    official: string
    common: string
  }
  ita: {
    official: string
    common: string
  }
  jpn: {
    official: string
    common: string
  }
  kor: {
    official: string
    common: string
  }
  nld: {
    official: string
    common: string
  }
  per: {
    official: string
    common: string
  }
  pol: {
    official: string
    common: string
  }
  por: {
    official: string
    common: string
  }
  rus: {
    official: string
    common: string
  }
  slk: {
    official: string
    common: string
  }
  spa: {
    official: string
    common: string
  }
  srp: {
    official: string
    common: string
  }
  swe: {
    official: string
    common: string
  }
  tur: {
    official: string
    common: string
  }
  urd: {
    official: string
    common: string
  }
  zho: {
    official: string
    common: string
  }
}

interface Demonyms {
  eng: {
    f: string
    m: string
  }
  fra: {
    f: string
    m: string
  }
}

interface Maps {
  googleMaps: string
  openStreetMaps: string
}

interface Flags {
  png: string
  svg: string
  alt: string
}

interface CoatOfArms {
  png: string
  svg: string
}

interface CapitalInfo {
  latlng: number[]
}

interface PostalCode {
  format: string
  regex: string
}

export interface CountryData {
  name: CommonName
  tld: string[]
  cca2: string
  ccn3: string
  cca3: string
  cioc: string
  independent: boolean
  status: string
  unMember: boolean
  currencies: {
    EUR: Currency
  }
  idd: IDD
  capital: string
  altSpellings: string[]
  region: string
  subregion: string
  languages: Languages
  translations: Translations
  latlng: number[]
  landlocked: boolean
  area: number
  demonyms: Demonyms
  flag: string
  maps: Maps
  population: number
  gini: {
    '2018': number
  }
  fifa: string
  car: {
    signs: string[]
    side: string
  }
  timezones: string[]
  continents: string[]
  flags: Flags
  coatOfArms: CoatOfArms
  startOfWeek: string
  capitalInfo: CapitalInfo
  postalCode: PostalCode
}
interface Name {
  common: string
  official: string
  nativeName: {
    est: {
      official: string
      common: string
    }
  }
}

interface Currencies {
  EUR: {
    name: string
    symbol: string
  }
}

interface Idd {
  root: string
  suffixes: string[]
}

interface Languages {
  est: string
}

interface Translations {
  ara: {
    official: string
    common: string
  }
  bre: {
    official: string
    common: string
  }
  ces: {
    official: string
    common: string
  }
  // Other translation fields omitted for brevity
}

interface Demonyms {
  eng: {
    f: string
    m: string
  }
  fra: {
    f: string
    m: string
  }
}

interface Maps {
  googleMaps: string
  openStreetMaps: string
}

interface Gini {
  '2018': number
}

interface Flags {
  png: string
  svg: string
  alt: string
}

interface CoatOfArms {
  png: string
  svg: string
}

interface CapitalInfo {
  latlng: number[]
}

interface PostalCode {
  format: string
  regex: string
}
export interface SingleCountry {
  name: Name
  tld: string[]
  cca2: string
  ccn3: string
  cca3: string
  cioc: string
  independent: boolean
  status: string
  unMember: boolean
  currencies: Currencies
  idd: Idd
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  languages: Languages
  translations: Translations
  latlng: number[]
  landlocked: boolean
  borders: string[]
  area: number
  demonyms: Demonyms
  flag: string
  maps: Maps
  population: number
  gini: Gini
  fifa: string
  car: {
    signs: string[]
    side: string
  }
  timezones: string[]
  continents: string[]
  flags: Flags
  coatOfArms: CoatOfArms
  startOfWeek: string
  capitalInfo: CapitalInfo
  postalCode: PostalCode
}
interface BorderName {
  common: string
  official: string
  nativeName: {
    spa: {
      common: string
      official: string
    }
  }
}

export interface Border {
  name: Name
  cca3: string
}
