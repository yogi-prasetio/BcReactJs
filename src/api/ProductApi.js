import axios from "axios";
import config from "../config/config";

const create = async (payload) => {
    try {
        const result = await axios.post(`${config.domain}/product/`,payload)
        return result
    } catch (error) {
        return await error.message
    }
}
const read = async () => {
    try {
        const result = await axios.get(`${config.domain}/product/`)
        return result.data
    } catch (error) {
        return await error.message
    }
}
const getOne = async (id) => {
    try {
        const result = await axios.get(`${config.domain}/product/${id}`)
        return result.data
    } catch (error) {
        return await error.message
    }
}
const update = async (data) => {
    const id = parseInt(data.get('id'))
    try {
        const result = await axios.put(`${config.domain}/product/${id}`,data)
        return result
    } catch (error) {
        return await error.message
    }
}

const deleted = async (id) => {
    try {
        const result = await axios.delete(`${config.domain}/product/${id}`)
        return result
    } catch (error) {
        return await error.message
    }
}

export default { create, read, getOne, update, deleted}