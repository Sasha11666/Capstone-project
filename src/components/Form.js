import { useState, useReducer } from "react";
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

export const highltghtField = (field, id) => {
  if (!field) {
    document.getElementById(`${id}`).classList.add("highlighted");
  } else {
    document.getElementById(`${id}`).classList.remove("highlighted");
  }
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

  const disableSubmit = () => {
    if (document.querySelector(".submit-button")) {
      if (!name || !number || !date || !occasion || !selected || !guests) {
        document.querySelector(".submit-button").setAttribute("disabled", "");
        document.querySelector(".submit-button").classList.add("disabled");
      } else {
        document.querySelector(".submit-button").removeAttribute("disabled");
        document.querySelector(".submit-button").classList.remove("disabled");
      }
    }
  };

  // const highltghtField = (field, id) => {
  //   if (!field) {
  //     document.getElementById(`${id}`).classList.add("highlighted");
  //   } else {
  //     document.getElementById(`${id}`).classList.remove("highlighted");
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && number && date && selected && guests && occasion) {
      history.push("/confirm");
    }

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
          data-testid="input-name"
          onBlur={(e) => {
            highltghtField(e.target.value, "input-name");
            disableSubmit();
          }}
          onChange={(e) => {
            setName(e.target.value);
            disableSubmit();
            highltghtField(e.target.value, "input-name");
          }}
        />
        <br></br>
        <label htmlFor="input-number">Your telephone number</label>
        <input
          id="input-number"
          type="tel"
          name="number"
          value={number}
          onBlur={(e) => {
            highltghtField(e.target.value, "input-number");
            disableSubmit();
          }}
          onChange={(e) => {
            setNumber(e.target.value);
            highltghtField(e.target.value, "input-number");
            disableSubmit();
          }}
        />
        <br></br>
        <label htmlFor="input-date">Choose date</label>
        <input
          type="date"
          id="input-date"
          value={date}
          onBlur={(e) => {
            highltghtField(e.target.value, "input-date");
            disableSubmit();
          }}
          onChange={(e) => {
            setDate(e.target.value);
            dispatch(e.target.value);
            highltghtField(e.target.value, "input-date");
            disableSubmit();
          }}
        />
        <br></br>
        <label htmlFor="input-time">Choose time</label>
        <select
          id="input-time"
          value={selected}
          onBlur={(e) => {
            highltghtField(e.target.value, "input-time");
            disableSubmit();
          }}
          onChange={(e) => {
            setSelected(e.target.value);
            highltghtField(e.target.value, "input-time");
            disableSubmit();
          }}
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
          data-testid="guests"
          value={guests}
          min={1}
          onBlur={(e) => {
            highltghtField(e.target.value, "input-guests");
            disableSubmit();
          }}
          onChange={(e) => {
            setGuests(e.target.value);
            highltghtField(e.target.value, "input-guests");
            disableSubmit();
          }}
        />
        <br></br>
        <label htmlFor="input-occasion">Choose occasion</label>
        <select
          id="input-occasion"
          value={occasion}
          onBlur={(e) => {
            highltghtField(e.target.value, "input-occasion");
            disableSubmit();
          }}
          onChange={(e) => {
            setOccasion(e.target.value);
            highltghtField(e.target.value, "input-occasion");
            disableSubmit();
          }}
        >
          <option>Birthday</option>
          <option>Engagement</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>
        <br></br>

        <button aria-label="On Click" className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
