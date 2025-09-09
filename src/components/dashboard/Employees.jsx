import {
   useReactTable,
   flexRender,
   getCoreRowModel,
   getPaginationRowModel,
} from "@tanstack/react-table";
import { useState, useEffect } from "react";

const Employees = () => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch("http://localhost:5000/employee");
            if (!response.ok) {
               throw new Error(`HTTP error! status: ${response.status}`);
            }
            const jsonData = await response.json();
            setData(jsonData);
         } catch (err) {
            setError(err.message);
            console.error("Error fetching data:", err);
         } finally {
            setLoading(false);
         }
      };

      fetchData();
   }, []);

   const columns = [
      {
         header: "No.",
         cell: ({ row }) => row.index + 1, // This adds sequential numbering
      },
      {
         header: "Name",
         accessorFn: (row) => `${row.first_name} ${row.last_name}`,
         id: "full_name",
      },
      {
         header: "Email",
         accessorKey: "email",
      },
      {
         header: "Gender",
         accessorKey: "gender",
      },
      {
         header: "Phone",
         accessorKey: "phone",
      },
   ];

   const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
   });

   if (loading) {
      return <div className="p-4">Loading employee data...</div>;
   }

   if (error) {
      return <div className="p-4 text-red-500">Error: {error}</div>;
   }

   if (!data || data.length === 0) {
      return <div className="p-4">No employee data found</div>;
   }

   return (
      <div className="p-4">
         <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 shadow-sm rounded-md">
               <thead className="bg-gray-100">
                  {table.getHeaderGroups().map((headerGroup) => (
                     <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                           <th
                              key={header.id}
                              className="text-left px-4 py-2 border-b border-gray-200 font-semibold text-sm text-gray-700"
                           >
                              {flexRender(
                                 header.column.columnDef.header,
                                 header.getContext()
                              )}
                           </th>
                        ))}
                     </tr>
                  ))}
               </thead>
               <tbody>
                  {table.getRowModel().rows.map((row) => (
                     <tr key={row.id} className="even:bg-gray-50">
                        {row.getVisibleCells().map((cell) => (
                           <td
                              key={cell.id}
                              className="px-4 py-2 border-b border-gray-100 text-sm text-gray-800"
                           >
                              {flexRender(
                                 cell.column.columnDef.cell,
                                 cell.getContext()
                              )}
                           </td>
                        ))}
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>

         {/* Pagination Controls */}
         <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-600">
               Page {table.getState().pagination.pageIndex + 1} of{" "}
               {table.getPageCount()}
            </div>
            <div className="flex gap-2">
               <button
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                  className="px-3 py-1 border rounded text-sm disabled:opacity-50"
               >
                  Previous
               </button>
               <button
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                  className="px-3 py-1 border rounded text-sm disabled:opacity-50"
               >
                  Next
               </button>
            </div>
         </div>
      </div>
   );
};

export default Employees;