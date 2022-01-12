import pages from "../pages";
import { router, render } from "./";

export const goTo = async (path, data = []) => {
  console.log("goTo", path, data );
  //get the login page
  const authPage = pages.find((page) => page?.path === "login");
  //check from token if he is still auth
  let auth = await _.isAuth();
  //if he is auth
  if (auth.success == 1) {
    //get the page
    history.pushState({ usreid: 3 }, path, "/?page=" + path);
    router();
    let page = pages.find((page) => {
      let checker = path === "/" ? path : path.replace("/", "");
      return page?.path.toLowerCase() === checker.split('#')[0];
    });
    if (page?.auth?.length) {
      if (page?.auth?.includes(auth.message.user.role)) {
        router();
        render(page, data
          );
        }else{
          router();
          render(authPage);
        }
      } else {
    console.log("page", page);
    history.pushState({ usreid: 3 }, path, "/?page=" + page.path);
    router();
    render(page, data);
  }
} else {
  history.pushState({ usreid: 3 }, path, "/?page=" + path);
  router();
  render(authPage);
}
};
