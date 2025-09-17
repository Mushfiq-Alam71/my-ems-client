
const EmployeeModal = ({ employee }) => {
   const { _id, first_name, last_name, email, gender, phone, role, department } = employee;
   const modalID = `employee_modal_${_id}`;
   return (
      <div>
         <button className="btn"
            onClick={() => document.getElementById(modalID).showModal()}>
            {first_name + " " + last_name}
         </button>
         <dialog id={modalID} className="modal ">
            <div className="modal-box border-4 border-purple-700">
               <h3 className="font-bold text-lg">{first_name + " " + last_name}</h3>
               <div className="">
                  <p className=""><span className="font-bold">Email:</span> {email}</p>
                  <p><span className="font-bold">Gender:</span> {gender}</p>
                  <p><span className="font-bold">Phone number:</span> {phone}</p>
                  <p><span className="font-bold">Role:</span> {role}</p>
                  <p><span className="font-bold">Department:</span> {department}</p>
               </div>
            </div>
            <form method="dialog" className="modal-backdrop overflow-x-hidden">
               <button>close</button>
            </form>
         </dialog>
      </div>
   );
};

export default EmployeeModal;