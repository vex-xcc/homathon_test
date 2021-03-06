import React from "react";
import "../../manager/addinstroctor/addinstructor.css";
import {AddNewActivitie}from '../../api';
import { getInfo } from "../../login/decodeToken";
import "../../../App.css"
import Swal from "sweetalert2";
class NewActivitie extends React.Component {

  constructor() {
    let info = getInfo().data;
    
    super();
    this.state = {
        TargetAge: null,
        ClubName: info.ClubName,
        ActivityDescription: "",
        ActivityName: "",
        ActivityType: info.InstructorsType,
        ActivityState: "Registration",
        ActivityLocation: "",
        RegistrationStartDate: "",
        RegistrationEndDate: "",
        StartDate: "",
        EndDate: "",
    };
    this.addActivitie = this.addActivitie.bind(this);
}

addActivitie = Activitie => {
                    let Id = getInfo().data._id
    // Make an axios request
    AddNewActivitie(Activitie , Id)
      .then(response => {

        Swal.fire({
          title:`  تم إضافة البرنامج  ${this.state.ActivityName}   بنجاح`,
          icon: 'success',
          confirmButtonText: 'موافق',
          showCancelButton: false,
        }).then((result) => {
          if (result.value) {
            this.props.history.push("/TrainerHeader/Home");  
            window.location.reload(false);
          }})
          })
      .catch(error => {
        console.log("API ERROR: ", error);
      });
  };

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  Home = () =>{
    this.props.history.push("/TrainerHeader/Home");  
    window.location.reload(false);
  }
  formSubmit = e => {
    const newActivitie = this.state;
    e.preventDefault();
    this.addActivitie(newActivitie);
   };
   
  render() {
    const { TargetAge,ActivityDescription ,ActivityName ,ActivityLocation , StartDate , EndDate,RegistrationStartDate,RegistrationEndDate} = this.state;
    return (
      <div>
        <form className="parent-wrappe-activity" onSubmit={e=> this.formSubmit(e)}>
          <h3 > إضــافــة برنامج </h3>
          <div className="subscribe-wrappe">
          <div>
              <br />
              <br />
              <input
                className="subscribe-input"
                required
                name="ActivityName"
                value={ActivityName}
                type="text"
                placeholder="اسم البرنامج"
                onChange={this.handleChange}
              />
            </div>          
            <div>
              <br />
              <br />
              <input
                className="subscribe-input"
                required
                name="ActivityDescription"
                value={ActivityDescription}
                placeholder="وصف العفالية"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              <br />
              <input
                className="subscribe-input"
                required
                name="ActivityLocation"
                value={ActivityLocation}
                type="text"
                placeholder="موقع البرنامج"
                onChange={this.handleChange}
              />
            </div>
            <div>
            <br /> 
            <br />
              <br />
              <label>تاريخ  بداية فترت التسجيل</label>
              <input
                className="subscribe-input"
                required
                name="RegistrationStartDate"
                value={RegistrationStartDate}
                type="datetime-local"
                placeholder="تاريخ بداية فترت التسجيل"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              <br />
              <label>تاريخ  نهاية فترت التسجيل</label>
              <input
                className="subscribe-input"
                required
                name="RegistrationEndDate"
                value={RegistrationEndDate}
                type="datetime-local"
                placeholder="تاريخ نهاية فترت التسجيل"
                onChange={this.handleChange}
              />
                 <br />
              <br />
             <label>تاريخ البداية</label>
              <input
                className="subscribe-input"
                required
                name="StartDate"
                value={StartDate}
                type="datetime-local"
                placeholder="تاريخ البداية"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              <br />
              <label>تاريخ النهاية</label>
              <input
                className="subscribe-input"
                required
                name="EndDate"
                value={EndDate}
                type="datetime-local"
                placeholder="تاريخ النهاية"
                onChange={this.handleChange}
              />
            </div>
           
            <div className="submit-btn" type="submit" onClick={e => this.formSubmit(e)}>
              إضــافــة
            </div>

            <a onClick={this.Home} className="back-arr"><i className="material-icons"> arrow_back </i></a>
          </div>
        </form>
      </div>
    );
  }
}
export default NewActivitie;