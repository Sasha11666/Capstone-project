import { useState, useEffect, useReducer } from "react";
import { fetchAPI, submitAPI } from "./Api";
import { useHistory } from "react-router-dom";

export function submitForm(formData) {
  if (formData) {
    return submitAPI(formData);
  }
  return false;
}

export function initializeTimes() {
  let date = new Date();
  return fetchAPI(date.getDate());
}

export const reducer = (state, date) => {
  state = fetchAPI(date.slice(8, 10));
  return state;
};

function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [selected, setSelected] = useState("17");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("Birthday");

  const [state, dispatch] = useReducer(reducer, initializeTimes());
  const history = useHistory();

  useEffect(() => {
    if (
      document.querySelector(".submit-button") &&
      (!name || !number || !date || !selected || !guests || !occasion)
    ) {
      document.querySelector(".submit-button").setAttribute("disabled", "");
      document.querySelector(".submit-button").classList.add("disabled");
    } else {
      document.querySelector(".submit-button").removeAttribute("disabled");
      document.querySelector(".submit-button").classList.remove("disabled");
    }
  }, [name, number, date, selected, guests, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/confirm");
    setName("");
    setNumber("");
    setDate("");
    setSelected("17");
    setGuests("");
    setOccasion("Birthday");
  };

  return (
    <div className="formElement">
      <form action="" method="post" onSubmit={handleSubmit}>
        <label htmlFor="input-name">Your name</label>
        <input
          id="input-name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <label htmlFor="input-number">Your telephone number</label>
        <input
          id="input-number"
          type="tel"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <br></br>
        <label htmlFor="input-date">Choose date</label>
        <input
          type="date"
          id="input-date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            dispatch(e.target.value);
          }}
        />
        <br></br>
        <label htmlFor="input-time">Choose time</label>
        <select
          id="input-time"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {state &&
            state.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
        </select>
        <br></br>
        <label htmlFor="input-guests">Number of guests</label>
        <input
          id="input-guests"
          type="number"
          name="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        <br></br>
        <label htmlFor="input-occasion">Choose occasion</label>
        <select
          id="input-occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Engagement</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>
        <br></br>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
