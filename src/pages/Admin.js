import { AdminPage } from "../Mout";
import { stats } from "../components";
import  {viewLogs}  from "../components";
import  {leftBar}  from "../components";
export const Admin = ({ user, logs }) => {
  window.swicthMe = (newState) => {
    console.log(newState);
    AdminPage(newState);
  };
  console.log(user);

  window.toggle = (newState) => {
    document.querySelector(newState).classList.toggle("hidden");
  };



  const Options = [
    {
      text: "Manage users",
      path: "adminusers",
    },
    {
      text: "Manage promotions",
      path: "adminpromotions",
    },
    {
      text: "Manage logs",
      path: "logs",
    },
    {
      text: "Manage marjanes",
      path: "",
    },
    {
        text: "Manage products",
        path: "adminproducts",
    }
  ];

  const viewOptions = () => {
    let html = [];
    Options.forEach((option, index) => {
      html.push(`
      <div onclick="_.handlePage('${option.path}')" class="p-2 flex transition-all  hover:bg-blue-100 transform hover:scale-105 flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                  <div class="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                    <lord-icon
                        src="https://cdn.lordicon.com/gqdnbnwt.json"
                        trigger="hover"
                        colors="primary:#4030e8,secondary:#4030e8"
                        style="width:25px;height:25px">
                    </lord-icon>
                  </div>
                  <p class="text-xs mt-1 text-center font-semibold">${option.text}</p>
                </div>

                `);
    });
    return html.join("");
  };

  return `
    ${leftBar()}
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
                        <a  role="cursor-pointer menuitem"
                            class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary">
                            Your Profile
                        </a>
                        <a  role="cursor-pointer menuitem"
                            class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary">
                            Settings
                        </a>
                        <a  role="cursor-pointer menuitem"
                            class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary">
                            Logout
                        </a>
                    </div>
                </div>
            </nav>
        </div>
        <div style="height: calc(100vh - 88px);" class="body flex mt-24">
            <div class=" w-40 h-full p-4 border-r-2 flex flex-col justify-evenly gap-5 flex-wrap">
                <h2 class="text-xl font-bold">Options</h2>
                ${viewOptions()}
            </div>
            <div class="w-full">
            <div class="head p-10 flex justify-between">
                <h1 class="text-4xl text-purple-900 font-extrabold">Dashboard</h1>
                <div class="buttons flex gap-4">
                    <button onclick="toggle('.statistics')" class="p-4 border-blue-300 text-blue-300 border-2 rounded-md">Statistics</button>
                    <button onclick="toggle('.voiceCommande')" class="p-4 border-blue-600 bg-blue-600 text-white border-2 rounded-md">
                    <i class="fas fa-microphone"></i>    
                    Voice commands
                        (beta)</button>
                </div>
            </div>
            ${stats()}
            <!-- body -->
            <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                ${viewLogs(logs)}
            </div>
            <!-- body -->
            </div>
            </div>
        </div>
        `;
};
