## random-cat

```javascript
const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = "https://cataas.com";
  const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
  const responseJson = await response.json();
  return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};
```

https://user-images.githubusercontent.com/73919235/186015068-1ebd1059-5c6d-47f7-a410-b11523e7f225.mp4
