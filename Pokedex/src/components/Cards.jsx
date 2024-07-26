import "../styles/cards.css";
import { Button } from "./Button";

export function Card({
  url,
  peso,
  altura,
  name,
  num,
  type,
  type2,
  sts,
  sts2
}) {
  return (
    <div>
      <div className="main-container-card">
            <div className="image-card">
                <img src={url} alt="" />
            </div>
            <div className="name-card">
                <p className="card-p">{num}</p>
                <h1>{name}</h1>
            </div>
            <div className="types-card">
                <Button text={type} style={sts} />
                <Button text={type2} style={sts2} />
            </div>
            <div className="info-card">
                <p className="card-p">{altura}</p>
                <p className="card-p">{peso}</p>
            </div>
      </div>
    </div>
  );
}
