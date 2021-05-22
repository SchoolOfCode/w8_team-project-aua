// Bing api code below
//   "https://bing-news-search1.p.rapidapi.com/news/trendingtopics?safeSearch=Off&textFormat=Raw",
//   {
//     method: "GET",
//     headers: {
//       "x-bingapis-sdk": "true",
//       "x-rapidapi-key": "15c61ebcbcmsh8c28343ec8cd9d1p12988cjsnc817b17ddb6f",
//       "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
//     },
//   }
// );

// MISC CODE
// async function getNews() {
//   const response = await fetch(
//     "https://newsapi.org/v2/top-headlines?country=gb&apiKey=0b2791e0cf794881984bd52bce048ce5"
//   );
//   const articles = await response.json();
//   console.log(articles);
//   return articles;
// }
// getNews();

// Start by fetching News API
// connect to DOM

const buttonClicker = document.getElementById("click-here");
const textGenerator = document.getElementById("text");
const dateSelector = document.querySelector('input[type="date"]');
console.log(dateSelector.value);
buttonClicker.addEventListener("click", getNews);

async function getNews() {
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=apple&from=2021-05-20&to=2021-05-20&sortBy=popularity&apiKey=0b2791e0cf794881984bd52bce048ce5"
  );
  const article = await response.json();
  console.log(article);
  textGenerator.innerText = article.value[0].name;
  console.log(dateSelector);
  // .then((response) => {
  //   console.log(response);
  // })
  // .catch((err) => {
  //   console.error(err);
  // });
}
