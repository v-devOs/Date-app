import { userRoles } from "@/types"


export interface IUser {
  _id:           string
  name:          string,
  role:          userRoles
  email?:        string
  password?:     string
}
