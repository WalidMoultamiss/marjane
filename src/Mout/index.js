import { UserObj, PromotionObj, goTo } from "../helpers"


export const login = async (data) => {
    let res = await UserObj.login(data)
};


export const AdminPage = async () => {
    let logs = await UserObj.getLogs()
    let user = await UserObj.checkToken()
    goTo('/admin',{ user : user.data , logs : logs.data})
};

export const AdminUsers = async ()=>{
    let users = await UserObj.getUsers()
    console.log('users',users);
    goTo('/adminusers',{ users : users.data})
}


export const logs = async ()=>{
    let logs = await UserObj.getLogs()
    goTo('/logs',{ logs : logs.data})
}


export const adminpromotions = async ()=>{
    let promotions = await PromotionObj.getPromotions()
    goTo('/adminpromotions',{ promotions : promotions.data})
}


export const adminproducts = async ()=>{
    let products = await PromotionObj.getProducts()
    goTo('/adminproducts',{ products : products.data , hash : location.search})
}


export const createusingtoken = async ()=>{
    goTo('/createusingtoken',{token:location.search})
}



export const ref = [
    {
        path: "admin",
        func: AdminPage
    },
    {
        path: "adminusers",
        func: AdminUsers
    },
    {
        path:"createusingtoken",
        func : createusingtoken
    },
    {
        path: "logs",
        func: logs
    },
    {
        path: "adminpromotions",
        func: adminpromotions
    },
    {
        path: "adminproducts",
        func: adminproducts
    },

]