import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  function editHandler() {
    setIsEditing((prevState) => !prevState);
    if (isEditing) {
      onChangeName(symbol, name);
    }
  }

  function handleChange(event) {
    console.log(event.target.tagName);
    setName(event.target.value);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = (
      <input type="text" required value={name} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span>
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
