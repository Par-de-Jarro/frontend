import { University } from "./university"

export interface User {
    name: string
    email: string
    cellphone: number
    document_id: string
    profile_img: string
    birthdate: string
    course: string
    bio: string
    gender: string
    id_user: string
    university: University
  }