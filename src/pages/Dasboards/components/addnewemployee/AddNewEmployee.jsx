import React, {useState} from "react";
import "./addNewEmployee.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const AddNewEmployee = (props) => {
    const [selectedDate, setSelectedDate] = useState(null)

  return props.trigger ? (
    <div className="addNewEmployee">
      <form action="">
        <input
          type="text"
          name="fullname"
          required="required"
          placeholder="Full name"
        />
         <input
          type="email"
          name="email"
          required="required"
          placeholder="Email"
        />
        <input type="text" 
        name="Number" 
        placeholder="Phone number" />
        <div className="salary-role-bonus">
            <input
          type="text"
          name="role"
          required="required"
          placeholder="Role"
          className="sbr"
        />  <input
        type="text"
        name="salary"
        required="required"
        placeholder="Salary"
         className="sbr"
      />   <input
          type="text"
          name="bonus"
          required="required"
          placeholder="Bonuses"
          className="sbr"
        />
        </div>
        <div className="gender">
          <label>Gender</label>   
          <select name="gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
          </select>
        </div>
        <div className="birthday"> 
        <label className="birthday">Birthday</label>
        <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)}/>
        </div>
        <input
          type="password"
          name="password"
          required="required"
          placeholder="Password"
        />
         <input
          type="password"
          name="confirmcd"
          required="required"
          placeholder="Confirm"
        />
        <div className="btns">
        <button className="submit">Submit</button>
        <button className="cancel">Cancel</button>
        </div>

      </form>
    </div>
  ) : (
    ""
  );
};

export default AddNewEmployee;
