import "./App.css";

export default function Moldura() {
  function clickAlert() {
    alert("Você clicou dentro moldura");
  }

  return <div onClick={clickAlert} className="moldura"></div>;
}
