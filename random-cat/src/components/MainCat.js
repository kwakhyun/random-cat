const MainCat = ({ img, onLikeClick, savedCat }) => {
  const likeIcon = savedCat ? "💝" : "🤍";
  return (
    <div className="main-cat">
      <img src={img} alt="고양이" width="400" />
      <button onClick={onLikeClick}>{likeIcon}</button>
    </div>
  );
};

export default MainCat;
