import { User } from "./user"
import { SpotBill } from "./spotBill"

export interface Quota {
    id_personal_quota_payment: string
    id_spot_bill: string
    id_user: string
    value: number
    images: string[]
    status: string
    user: User
    spot_bill: SpotBill
  }

  export interface Image {
    image_url: string
    image_order: number
}