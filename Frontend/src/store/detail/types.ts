export interface Insolvency {
  bailiffCount: number
  bailiffLink: string
  creditorCount: number
  creditorLink: string
  debtorCount: number
  debtorLink: string
}

export interface Role {
  dateFrom: string
  dateTo: string | null
  organisation: string
  role: string
}

export interface Sponsor {
  donatedAmount: number
  party: string
  source: string | null
  year: number
}

export enum ContactService {
  FacebookPage = 'Facebook_page',
  FacebookProfile = 'Facebook_profile',
  Twitter = 'Twitter',
  Instagram = 'Instagram',
  WWW = 'WWW',
}

export interface Contact {
  Service: ContactService
  Contact: string
}

export interface Detail {
  birthDate: string
  contacts?: Contact[] // TODO odebrat ? az zacne chodit z API
  companyConnection: string
  currentParty: string
  deathDate: string | null
  description: string
  id: string
  insolvencyCompany: Insolvency
  insolvencyPerson: Insolvency
  name: string
  namePrefix: string
  nameSuffix: string
  photo: string
  roles: Role[]
  source: string
  sponsor: Sponsor[]
  status: string
  surname: string
}

export interface DetailState {
  detail: Detail
  loadingDetail: boolean
  showAllRoles: boolean
  showAllDonations: boolean
}

export const SET_DETAIL = 'SET_DETAIL'
export const SET_LOADING_DETAIL_START = 'SET_LOADING_DETAIL_START'
export const SET_LOADING_DETAIL_END = 'SET_LOADING_DETAIL_END'
export const TOGGLE_SHOW_ALL_DONATIONS = 'TOGGLE_SHOW_ALL_DONATIONS'
export const TOGGLE_SHOW_ALL_ROLES = 'TOGGLE_SHOW_ALL_ROLES'
export const LOAD_DETAIL = 'LOAD_DETAIL'

interface SetDetailAction {
  type: typeof SET_DETAIL
  payload: Detail
}

interface SetLoadingDetailStartAction {
  type: typeof SET_LOADING_DETAIL_START
}

interface SetLoadingDetailEndAction {
  type: typeof SET_LOADING_DETAIL_END
}

interface ToggleShowAllDonationsAction {
  type: typeof TOGGLE_SHOW_ALL_DONATIONS
}

interface ToggleShowAllRolesAction {
  type: typeof TOGGLE_SHOW_ALL_ROLES
}

export interface LoadDetailAction {
  type: typeof LOAD_DETAIL
  payload: string
}

export type DetailActionTypes =
  | SetDetailAction
  | SetLoadingDetailEndAction
  | SetLoadingDetailStartAction
  | ToggleShowAllDonationsAction
  | ToggleShowAllRolesAction
  | LoadDetailAction
