import { userRoles } from "@/types"
import { ITatoo } from "."
import { IDate } from './IDate';

type dateState = 'TOTAL_PAIED' | 'PARCIAL_PAIED'

export interface IUser {
  _id:         string
  name:        string,
  role:        userRoles
  email?:      string
  password?:   string
  dateState?:  dateState
  tatooToDo?:  ITatoo 
  date?:       IDate
  tatooer?:    IUser

}
