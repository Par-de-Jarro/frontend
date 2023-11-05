import { Spot } from "./spot"
import { User } from "./user"

export interface SpotRequest {
    id_user: string
    id_spot: string
    status: string
    id_spot_entry_request: string
    user: User
    spot: Spot
}