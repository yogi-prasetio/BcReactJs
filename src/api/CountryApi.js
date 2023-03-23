import axios from "axios";
import config from "../config/config";

const list = async () => {
    try {
        const result = await axios.get(`${config.domain}/country/`)
        return result.data
    } catch (error) {
        return await error.message
    }
}
const deleted = async (id) => {
    try {
        const result = await axios.delete(`${config.domain}/country/${id}`)
        return result
    } catch (error) {
        return await error.message
    }
}

export default { list, deleted }