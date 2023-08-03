import { ITatto } from "."

type dateState = 'TOTAL_PAIED' | 'PARCIAL_PAIED' | 'NO_PAIED'

export interface IAppointment {
  _id:           string
  day?:          string
  month?:        string
  hour?:         string
  code:          string
  tattoer:       string
  dateState:     dateState
  tattoToDo?:    string | ITatto

}