import styles from "./ProductCard.module.scss"

export const ProductCard = () => {
  return (
    <div className="card">
      <h1>Футболка DARKMOOD</h1>
      <div className="card__img"></div>
      <div className="card__info">
        <div>
          <p>Тонка. Легкая. Черная.</p>
        </div>

        <div>
          <p>Выберите размер</p>
        </div>
        <div>
          <p>Количество</p>
        </div>
      </div>
    </div>
  );
};
