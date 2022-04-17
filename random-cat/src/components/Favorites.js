const Favorites = ({ favorites }) => {
  if (favorites.length === 0) {
    return <b>하트를 눌러 고양이를 저장하세요!</b>;
  }
  return (
    <ul className="favorites">
      {favorites.map((cat) => (
        <CatItem key={cat} img={cat} />
      ))}
    </ul>
  );
};

function CatItem({ img }) {
    return (
      <li>
        <img src={img} style={{ width: "100px" }} />
      </li>
    );
  }

export default Favorites;
