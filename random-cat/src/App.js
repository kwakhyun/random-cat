import "./App.css";
import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import MainCat from "./components/MainCat";
import Favorites from "./components/Favorites";

const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = "https://cataas.com";
  const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
  const responseJson = await response.json();
  return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};

const App = () => {
  const lodingCat =
    "https://img.extmovie.com/files/attach/images/148/526/573/065/042fab5cdb8f3c679579f40e5242c6fa.gif";

  const [mainCat, setMainCat] = React.useState(lodingCat);

  const [counter, setCounter] = React.useState(() => {
    return jsonLocalStorage.getItem("counter") || 0;
  });

  const [favorites, setFavorites] = React.useState(() => {
    return jsonLocalStorage.getItem("favorites") || [];
  });

  const savedCat = favorites.includes(mainCat);

  const setInitialCat = async () => {
    const cat = await fetchCat("Random Cat");
    setMainCat(cat);
  };

  React.useEffect(() => {
    setInitialCat();
  }, []);

  async function updateMainCat(value) {
    const newCat = await fetchCat(value);
    setMainCat(newCat);
    setCounter((prev) => {
      jsonLocalStorage.setItem("counter", prev + 1);
      return prev + 1;
    });
  }

  function handleLikeClick() {
    const nextFavorite = [...favorites, mainCat];
    setFavorites(nextFavorite);
    jsonLocalStorage.setItem("favorites", nextFavorite);
  }

  const countCat = counter === 0 ? "" : `Number ${counter}🚩`;

  return (
    <div>
      <Title>🎲Random Cat🐱 {countCat}</Title>
      <Form updateMainCat={updateMainCat} />
      <MainCat
        img={mainCat}
        onLikeClick={handleLikeClick}
        savedCat={savedCat}
      />
      <Favorites favorites={favorites} />
    </div>
  );
};

export default App;
