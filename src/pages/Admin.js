import { QuestionDashboard, UserDashboard } from "../components/dashboard";
import { voiceCommande } from "../components";
import { AdminPage } from "../Mout";
import { goTo } from "../helpers";

export const Admin = ({ user, questions }) => {
    window.swicthMe = (newState) => {
      console.log(newState);
      AdminPage(newState);
    };
    console.log(user);

  window.toggle = (newState) => {
    document.querySelector(newState).classList.toggle("hidden");
  };

  const options = [
    {
      text: "Manage users",
      path: "adminusers",
    },
    {
      text: "Manage promotions",
      path: "/",
    },
    {
      text: "Manage logs",
      path: "",
    },
    {
      text: "Manage marjanes",
      path: "",
    },
  ];

  const viewOptions = () => {
    let html = [];
    options.forEach((option, index) => {
      html.push(`
                <div onclick="_.handlePage('${option.path}')" class=" Options p-10 rounded-md cursor-pointer text-xl font-bold hover:bg-blue-900 border-blue-900 border-4 hover:text-white transition-all text-blue-900">
                    ${option.text}
                </div>
                `);
    });
    return html.join("");
  };

  return `
    <div style="min-width: 188px;" class="leftbar fixed left-0 top-0 z-10 h-full w-1/12 bg-blue-800 bg-mosaic p-5">
        <div class="logo mb-10">
            <h1 class="text-white font-extrabold text-3xl cursor-pointer" onclick="goTo('admin')">Marjane</h1>
        </div>
        <div class="menu h-full flex flex-col items-left justify-between">
            <ul class=" flex flex-col justify-start gap-5">
                <li class="w-full" >
                    <a class="text-white text-left" href="dashboard.html">
                        <i class="fas fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <h1 class="text-white" onclick="viewTable('users')">
                        <i class="fas fa-user"></i>
                        <span>Users</span>
                    </h1>
                </li>
                <li>
                    <h1 class="text-white" onclick="viewTable('List')">
                        <i class="fas fa-list"></i>
                        <span>ListMarjane</span>
                    </h1>
                </li>
                <li>
                    <a class="text-white" href="">
                        <i class="fas fa-shopping-cart"></i>
                        <span>Promotions</span>
                    </a>
                </li>
                <li>
                    <a class="text-white" href="">
                        <i class="fas fa-chart-line"></i>
                        <span>Reports</span>
                    </a>
                </li>
            </ul>
        </div>
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
                hello ${JSON.parse(localStorage.getItem('user')).fullName}
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
                <h1 class="text-4xl text-purple-900 font-extrabold">Dashboard</h1>
                <div class="buttons flex gap-4">
                    <button onclick="toggle('.statistics')" class="p-4 border-blue-300 text-blue-300 border-2 rounded-md">Statistics</button>
                    <button onclick="toggle('.voiceCommande')" class="p-4 border-blue-600 bg-blue-600 text-white border-2 rounded-md">
                    <i class="fas fa-microphone"></i>    
                    Voice commands
                        (beta)</button>
                </div>
            </div>
            <div class="statistics hidden w-full flex gap-4 p-2 justify-evenly">
                <div
                    class="flex items-center justify-between p-7 w-1/4 bg-gradient-to-br from-purple-900 to-purple-500 rounded-md dark:bg-darker">
                    <div>
                        <h6
                            class="text-xs font-medium leading-none tracking-wider text-gray-100 uppercase dark:text-primary-light">
                            Value
                        </h6>
                        <span class="text-xl font-semibold">$</span>
                        <span class="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                            +4.4%
                        </span>
                    </div>
                    <div>
                        <span>
                            <svg class="w-12 h-12 text-gray-300 dark:text-primary-dark"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                </path>
                            </svg>
                        </span>
                    </div>
                </div>
                <div
                    class="flex items-center justify-between p-7 w-1/4 bg-gradient-to-br from-purple-900 to-purple-500 rounded-md dark:bg-darker">
                    <div>
                        <h6
                            class="text-xs font-medium leading-none tracking-wider text-gray-100 uppercase dark:text-primary-light">
                            Users
                        </h6>
                        <span class="text-xl font-semibold">
                        </span>
                        <span class="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                            +2.6%
                        </span>
                    </div>
                    <div>
                        <span>
                            <svg class="w-12 h-12 text-gray-300 dark:text-primary-dark"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                                </path>
                            </svg>
                        </span>
                    </div>
                </div>
                <div
                    class="flex items-center justify-between p-7 w-1/4 bg-gradient-to-br from-purple-900 to-purple-500 rounded-md dark:bg-darker">
                    <div>
                        <h6
                            class="text-xs font-medium leading-none tracking-wider text-gray-100 uppercase dark:text-primary-light">
                            Orders
                        </h6>
                        <span class="text-xl font-semibold">
                        </span>
                        <span class="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                            +3.1%
                        </span>
                    </div>
                    <div>
                        <span>
                            <svg class="w-12 h-12 text-gray-300 dark:text-primary-dark"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                            </svg>
                        </span>
                    </div>
                </div>
                <div
                    class="flex items-center justify-between p-7 w-1/4 bg-gradient-to-br from-purple-900 to-purple-500 rounded-md dark:bg-darker">
                    <div>
                        <h6
                            class="text-xs font-medium leading-none tracking-wider text-gray-100 uppercase dark:text-primary-light">
                            Tickets
                        </h6>
                        <span class="text-xl font-semibold">
                        </span>
                        <span class="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                            +3.1%
                        </span>
                    </div>
                    <div>
                        <span>
                            <svg class="w-12 h-12 text-gray-300 dark:text-primary-dark"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z">
                                </path>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div class="flex p-12 py-5 justify-start">
                <h2 class="text-3xl font-bold">Options</h2>
            </div>
            <div class="w-full flex justify-evenly gap-5 flex-wrap">
                ${viewOptions()}
            </div>
            <div class="users tables px-5 hidden">
                <div class="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <header class="px-5 py-4 border-b border-gray-100">
                        <h2 class="font-semibold text-gray-800">Customers</h2>
                    </header>
                    <div class="p-3">
                        <div class="overflow-x-auto">
                            <table class="table-auto w-full">
                                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-semibold text-left">Name</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-semibold text-left">Email</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-semibold text-left">Address</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-semibold text-center">Contact</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-semibold text-center">Passport</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="text-sm divide-y divide-gray-100">
                                    <% data.users.forEach(Metion(user)
                                        <tr>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="font-medium text-gray-800">
                                                        </div>
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left">
                                                    </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-medium text-green-500">
                                                    </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-lg text-center">
                                                    </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-lg text-center">
                                                    </div>
                                            </td>
                                        </tr>
                                        <%
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        `;
};
