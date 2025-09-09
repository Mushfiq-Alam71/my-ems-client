import { useEffect } from 'react';
import { useState } from 'react';
import EmployeeModal from './EmployeeModal.jsx';

const Employee = () => {
   const [employee, setEmployee] = useState([]);

   useEffect(() => {
      fetch("http://localhost:5000/employee")
         .then(res => res.json())
         .then(data => setEmployee(data))
   }, [])
   return (
      <div>
         <h1>this is employee section</h1>
         <h1>total employee: {employee.length}</h1>
         <div className='flex flex-col gap-2'>
            {employee.map(employee => <EmployeeModal key={employee._id} employee={employee}></EmployeeModal>)}
         </div>
      </div>
   );
};

export default Employee;