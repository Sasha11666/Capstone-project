import Form from "./Form";

function Booking() {
  return (
    <div className="booking-page">
      <div className="booking-header">
        <h1>Booking a table</h1>
        <p>
          Little Lemon offers its guests different options of reservation. It's
          possible to choose the number of guests, the type of the occasion and
          the location. We will spare no effort in making your visit as
          comfortable and enjoyable as possible.
        </p>
      </div>
      <Form />
    </div>
  );
}

export default Booking;
