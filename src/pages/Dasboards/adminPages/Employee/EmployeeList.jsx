import React , {useState} from 'react'
import './employeeList.css'
import {ExpandMore} from '@material-ui/icons'
import data from "../../../../mock-data.json";
import AddNewEmployee from '../../components/addnewemployee/AddNewEmployee';
const EmployeeList = () => {
    const [employees, setEmployees] = useState(data);
    const [buttonPopup, setButtonPopup] =useState(false);
    return (
        <div className='employeeList'>
        <h3 className='title'>Employee List</h3>
         <table>
             <thead>
                 <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Number</th>
                     <th>Role</th>
                     <th>Salary</th>
                     <th>Actions</th>
                     <th>More Info</th>
                 </tr>
             </thead>
             <tbody>
                 {employees.map((employee)=>(
                    <tr>
                        <td className='id'>{employee.id}</td>
                        <td className='name'>{employee.fullName}</td>
                        <td className='email'>{employee.email}</td>
                        <td className='number'>{employee.phoneNumber}</td>
                        <td className='role'>{employee.job}</td>
                        <td className='salary'>${employee.salary}</td>
                        <td className='actions'><button className='editbtn'>Edit</button>
                        <button className='deletebtn'>Delete</button></td>
                        <td className='moreInfo'><ExpandMore/></td>
                    </tr>))}
             </tbody>
         </table> 
         <div className='addNewEmployeeContainer'>
        <p className='text'>To add a new employee click here </p>
         <button className='addbtn' onClick={()=>setButtonPopup(!buttonPopup)}>
            Add</button>
         </div>
         
        <AddNewEmployee trigger={buttonPopup}/>
        <div className="addNewEmployee"></div>
        </div>
    )
}

export default EmployeeList
