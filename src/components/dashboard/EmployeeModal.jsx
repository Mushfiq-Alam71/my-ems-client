
const EmployeeModal = ({ employee }) => {
   const { _id, first_name, last_name, email, gender, phone } = employee;
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
                  <p>Email: {email}</p>
                  <p>Gender: {gender}</p>
                  <p>Phone Number: {phone}</p>
               </div>
            </div>
            <form method="dialog" className="modal-backdrop">
               <button>close</button>
            </form>
         </dialog>
      </div>
   );
};

export default EmployeeModal;