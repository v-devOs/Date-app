import { IUser } from "."

type dateState = 'TOTAL_PAIED' | 'PARCIAL_PAIED' | 'NO_PAIED'

export interface IAppointment {
  _id:          string
  day?:         string
  month?:       string
  hour?:        string
  code:         string
  dateState:    dateState
}