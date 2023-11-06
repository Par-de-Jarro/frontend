import { Spot } from "./spot"

export interface SpotBill {
    id_spot_bill: string
    id_spot: string
    value: number
    reference_date: string
    images: Image[]
    name: string
    description: string
    spot: Spot
}
  
export interface Image {
    image_url: string
    image_order: number
}