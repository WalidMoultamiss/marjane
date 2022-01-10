import { goTo, post } from "../helpers";

export const createusingtoken = (data) => {
  window.createUsingToken = async () => {
    let password = $("#password").value;
    let body = {
      password: password,
      token: data.token.split('=')[1],
    };

    console.log("body", body);
    if(password.length > 3){
        let res = await post("/api/users/createUsingToken", body);
        console.log("res", res);
        if(res.success == 1) goTo('login')
    }
  };
  return `
        <div class="py-12">
            <div class="flex bg-white rounded-lg shadow-lg  overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                    <div class="hidden  justify-center items-center lg:flex lg:w-1/2 bg-blue-900 bg-repeat bg-mosaic " >
                        <h1 class="text-4xl text-white font-bold">MARJANE</h1>
                    </div>
                    <div class="w-full p-8 lg:w-1/2 py-48">
                        <h2 class="text-2xl font-semibold text-gray-700 text-center">Validate my account</h2>
                        <div class="mt-4">
                            <div class="flex justify-between">
                                <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            </div>
                            <input id="password" class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password">
                        </div>
                        <div class="mt-8">
                            <button onclick="createUsingToken()" class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Create Account</button>
                        </div>
                    </div>
                </div>
        </div>
    `;
};
