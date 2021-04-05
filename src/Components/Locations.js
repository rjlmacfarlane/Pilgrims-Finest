import React, { Component } from 'react';



class Locations extends Component {
  render() {

    if(this.props.data){
      var locations = this.props.data.locations.map(function(locations){
        var mapImage = 'images/locations/'+locations.img;
        return <div key={locations.name} className="">
           <div className="item-wrap">
            <a href={locations.link} title={locations.name}>
              <img alt={locations.name} src={mapImage} />
              <h1>{locations.name}</h1>
            </a>
          </div>
        </div>
      })
    
    }

    return(
      
      <section id="locations">
        
        <div className="ten columns collapsed">
            <h1>Locations</h1>
              <div id="locations-wrapper" className="locations-item">
                  {locations}
              </div>
          </div>

      </section>

    );
  }
}

export default Locations