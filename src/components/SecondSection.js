import icon from '../assets/motorbike.svg';

const Secondsection = () => {
  return (
    <section className="second-section">
      <div className="second-title">
        <h1>This weeks specials!</h1>
        <button>Online Menu</button>
      </div>
      <div className="specials">
         <div className='special'>
           <div className="sec-img1 sec-img"></div>
           <div className="text-block1 text-block">
           <header className="special-header">
             <h3>Greek Salad</h3>
             <div><p>$12.99</p></div>
           </header>
           <main className="special-body">
             <p>The famous greek salad of crispy lettuce, peppers, olives and Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
           </main>
           <footer className="special-footer">
             <div>Order a delivery</div>
             <img src={icon} alt="icon" />
           </footer>
           </div>
         </div>

        <div className='special'>
        <div className="sec-img2 sec-img"></div>
        <div className="text-block2 text-block">
        <header className="special-header">
            <h3>Bruchetta</h3>
            <div><p>$5.99</p></div>
          </header>
          <main className="special-body">
            <p>Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
          </main>
          <footer className="special-footer">
            <div>Order a delivery</div>
            <img src={icon} alt="icon" />
          </footer>
        </div>
        </div> 

        <div className='special'>
        <div className="sec-img3 sec-img"></div>
        <div className="text-block3 text-block">
        <header className="special-header">
            <h3>Lemon Dessert</h3>
            <div><p>$5</p></div>
          </header>
          <main className="special-body">
            <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          </main>
          <footer className="special-footer">
            <div>Order a delivery</div>
            <img src={icon} alt="icon" />
          </footer>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Secondsection