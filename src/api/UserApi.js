import axios from "axios";
import config from "../config/config";

const create = async (payload) => {
    try {
        const result = await axios.post(`${config.domain}/user/signup`,payload)
        return result
    } catch (error) {
        return await error.message
    }
}
const read = async () => {
    try {
        const result = await axios.get(`${config.domain}/user/`)
        return result.data
    } catch (error) {
        return await error.message
    }
}
const getOne = async (id) => {
    try {
        const result = await axios.get(`${config.domain}/user/${id}`)
        return result.data
    } catch (error) {
        return await error.message
    }
}
const update = async (data) => {
    try {
        const result = await axios.put(`${config.domain}/user/${data.id}`,data)
        return result
    } catch (error) {
        return await error.message
    }
}

const deleted = async (id) => {
    try {
        const result = await axios.delete(`${config.domain}/user/${id}`)
        return result
    } catch (error) {
        return await error.message
    }
}

const signup = async(data)=>{
    try {
        const result = await axios.post(`${config.domain}/user/signup`,data)
        return result
    } catch (error) {
        return error        
    }
}

const signin = async(data)=> {
    try {
        const result = await axios.post(`${config.domain}/user/signin`,data)
        return result
    } catch (error) {
        return error        
    }
}

const profile = async()=>{
    axios.defaults.headers.common = {'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`}
    try {
        const result = await axios.get(`${config.domain}/user/profile`)
        return result
    } catch (error) {
        return error        
    }
}

export default { create, read, getOne, update, deleted, signin, signup, profile}