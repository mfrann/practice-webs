import "../styles/types.css"
import { Button } from "./Button";

export function Types() {
  return (
    <div className="container-types">
      <div className="logo">
          <h1>FranDev<span>.</span></h1>
      </div>
      <div className="card-types">
        <Button text={"Normal"} style={"nav tp-normal"} />
        <Button text={"Water"} style={"nav tp-water"} />
        <Button text={"Grass"} style={"nav tp-grass"} />
        <Button text={"Fire"} style={"nav tp-fire"} />
        <Button text={"Bug"} style={"nav tp-bug"} />
        <Button text={"Fairy"} style={"nav tp-fairy"} />
        <Button text={"Dragon"} style={"nav tp-dragon"} />
        <Button text={"Psychic"} style={"nav tp-psychic"} />
        <Button text={"Ghost"} style={"nav tp-ghost"} />
        <Button text={"Steel"} style={"nav tp-steel"} />
        <Button text={"Ground"} style={"nav tp-ground"} />
        <Button text={"Flying"} style={"nav tp-flying"} />
        <Button text={"Ice"} style={"nav tp-ice"} />
        <Button text={"Electric"} style={"nav tp-electric"} />
        <Button text={"Rock"} style={"nav tp-rock"} />
        <Button text={"Dark"} style={"nav tp-dark"} />
        <Button text={"Fighting"} style={"nav tp-fighting"} />
        <Button text={"Poison"} style={"nav tp-poison"} />
      </div>
    </div>
  );
}
