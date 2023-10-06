import './Burger.css';

function Burger() {
  return (
    <div
      onClick={() => console.log('click')}
      className="burger animation__button">
      <span />
      <span />
      <span />
    </div>
  );
}

export default Burger;
