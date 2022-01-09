import pages from "../pages";
import { router, render } from "./";

export const goTo = async (path, data = []) => {
  //get the login page
  const authPage = pages.find((page) => page?.path === "login");
  //check from token if he is still auth
  let auth = await _.isAuth();
  history.pushState({ usreid: 3 }, path, "/?page=" + path);
  router();
  let page = pages.find((page) => {
    let checker = path === "/" ? path : path.replace("/", "");
    return page?.path.toLowerCase() === checker;
  });
  if (!page?.auth?.includes(auth.data.role)) {
    history.pushState({ usreid: 3 }, path, "/?page=" + page.path);
    router();
    render(authPage, {
      error: { status: true, message: "what are you doing" },
    });
  } else {
    render(page, data);
  }
};
