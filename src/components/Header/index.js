import { goTo } from "../../helpers";
import { AdminPage } from "../../Mout";

export const header = (data) => {
    let user = data;

    //onclick toggle drak mode tailwind
    window.toggleDarkMode = () => {
        const body = document.querySelector("body");
        body.classList.toggle("dark");
    };

    //logout remove email and password from local storage
    window.logout = () => {
        _.logout()
        goTo("/login");
    };


    window.navigate = (type, where) => {
        console.log(type, where);
        window.clearAllTimeOutes()
        type === 'link' ? goTo(where) : AdminPage()
    }

    window.isLoggedIn = () => {
        if (localStorage.getItem("email") && localStorage.getItem("password")) {
            return true;
        } else {
            return false;
        }
    };

    window.isAdmin = () => {
        return user.role === "admin_general" ? (`
                <svg onclick="navigate('admin','admin')" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
                    stroke-linejoin="round" class="feather feather-settings
                        feather feather-moon p-2 leading-none border 
                        rounded text-white border-white hover:border-transparent 
                        hover:text-black hover:bg-white cursor-pointer
                    ">
                    <circle cx="12" cy="12" r="3">
                    </circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                    </path>
                </svg>
         `) : ""
    }

    return `
        
    `;
};
