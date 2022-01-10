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
        _.handlePage("admin");
      }
    }
  };

  return `
    <div class="w-screen h-screen pt-12 bg-blue-200">
            <div class="flex bg-white rounded-lg shadow-lg  overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                    <div class="hidden  justify-center items-center lg:flex lg:w-1/2 bg-blue-900 bg-repeat bg-mosaic ">
                        <h1 class="text-4xl text-white font-bold">MARJANE</h1>
                    </div>
                    <div class="w-full p-8 lg:w-1/2 py-48">
                        <h2 class="text-2xl font-semibold text-gray-700 text-center">Login to my account</h2>
                        <div class="mt-4">
                            <div class="flex justify-start">
                                <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            </div>
                            <input id="email" class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" value="walid@gmail.com">
                        </div>
                        <div class="mt-4">
                            <div class="flex justify-start">
                                <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            </div>
                            <input id="password" class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" value="1234">
                        </div>
                        <div class="mt-8">
                            <button onclick="loginFunction()" class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
                        </div>
                    </div>
                </div>
        ${popup("login failed", "login-failed")}
        ${popup("UnAuthorized user", "unAuthUser")}
    </div>
      `;
};
