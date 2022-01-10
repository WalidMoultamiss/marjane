
import { get, put, post } from '../helpers'

export class UserClass {
    users = []
    user

    getUsers = async () => {
        const result = await get('/api/users/')
        this.users = result
        return result
    }

    getLogs = async () => {
        const result = await get('/api/logs/')
        return result
    }

    //login
    getUserByEmail = async (email) => {
        const result = await get(`/schema?email=${email}`)
        return result
    }

    getUserById = async (id) => {
        const result = await get(`/schema/${id}`)
        return result
    }

    updateStatus = async (id, status) => {
        let user = await this.getUserById(id)
        return await put(`/schema/${id}`, { ...user, status: status })
    }

    instription = async (data) => {
        // const response = await post("/schema", data);
        // this.user = response
        // return response
    }

    checkToken = async () => {
        const response = await post("/api/users/token",{body:true})
        return response
    }

    login = async (data) => {
        const response = await post("/api/users/login", data);
        console.log('data' , response);
        this.user = {...response.user, token: response.token}
        return response
    }

}


export default UserClass

