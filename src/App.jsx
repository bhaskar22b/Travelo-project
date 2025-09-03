import NavBar from "./components/NavBar"
import { navData } from "./json"

import Travel from "./components/Travel"
import { TravelInfo1, TravelInfo2, TravelInfo3 } from "./json"

import Trips from "./components/Trips"
import { TripsInfo,TripsInfo1,TripsInfo2 } from "./json"

import Destination from "./components/Destination"
import { DestinationInfo1,DestinationInfo2,DestinationInfo3,DestinationInfo4,DestinationInfo5,DestinationInfo6 } from "./json"

import Places from "./components/Places"
import { PlacesInfo1,PlacesInfo2, PlacesInfo3, PlacesInfo4, PlacesInfo5, PlacesInfo6, } from "./json"

import Video from "./components/video"

import NewsLetter from "./components/NewsLetter"

import SearchBox from "./components/SearchBox"

function App() {



  return (
    <>

      
      <section className="header">
        <NavBar navv={navData} />
      </section>

      <section className="Destination">
        <div className="container">
          <div className="Des-title">
            <h3>Popular Destination</h3>
            <p>Suffered alteration in some form, by injected humour or good day<br/> randomised booth anim 8-bit hella wolf moon beard words.</p>
          </div>
          <div className="flex">
            
            <div className="single-destination">
              <Destination img={DestinationInfo1.src} title={DestinationInfo1.title} places={DestinationInfo1.places}/>
            </div>

            <div className="single-destination">
              <Destination img={DestinationInfo2.src} title={DestinationInfo2.title} places={DestinationInfo2.places}/>
            </div>

            <div className="single-destination">
              <Destination img={DestinationInfo3.src} title={DestinationInfo3.title} places={DestinationInfo3.places}/>
            </div>

          </div>

          <div className="flex">
            
            <div className="single-destination">
              <Destination img={DestinationInfo4.src} title={DestinationInfo4.title} places={DestinationInfo4.places}/>
            </div>

            <div className="single-destination">
              <Destination img={DestinationInfo5.src} title={DestinationInfo5.title} places={DestinationInfo5.places}/>
            </div>

            <div className="single-destination">
              <Destination img={DestinationInfo6.src} title={DestinationInfo6.title} places={DestinationInfo6.places}/>
            </div>

          </div>
        </div>
      </section>

      <section className="newsletter">
        <NewsLetter/>
      </section>

      <section className="places">
        <div className="container">
          <div className="Des-title">
            <h3>Popular Places</h3>
            <p>Suffered alteration in some form, by injected humour or good day<br/> randomised booth anim 8-bit hella wolf moon beard words.</p>
          </div>
          <div className="flex">

            <div className="single-place">
              <Places img={PlacesInfo1.src} placeName={PlacesInfo1.placeName} cityName={PlacesInfo1.cityName} rating={PlacesInfo1.rating} days={PlacesInfo1.days} cost={PlacesInfo1.cost}/>
            </div>

            <div className="single-place">
              <Places img={PlacesInfo2.src} placeName={PlacesInfo2.placeName} cityName={PlacesInfo2.cityName} rating={PlacesInfo2.rating} days={PlacesInfo2.days} cost={PlacesInfo2.cost}/>
            </div>

            <div className="single-place">
              <Places img={PlacesInfo3.src} placeName={PlacesInfo3.placeName} cityName={PlacesInfo3.cityName} rating={PlacesInfo3.rating} days={PlacesInfo3.days} cost={PlacesInfo3.cost}/>
            </div>
          </div>

                    <div className="flex">
            
            <div className="single-place">
              <Places img={PlacesInfo4.src} placeName={PlacesInfo4.placeName} cityName={PlacesInfo4.cityName} rating={PlacesInfo4.rating} days={PlacesInfo4.days} cost={PlacesInfo4.cost}/>
            </div>

            <div className="single-place">
              <Places img={PlacesInfo5.src} placeName={PlacesInfo5.placeName} cityName={PlacesInfo5.cityName} rating={PlacesInfo5.rating} days={PlacesInfo5.days} cost={PlacesInfo5.cost}/>
            </div>

            <div className="single-place">
              <Places img={PlacesInfo6.src} placeName={PlacesInfo6.placeName} cityName={PlacesInfo6.cityName} rating={PlacesInfo6.rating} days={PlacesInfo6.days} cost={PlacesInfo6.cost}/>
            </div>
          </div>
        </div>
      </section>

      <section className="video-area">
        <Video/>
      </section>

      <section className="travel-area">
        <div className="container">
          <div className="flex">
            <Travel title={TravelInfo1.title} des={TravelInfo1.description} img={TravelInfo1.src}/>
            <Travel title={TravelInfo2.title} des={TravelInfo2.description} img={TravelInfo2.src}/>
            <Travel title={TravelInfo3.title} des={TravelInfo3.description} img={TravelInfo3.src}/>
          </div>
        </div>
      </section>

      <section className="trips">
        <div className="container">
          <div className="title">
            <h1>Recent Trips</h1>
          </div>
          <div className="flex">
            <Trips title={TripsInfo.title} des={TripsInfo.description} img={TripsInfo.src}/>
            <Trips title={TripsInfo1.title} des={TripsInfo1.description} img={TripsInfo1.src}/>
            <Trips title={TripsInfo2.title} des={TripsInfo2.description} img={TripsInfo2.src}/>
          </div>
        </div>
      </section>

      <section className="Search-box">
        <SearchBox/>
      </section>
    </>
      
    

  )
}

export default App