export const Home = () => {
  return `
        <div class=" bg-gray-100 dark:bg-gray-900  h-full ">
                <section class="h-full bg-blue-900 bg-mosaic bg-repeat flex flex-col justify-center items-center shadow-lg  py-16 md:py-20 xl:py-28">
                    <div class="bg-logo bg-cover bg-center w-52 h-44 mb-10"></div>
                    <h1 class="text-white text-4xl font-bold" >Marjane my admin</h1>
                    <h3 class="text-white text-xl pt-4" >Choisir un portail</h3>
                    <div class="w-full flex justify-center gap-5 p-5">
                        <button onclick="goTo('admin')" class="w-44 h-32 rounded-md hover:bg-gray-50 focus:scale-95 transform hover:scale-105 transition-all bg-white text-2xl text-center">Portail Admin general</button>
                        <button onclick="goTo('admin')" class="w-44 h-32 rounded-md hover:bg-gray-50 focus:scale-95 transform  hover:scale-105 transition-all bg-white text-2xl text-center">Portail Admin center</button>
                        <button onclick="goTo('admin')" class="w-44 h-32 rounded-md hover:bg-gray-50 focus:scale-95 transform  hover:scale-105 transition-all bg-white text-2xl text-center">Portail Chef de rayon</button>
                    </div>
                    <span class="text-white absolute bottom-2" >©2022 Marjane - <button>Tous droits réservés</button> - <button>Mentions légales</button> - <button>Données personnelles</button></span>
                </section>
        </div>
    `;
};
