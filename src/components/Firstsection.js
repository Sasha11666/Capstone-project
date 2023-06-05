import image from '../assets/restauranfood.jpg';
const Firstsection = () => {
  return (
    <section>
      <div className='first-section'>
        <div className='first-section-block'>
          <div className='first-section-text'>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button>Reserve a Table</button>
          </div>
          {/* <img src={image} alt="" /> */}
        </div>
      </div>
      
      <div className='first-section-img'></div>
    </section>
  )
}

export default Firstsection