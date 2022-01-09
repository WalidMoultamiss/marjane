import { popup } from "../components";
import { AdminPage } from "../Mout";

export const login = (data) => {
  //get info from local storage
  const user = {
    email: localStorage.getItem("email"),
    password: localStorage.getItem("password"),
  };

  //loginFunction
  window.loginFunction = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email != "" && password != "") {
      const response = await _.login({
        email: email,
        password: password,
      });
      console.log(response.success);
      if (!response.success == 1) {
        document.getElementById("login-failed").style.display = "flex";
      } else {
        let token = response.token;
        localStorage.setItem("user", JSON.stringify(response.user));
        localStorage.setItem("token", token);
        _.handlePage('admin')
      }
    }
  };

  return `
        <div class="flex dark:bg-gray-900 flex-col items-center justify-center h-screen">
            <div class="bg-white dark:bg-gray-700 shadow-lg rounded-lg ">
            <div class="px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <h1 class="text-2xl font-bold dark:text-white text-center">Login</h1>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 dark:text-white text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input class="shadow appearance-none dark:bg-gray-600 border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" value="walid@gmail.com">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 dark:text-white text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border dark:bg-gray-600  rounded w-full py-2 px-3 text-gray-700 dark:text-white mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" value="1234" type="password" placeholder="******************">
                    <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
                </div>
                <div class="flex items-center justify-between">
                    <a class="inline-block align-baseline font-bold text-sm text-red-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                    <button onclick="loginFunction()" class=" bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Login
                    </button>
                </div>
                </div>
            </div>
        </div>
        ${popup("login failed", "login-failed")}
        ${popup("UnAuthorized user", "unAuthUser")}
      `;
};
