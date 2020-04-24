import React from "react";
import "./addinstructor.css";
import {AddNewInstructor}from '../../api';
import Swal from "sweetalert2";
class NewInstructor extends React.Component {
  constructor() {
    super();
    this.state = {
        FullName: "",
        UserName: "",
        NationalId: "",
        Email: "",
        Phone: "",
        password: "",
        ClubName: "",
        InstructorRole: "Instructors",
        InstructorsType: ""
    };
    this.addInstructor = this.addInstructor.bind(this);
}
addInstructor = instructor => {
    // Make an axios request
    console.log(instructor,"add");
    AddNewInstructor(instructor)
    
      .then(response => {
        Swal.fire(` ${instructor.FullName} تم إضافة مدرب `, "", 'success');

          })
      .catch(error => {
        console.log("API ERROR: ", error);
      });
  };
  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });
  formSubmit = e => {
    const newInstructor = this.state;
     console.log(newInstructor, " NewInstructor");
    e.preventDefault();
    this.props.history.push("/ManagerHeader/Home");
    this.addInstructor(newInstructor);
   };
  render() {
    const { FullName,UserName,NationalId,Email ,Phone ,password , ClubName , InstructorsType} = this.state;
    return (
      <div>
        <form className="parent-wrappe" >
          <h3>إضــافــة مـدرب</h3>
          <div className="subscribe-wrappe">
            <div >
              {/* <label >الاسم الكامل</label> */}
              <br />
              <input
                className="subscribe-input"
                required
                name="FullName"
                value={FullName}
                type="FullName"
                placeholder="الاسم الكامل"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              {/* <label>اسم المستخدم</label> */}
              <br />
              <input
                className="subscribe-input"
                required
                name="UserName"
                value={UserName}
                type="text"
                placeholder="اسم المستخدم"
                onChange={this.handleChange}
                
              />
            </div>
            <div>
              <br />
              {/* <label>رقم الهوية</label> */}
              <br />
              <input
                className="subscribe-input"
                required
                name="NationalId"
                value={NationalId}
                type="NationalId"
                placeholder="رقم الهوية"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              {/* <label>البريد الإلكتروني</label> */}
              <br />
              <input
                className="subscribe-input"
                required
                name="Email"
                value={Email}
                placeholder="البريد الإلكتروني"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              {/* <label>رقم الجوال</label> */}
              <br />
              <input
                className="subscribe-input"
                required
                name="Phone"
                value={Phone}
                type="Phone"
                placeholder="رقم الجوال"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              {/* <label>الرقم السري</label> */}
              <br />
              <input
                className="subscribe-input"
                required
                name="password"
                value={password}
                type="password"
                placeholder="الرقم السري"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              {/* <label>ClubName</label> */}
              <br />
              <input
                className="subscribe-input"
                required
                name="ClubName"
                value={ClubName}
                type="ClubName"
                placeholder="اسم النادي"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br /><br/>
              <label className="to-the-right">مجال التدريب:</label>
              <select
                className="subscribe-input"
                required
                name="InstructorsType"
                value={InstructorsType}
                type="text"
                onChange={this.handleChange}
              >
               <option className="dropdown-content">إختر المجال</option>
               <option className="dropdown-content" value="Entertainment">الترفيهي</option>
               <option className="dropdown-content" value="Cultural">الثقافي</option>
               <option className="dropdown-content" value="Education">التعليمي</option>
               <option className="dropdown-content" value="Sport">الرياضي</option>

                </select>
             </div>
          <br/>
           
            <div className="submit-btn" onClick={e => this.formSubmit(e)}>
              Add
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default NewInstructor;