const request = fetch("https://restcountries.com/v3.1/name/usa");
request
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
  });
