export const viewLogs =  (logs) => {
    const  viewlogs =  () => {
        let html = [];
        logs?.map((log) => {
          html.push(`
                    <tr>
                        <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                            ${log.comment}
                        </td>
                        <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                            ${log.created_at}
                        </td>
                        <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                            ${log.type}
                        </td>
                    </tr>
                `);
        });
        return html.join("");
      };

    return `
                     <div class="mb-4 flex items-center justify-between">
                        <div>
                           <h3 class="text-xl font-bold text-gray-900 mb-2">Latest Logs</h3>
                        </div>
                        <div class="flex-shrink-0">
                           <button onclick="_.handlePage('logs')" class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">View all</button>
                        </div>
                     </div>
                     <div class="flex flex-col mt-8">
                        <div class="overflow-x-auto rounded-lg">
                           <div class="align-middle inline-block min-w-full">
                              <div class="shadow overflow-hidden sm:rounded-lg">
                                 <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-50">
                                       <tr>
                                          <th scope="col" class="p-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             Action
                                          </th>
                                          <th scope="col" class="p-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             Date &amp; Time
                                          </th>
                                          <th scope="col" class="p-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             status
                                          </th>
                                       </tr>
                                    </thead>
                                    <tbody class="bg-white">
                                        ${viewlogs()}
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  
    `;
};