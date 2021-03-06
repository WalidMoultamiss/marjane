export const leftBar = () => {
    return `
        <div style="min-width: 188px;" class="leftbar fixed left-0 top-0 z-10 h-full w-1/12 bg-blue-200  p-5">
        <div class="logo mb-10">
            <h1 class="text-blue-900 font-extrabold text-3xl cursor-pointer" onclick="_.handlePage('admin')">Marjane</h1>
        </div>
        <nav class="mt-5 px-2">
                <a  class="cursor-pointer group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full bg-blue-800 text-blue-300">
              <svg class="mr-4 h-6 w-6 " stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"></path>
              </svg>
              Home
            </a>
            <a  class="cursor-pointer mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
              <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              Messages
            </a>
            <a  class="cursor-pointer mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
              <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
              Bookmarks
            </a>
            <a  class="cursor-pointer mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
              <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              Lists
            </a>
                <a  class="cursor-pointer mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
              <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              Profile
            </a>
                <a  class="cursor-pointer mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
              <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              More
            </a>
            <div class="absolute left-5 bottom-5">
                    <button class="p-4 text-blue-500 transform transition-all hover:bg-blue-800 hover:text-blue-100 px-10 bg-white rounded-md" onclick="logout()">
                        <i class="fas fa-sign-out-alt"></i>
                        logout
                    </button>
                </div>
          </nav>
    </div>
    `
}