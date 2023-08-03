import { IUser } from "."

type dateState = 'TOTAL_PAIED' | 'PARCIAL_PAIED' | 'NO_PAIED'

export interface IDate {
  _id:         string
  userid:      string
  day:         string
  month:       string
  hour:        string
  code:        string
  dateState:   dateState
}