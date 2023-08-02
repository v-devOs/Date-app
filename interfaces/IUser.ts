import { userRoles } from "@/types"
import { ITatto } from "."
import { IDate } from './IDate';

type dateState = 'TOTAL_PAIED' | 'PARCIAL_PAIED' | 'NO_PAIED'

export interface IUser {
  _id:         string
  name:        string,
  role:        userRoles
  email?:      string
  password?:   string
  dateState?:  dateState
  tattoToDo?:  ITatto
  date?:       IDate
  tattoer?:    IUser
}
