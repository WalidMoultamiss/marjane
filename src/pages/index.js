import { Home } from './Home'
import { Admin } from './Admin'
import { AdminUsers } from './admin/AdminUsers'
import { AdminPromotions } from './admin/AdminPromotions'
import { AdminProducts } from './admin/AdminProducts'
import { logs } from './admin/logs'
import { login } from './login'
import {createusingtoken} from './createusingtoken'



let pages = [
  {
    page: Home,
    path: "/"
  },
  {
    page: Admin,
    path: "admin",
    auth: ["admin_general"]
  },
  {
    page: AdminProducts,
    path: "adminproducts",
    auth: ["admin_general"]
  },

  {
    page: AdminUsers,
    path: "adminusers",
    auth: ["admin_general"]
  },
  {
    page: AdminPromotions,
    path: "adminpromotions",
    auth: ["admin_general"]
  },
  {
    page: logs,
    path: "logs",
    auth: ["admin_general"]
  },
  {
    page: createusingtoken,
    path: "createusingtoken"
  },
  {
    page: login,
    path: "login"
  },
]


export default pages