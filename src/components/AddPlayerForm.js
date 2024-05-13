import { useState } from "react";

function AddPlayerForm(props) {
  const [name, set_name] = useState("");

  const addPlayer = (event) => {
    props.addPlayer(name);
    set_name("");
    event.preventDefault();
  };
  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            set_name(event.target.value);
          }}
        />{" "}
        <button onClick={addPlayer}>Add</button>
      </p>
    </div>
  );
}

export default AddPlayerForm;
