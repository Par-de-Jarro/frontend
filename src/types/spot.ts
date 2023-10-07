import { University } from "./university"

export interface Spot {
    name: string
    description: string
    personal_quota: number
    images: Image[]
    type: string
    value: number
    lat: number
    long: number
    street: string
    zip_code: string
    number: string
    complement: string
    city: string
    state: string
    key: Key
    id_spot: string
    owner: Owner
    distance: number
}
  
export interface Image {
    image_url: string
    image_order: number
}
  
interface Key {
    convenience: Convenience
    allowance: Allowance
}
  
interface Convenience {
    rooms_quantity: number
    bathrooms_quantity: number
    has_elevator: boolean
}
  
interface Allowance {
    allow_pet: boolean
    allow_smoker: boolean
}
  
interface Owner {
    name: string
    email: string
    cellphone: string
    document_id: string
    profile_img: string
    birthdate: string
    course: string
    bio: string
    gender: string
    id_user: string
    university: University
}
