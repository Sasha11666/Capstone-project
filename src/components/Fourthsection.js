import image1 from '../assets/restaurant.jpg';
import image2 from '../assets/owners.jpg';

const Fourthsection = () => {
  return (
    <section className="forth-section">
      <h1>Little Lemon</h1>
      <h3>Chicago</h3>
      <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
      <img className='image1 forth-image' src={image1} alt="image" />
      <img className='image2 forth-image' src={image2} alt="image" />
    </section>
  )
}

export default Fourthsection