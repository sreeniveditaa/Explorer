import './App.css';

function App() {
  return (
    <>
      <div className="header">
        <div className="exp">
          <img src="img/exp_img.png" alt="explorer" />
        </div>
        <div className="menu">
          <li className="nav">Hotels</li>
          <li className="nav">Bike Rentals</li>
          <li className="nav">Restaurants</li>
        </div>
      </div>

      <div className="content">
        <div className="card1">
          <h1 className="first">WELCOME TO EXPLORER</h1>
          <h1 className="second">Your Adventure</h1>
          <h1 className="second">Travel Expert in </h1>
          <h1 className="second">
            the <span className="b-word">SOUTH</span>
          </h1>

          <select
            id="fruits"
            name="fruits"
            style={{
              height: '60px',
              width: '550px',
              zIndex: 2,
              position: 'relative',
              marginTop: '50px',
              marginLeft: '12px',
            }}
          >
            <option value="apple">Choose</option>
            <option value="banana">Chennai</option>
            <option value="orange">Poonamallee</option>
          </select>

          <button
            style={{
              backgroundColor: '#8F3C70',
              color: 'white',
              height: '35px',
              width: '135px',
              marginTop: '22px',
              border: 'none',
              fontWeight: 600,
              marginLeft: '12px',
            }}
          >
            EXPLORE
          </button>
        </div>
        <div className="card2">
          <img src="img/img1.png" height="600px" width="890px" alt="explorer" />
        </div>
      </div>

      <div className="cards-div">
        <h1 style={{ fontWeight: 'lighter', margin: '0px' }}>Destinations</h1>
        <h2 style={{ fontSize: '20px', fontWeight: 'lighter', margin: '0px' }}>
          Just for You!.Because you and your bike are special to us!
        </h2>
      </div>

      <div className="main-card">
        <div className="div-card">
          <img src="img/Screenshot 2025-02-25 212314.png" alt="Pollachi" width="380px" height="240px" />
          <h1 style={{ fontSize: '22px', fontWeight: 'lighter', color: 'rgba(0, 0, 0, 0.66)' }}>
            Never Ending Paddy Fields and Narrow Roads
          </h1>
          <h3 style={{ fontWeight: '800', fontSize: '15px', marginTop: '2px' }}>Pollachi</h3>
          <p style={{ color: 'rgba(0, 0, 0, 0.685)' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate ipsa maiores, numquam, ea cumque sequi totam
            quis ipsam consequuntur deserunt eveniet vel, illo doloremque unde tempora quas aliquid odit.
          </p>
          <button
            style={{
              backgroundColor: '#8F3C70',
              color: 'white',
              height: '35px',
              width: '135px',
              marginTop: '22px',
              border: 'none',
              fontWeight: 600,
            }}
          >
            Read More
          </button>
        </div>

        <div className="div-card">
          <img src="img/pic2.png" alt="Thanjavur" width="380px" height="240px" />
          <h1 style={{ fontSize: '22px', fontWeight: 'lighter', color: 'rgba(0, 0, 0, 0.66)' }}>
            Small Ride Across town in mid summer heat
          </h1>
          <h3 style={{ fontWeight: '800', fontSize: '15px', marginTop: '2px' }}>Thanjavur</h3>
          <p style={{ color: 'rgba(0, 0, 0, 0.685)' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate ipsa maiores, numquam, ea cumque sequi totam
            quis ipsam consequuntur deserunt eveniet vel, illo doloremque unde tempora quas aliquid odit.
          </p>
          <button
            style={{
              backgroundColor: '#8F3C70',
              color: 'white',
              height: '35px',
              width: '135px',
              marginTop: '22px',
              border: 'none',
              fontWeight: 600,
            }}
          >
            Read More
          </button>
        </div>

        <div className="div-card">
          <img src="img/pic3.png" alt="Chidabaram" width="380px" height="240px" />
          <h1 style={{ fontSize: '22px', fontWeight: 'lighter', color: 'rgba(0, 0, 0, 0.66)' }}>
            Catching a small break at Lotus pond
          </h1>
          <h3 style={{ fontWeight: '800', fontSize: '15px', marginTop: '2px' }}>Chidabaram</h3>
          <p style={{ color: 'rgba(0, 0, 0, 0.685)' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate ipsa maiores, numquam, ea cumque sequi totam
            quis ipsam consequuntur deserunt eveniet vel, illo doloremque unde tempora quas aliquid odit.
          </p>
          <button
            style={{
              backgroundColor: '#8F3C70',
              color: 'white',
              height: '35px',
              width: '135px',
              marginTop: '22px',
              border: 'none',
              fontWeight: 600,
            }}
          >
            Read More
          </button>
        </div>
      </div>

      <div className="main-card" style={{ marginTop: '50px', marginBottom: '100px' }}>
        <div className="div-card">
          <img src="img/pic4.png" alt="Masinagudi" width="380px" height="240px" />
          <h1 style={{ fontSize: '22px', fontWeight: 'lighter', color: 'rgba(0, 0, 0, 0.66)' }}>
            Road Trip enroute the mountains and forests
          </h1>
          <h3 style={{ fontWeight: '800', fontSize: '15px', marginTop: '2px' }}>Masinagudi</h3>
          <p style={{ color: 'rgba(0, 0, 0, 0.685)' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate ipsa maiores, numquam, ea cumque sequi totam
            quis ipsam consequuntur deserunt eveniet vel, illo doloremque unde tempora quas aliquid odit.
          </p>
          <button
            style={{
              backgroundColor: '#8F3C70',
              color: 'white',
              height: '35px',
              width: '135px',
              marginTop: '22px',
              border: 'none',
              fontWeight: 600,
            }}
          >
            Read More
          </button>
        </div>

        <div className="div-card">
          <img src="img/pic5.png" alt="Kumbakkonam" width="380px" height="240px" />
          <h1 style={{ fontSize: '22px', fontWeight: 'lighter', color: 'rgba(0, 0, 0, 0.66)' }}>
            Fell in love with the divine agraharams
          </h1>
          <h3 style={{ fontWeight: '800', fontSize: '15px', marginTop: '2px' }}>Kumbakkonam</h3>
          <p style={{ color: 'rgba(0, 0, 0, 0.685)' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate ipsa maiores, numquam, ea cumque sequi totam
            quis ipsam consequuntur deserunt eveniet vel, illo doloremque unde tempora quas aliquid odit.
          </p>
          <button
            style={{
              backgroundColor: '#8F3C70',
              color: 'white',
              height: '35px',
              width: '135px',
              marginTop: '22px',
              border: 'none',
              fontWeight: 600,
            }}
          >
            Read More
          </button>
        </div>

        <div className="div-card">
          <img src="img/pic6.png" alt="Chidabaram Windmills" width="380px" height="240px" />
          <h1 style={{ fontSize: '22px', fontWeight: 'lighter', color: 'rgba(0, 0, 0, 0.66)' }}>
            Energy driven drive through the windmills
          </h1>
          <h3 style={{ fontWeight: '800', fontSize: '15px', marginTop: '2px' }}>Chidabaram</h3>
          <p style={{ color: 'rgba(0, 0, 0, 0.685)' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate ipsa maiores, numquam, ea cumque sequi totam
            quis ipsam consequuntur deserunt eveniet vel, illo doloremque unde tempora quas aliquid odit.
          </p>
          <button
            style={{
              backgroundColor: '#8F3C70',
              color: 'white',
              height: '35px',
              width: '135px',
              marginTop: '22px',
              border: 'none',
              fontWeight: 600,
            }}
          >
            Read More
          </button>
        </div>
      </div>

      <div className="contact-info">
        <h1 style={{ fontWeight: 500, color: '#8F3C70', margin: '0' }}>
          <b>Contact Us</b>
        </h1>
        <h3 style={{ color: '#8F3C70', margin: '0', fontWeight: 'lighter', marginBottom: '50px' }}>
          Our Sales Team will reach out to you ASAP!
        </h3>
        <label
          htmlFor="name"
          style={{ fontSize: '18px', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 500 }}
        >
          <b>Name</b>
        </label>
        <br />
        <input
          type="text"
          style={{
            height: '50px',
            width: '550px',
            borderColor: 'rgba(128, 128, 128, 0.367)',
            backgroundColor: 'whitesmoke',
            marginBottom: '19px',
          }}
        />
        <br />
        <label
          htmlFor="name"
          style={{ fontSize: '18px', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 500 }}
        >
          <b>Your Home Town</b>
        </label>
        <br />
        <select
          name=""
          id=""
          style={{
            height: '55px',
            width: '555px',
            backgroundColor: 'whitesmoke',
            borderColor: 'rgba(128, 128, 128, 0.496)',
            borderWidth: '2px',
            marginBottom: '19px',
          }}
        >
          <option value="Choose">Choose</option>
        </select>
        <br />
        <label
          htmlFor="name"
          style={{ fontSize: '18px', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 500 }}
        >
          <b>Where Would You like to go?</b>
        </label>
        <br />
        <select
          name=""
          id=""
          style={{
            height: '55px',
            width: '555px',
            backgroundColor: 'whitesmoke',
            borderColor: 'rgba(128, 128, 128, 0.496)',
            borderWidth: '2px',
            marginBottom: '19px',
          }}
        >
          <option value="Choose">Choose</option>
        </select>
        <br />
        <label
          htmlFor="name"
          style={{ fontSize: '18px', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 500 }}
        >
          <b>Contact Number</b>
        </label>
        <br />
        <input
          type="text"
          style={{
            height: '50px',
            width: '550px',
            borderColor: 'rgba(128, 128, 128, 0.367)',
            backgroundColor: 'whitesmoke',
            marginBottom: '19px',
          }}
        />
        <br />
        <button
          style={{
            backgroundColor: '#8F3C70',
            color: 'white',
            height: '35px',
            width: '155px',
            marginTop: '22px',
            border: 'none',
            fontWeight: 600,
          }}
        >
          SUBMIT INTEREST
        </button>
      </div>
    </>
  );
}

export default App;
