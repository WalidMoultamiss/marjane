import { back } from "../helpers";
import { header } from "../components";
import { ref } from "../Mout";
import { goTo, router, UserObj, PromotionObj, render } from "../helpers";

class Controller {
  constructor() {
    window._ = this;
    router();

    
window.$ = (className) => {
    return document.querySelector(className);
  };
  window.$$ = (className) => {
    return document.querySelectorAll(className);
  };

    //Our Global Router Link
    window.goTo = goTo;
    window.clearAllTimeOutes = this.clearAllTimeOutes;

    //login onload
    this.loginOnload();

    //render Header components
    this.updateHeader();

    //Listener on navigator go back
    back();

    //Handle routing system on load
    goTo(location.pathname);
  }

  loginOnload = async () => {
    console.log("first load", location.pathname);
    let res = await this.isAuth()
    console.log('resqu' , res);
    if (!res.status == 1) this.logout();
    //get query string
    
    this.handlePage(location.pathname);
  };
  handlePage = async (path) => {
    let res = ref.find((elm) => elm.path == path.split("/").join(""));
    console.log('res',res);
    let query = location.search;
    res ? res.func(query) : goTo(`/${path.split("/").join("")}`);
  };


  isAuth = () => {
    return UserObj.checkToken();
  };


  addUser = async (UserData) => {
    let user = await UserObj.instription(UserData);
    this.updateHeader();
    localStorage.setItem("email", user.email);
    localStorage.setItem("password", user.password);
    return user;
  };

  logout = () => {
    UserObj.user = {};
    this.updateHeader();
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    goTo("/login");
  };

  //login
  login = async (UserData) => {
    let user = await UserObj.login(UserData);
    return user;
  };

  updateHeader = async () => {
    await UserObj.getUsers();
    render(
      {
        path: "header",
        page: header,
      },
      UserObj.user
    );
  };

  clearAllTimeOutes = () => {
    let id = window.setTimeout(() => {}, 0);
    while (id--) {
      window.clearTimeout(id);
    }
  };
}

export default Controller;
