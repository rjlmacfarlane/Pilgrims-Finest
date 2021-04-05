import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      // var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      // var street = this.props.data.address.street;
      // var city = this.props.data.address.city;
      // var state = this.props.data.address.state;
      // var zip = this.props.data.address.zip;
      // var phone= this.props.data.phone;
      // var email = this.props.data.email;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Jessica Pilgrim" />
         </div>
         <div className="nine columns main-col">
            <h2>Meet Jessica Pilgrim, Founder & CEO</h2>

            <p>{bio}</p>
            <img className="signature" src="images/signature.png" alt="Jessica Pilgrim"></img>
            {/* <div className="row">
               <div className="columns contact-details">
                  <h2>Available Exclusively At:</h2>
                  <p className="address">
						   <span><a href="https://nogginsfarm.ca/">{name}</a></span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span><a href="#contact">{email}</a></span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href="https://goo.gl/maps/Lunr9d4nGuN26FTS7" className="button"><img src="../images/map.png" alt="map"></img></a>
                  </p>
               </div>
            </div> */}
         </div>
      </div>

   </section>
    );
  }
}

export default About;
