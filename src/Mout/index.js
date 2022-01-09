import { UserObj, QuestionObj } from "../helpers"

export const TestOnline = async () => {
    await QuestionObj.getQuestions()
    goTo('/online')
};

export const login = async (data) => {
    let res = await UserObj.login(data)
};

export const viewRes = async () => {
    await QuestionObj.getQuestions()
    goTo('/viewres')
};

export const AdminPage = async () => {
    let user = await UserObj.checkToken()
    goTo('/admin',{ user : user.data})
};

export const AdminUsers = async ()=>{
    let users = await UserObj.getUsers()
    console.log('users',users);
    goTo('/adminusers',{ users : users.data})
}



export const ref = [
    {
        path: "online",
        func: TestOnline
    },
    {
        path: "admin",
        func: AdminPage
    },
    {
        path: "viewRes",
        func: viewRes
    },
    {
        path: "adminusers",
        func: AdminUsers
    }
]