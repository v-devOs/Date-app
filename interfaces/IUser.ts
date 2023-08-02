import { userRoles } from "@/types"
import { ITatto } from "."
import { IDate } from './IDate';


export interface IUser {
  _id?:           string
  name:          string,
  role:          userRoles
  email?:        string
  password?:     string
  tattoToDo?:    string | ITatto
  date?:         string | IDate
  tattoer?:      string | IUser
}
