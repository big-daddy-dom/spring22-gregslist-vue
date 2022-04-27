import { AppState } from "../AppState.js"
import  {House} from "../models/House.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class HousesService {
    async getHouses(){
        const res = await api.get('api/houses')
        AppState.houses = res.data.map(h => new House(h))
    }
}