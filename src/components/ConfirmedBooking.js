import img from "../assets/success.svg";
function ConfirmedBooking() {
  return (
    <div className="confirm-page">
      <div className="confirm-header">
        <h1>Your form has been successfully submitted!</h1>
        <img className="success-img" src={img} alt="" />
      </div>
    </div>
  );
}

export default ConfirmedBooking;
