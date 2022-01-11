import { DELETE, post } from "../../helpers";
import { leftBar } from "../../components";

export const AdminUsers = ({ users, questions }) => {
  //   window.swicthMe = (newState) => {
  //     console.log(newState);
  //     AdminPage(newState);
  //   };
  window.toggle = (className) => {
    document.querySelector(className).classList.toggle("hidden");
  };

  window.addUser = async () => {
    let user = {
      fullName: document.querySelector("#fullName").value,
      email: document.querySelector("#email").value,
      role: document.querySelector("#role").value,
    };

    const validateEmail = (email) => {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    };

    if (!validateEmail(user.email)) {
      $("#email").classList.add("border-red-500");
      $("#error_email").classList.remove("hidden");
    } else {
      $("#email").classList.remove("border-red-500");
      $("#error_email").classList.add("hidden");
    }

    if (user.fullName.length < 3) {
      $("#fullName").classList.add("border-red-500");
      $("#error_fullName").classList.remove("hidden");
    } else {
      $("#fullName").classList.remove("border-red-500");
      $("#error_fullName").classList.add("hidden");
    }

    if (user.role.length < 3) {
      $("#role").classList.add("border-red-500");
      $("#error_role").classList.remove("hidden");
    } else {
      $("#role").classList.remove("border-red-500");
      $("#error_role").classList.add("hidden");
    }

    if (
      validateEmail(user.email) &&
      user.fullName.length > 2 &&
      user.role.length > 2
    ) {
      $(".spinner-border").classList.toggle("hidden");
      const result = await post("/api/users/createToken", user);
      if (result.success == 1) {
        $("#fullName").value = "";
        $("#email").value = "";
        $("#role").value = "";
        $("#error_email").classList.add("hidden");
        $("#error_fullName").classList.add("hidden");
        $("#error_role").classList.add("hidden");
        $("#email").classList.remove("border-red-500");
        $("#fullName").classList.remove("border-red-500");
        $("#role").classList.remove("border-red-500");
        $("#success_add").classList.remove("hidden");
        $(".spinner-border").classList.toggle("hidden");
        setTimeout(() => {
          $("#success_add").classList.add("hidden");
        }, 3000);
        console.log(result);
      }
    }

    console.log(user);
  };

  window.popupDelete = (popupDeleteSwitcher, e, user) => {
    let view = popupDeleteSwitcher;
    e.parentNode.parentElement.classList.toggle("bg-red-300");

    window.deleteUser = async () => {
      e.parentNode.parentElement.remove();
      let res = await DELETE("/api/users/", { id: user });
      console.log(res);
      document.querySelector(".popupUser").remove();
    };

    window.closePopupUser = () => {
      e.parentNode.parentElement.classList.remove("bg-red-300");
      document.querySelector(".popupUser").remove();
    };

    let html = `
                <div  class="popupUser ${
                  view ? "" : "hidden"
                } min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"   id="modal-id">
            <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
            <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            <!--content-->
            <div class="">
                <!--body-->
                <div class="text-center p-5 flex-auto justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-red-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
                                <h2 class="text-xl font-bold py-4 ">Are you sure?</h3>
                                <p class="text-sm text-gray-500 px-8">Do you really want to delete this account?
                        This process cannot be undone</p>
                </div>
                <!--footer-->
                <div class="p-3  mt-2 text-center space-x-4 md:block">
                    <button onclick="closePopupUser()" class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                        Cancel
                    </button>
                    <button onclick="deleteUser()" class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Delete</button>
                </div>
            </div>
            </div>
        </div>
      `;
    document.body.insertAdjacentHTML("beforeend", html);
  };

  const viewUsers = () => {
    let html = [];
    console.log("users", users);
    users?.splice(1).forEach((user, index) => {
      html.push(`
        <tr class="rowUser">
            <td class="py-4" >
                <input type="checkbox"  class="checkbox checkbox-primary">
            </td>
            <td class="py-4" >${user.fullName}</td>
            <td class="py-4" >${user.email}</td>
            <td class="py-4" >${user.role}</td>
            <td class="py-4" >${user.created_at
              .split(".000Z")[0]
              .split("T")
              .join("  ")}</td>
            <td class="py-4" >
                <button class="bg-red-500 rounded " onclick="popupDelete(true , this ,${
                  user.id
                })">
                    <lord-icon
                    src="https://cdn.lordicon.com/gsqxdxog.json"
                    trigger="hover"
                    class="w-12 h-12 p-2"
                    colors="primary:#ffffff,secondary:#ffffff"
                    >
                    </lord-icon>
                </button>
                &nbsp;
                <button class=" bg-blue-500 rounded" onclick="">
                    <lord-icon
                        src="https://cdn.lordicon.com/wloilxuq.json"
                        trigger="hover"
                        class="w-12 h-12 p-2 "
                        colors="primary:#ffffff,secondary:#ffffff"
                        >
                    </lord-icon>
                </button>
            </td>
        </tr>
        `);
    });
    return html.join("");
  };

  return `
    <div style="min-width: 188px;" class="leftbar fixed left-0 top-0 z-10 h-full w-1/12 bg-blue-800 bg-mosaic p-5">
        ${leftBar()}
    </div>
    <div style="padding: 0 0 0 188px;" class="dashboard w-full">
        <div style="width: calc(100vw - 188px);" class="navbar fixed top-0 flex justify-between items-center h-24 p-4 bg-blue-500">
            <div class="search  w-3/12">
                <input type="text" class="p-3 rounded-sm outline-none" placeholder="Search ...">
            </div>
            <nav aria-label="Secondary" class="hidden space-x-2 md:flex md:items-center">
                <!-- Notification button -->
                <button
                    class="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker">
                    <span class="sr-only">Open Notification panel</span>
                    <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
                        </path>
                    </svg>
                </button>


                <!-- Settings button -->
                <button
                    class="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker">
                    <span class="sr-only">Open settings panel</span>
                    <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                        </path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                </button>

                <!-- User avatar button -->
                hello ${JSON.parse(localStorage.getItem("user")).fullName}
                <div class="relative" x-data="{ open: false }">
                    <button onclick="handleMenu()" type="button"
                        class="transition-opacity duration-200 rounded-full dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100">
                        <span class="sr-only">User menu</span>
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                    </button>
                    <!-- User dropdown menu -->
                    <div id="menu_user"
                        class="absolute right-0 w-48 py-1 bg-gradient-to-br from-purple-900 to-purple-500 rounded-md shadow-lg top-12 ring-1 ring-black ring-opacity-5 dark:bg-dark focus:outline-none hidden">
                        <a href="#" role="menuitem"
                            class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary">
                            Your Profile
                        </a>
                        <a href="#" role="menuitem"
                            class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary">
                            Settings
                        </a>
                        <a href="#" role="menuitem"
                            class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary">
                            Logout
                        </a>
                    </div>
                </div>
            </nav>
        </div>
        <div class="body mt-24">
            <div class="head p-10 flex justify-between">
                <h1 class="text-4xl text-purple-900 font-extrabold">Users</h1>
                <div class="buttons flex gap-4">
                    <button onclick="toggle('.addUser')" class="p-4 border-blue-600 bg-blue-600 text-white border-2 rounded-md">
                    <i class="fa fa-plus"></i>
                    &nbsp;
                    Add user</button>
                </div>
            </div>
            <section class="antialiased text-gray-600 h-screen px-4">
                <div class="flex ">
                    <!-- Table -->
                    <div class="w-full  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header class="px-5 py-4 border-b border-gray-100">
                            <h2 class="font-semibold text-gray-800">Users</h2>
                        </header>
                        <div class="p-3">
                            <div class="overflow-x-auto">
                                <table class=" w-full">
                                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-center">N</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-center">Full name</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-center">Email</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-center">Role</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-center">Created at</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-center">Action</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                        ${viewUsers()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <!-- Table -->
                    <div class="addUser hidden">
                        <div class="bg-white px-10 mx-3 py-8 w-screen shadow-md max-w-sm">
                        <div class="space-y-4">
                            <h1 class="text-center text-2xl font-semibold text-gray-600">Register</h1>
                            <div>
                                <label for="fullName" class="block mb-1 text-gray-600 font-semibold">Full name</label>
                                <input type="text" id="fullName" class="bg-indigo-50 border-2 border-white px-4 py-2 outline-none rounded-md w-full" />
                                <p id="error_fullName" class="text-red-500 text-xs hidden italic">Please enter a full name</p>
                            </div>
                            <div>
                                <label for="email" class="block mb-1 text-gray-600 font-semibold">Email</label>
                                <input type="email" id="email"  class="bg-indigo-50  border-2 border-white px-4 py-2 outline-none rounded-md w-full" />
                                <p id="error_email" class="text-red-500 text-xs hidden italic">Please enter a valid email address</p>
                            </div>
                            <div>
                                <label for="email" class="block mb-1 text-gray-600 font-semibold">Password</label>
                                <select id="role" class="bg-indigo-50 border-2 border-white px-4 py-2 outline-none rounded-md w-full">
                                    <option selected disabled value="">Select role</option>
                                    <option value="admin_center" >Admin center</option>
                                    <option value="chef_rayon">Chef de rayon</option>
                                </select>
                                <p id="error_role" class="text-red-500 text-xs hidden italic">Please select a role</p>
                            </div>
                        </div>
                        <button onclick="addUser()" class="mt-4 w-full flex items-center justify-center gap-3 bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
                            
                        <div class=" spinner-border animate-spin inline-block hidden w-4 h-4 border-1 border-red-400 rounded-full">
                            <span class="text-2xl font-bold">.</span>
                        </div>
                        Register</button>
                        <p id="success_add" class="text-green-500 text-lg hidden italic">Sussess</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        `;
};
