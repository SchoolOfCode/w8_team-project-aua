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
const dateSelector = document.querySelector("#date-selector");
var date = 0;

dateSelector.addEventListener("change", updateValue);

function updateValue(e) {
    date = e.target.value;
    getNews();
}

//const result = document.querySelector('.result');
//  result.textContent = `You like ${event.target.value}`;
//});

//function giveResult() {
//  document.getElementById("news").innerHTML = "hello"; // the api output;
//}

//console.log(dateSelector.value);

//buttonClicker.addEventListener("click", getNews);

async function getNews() {
    const response = await fetch(
        "https://content.guardianapis.com/search?&from-date=" +
            date +
            "&to-date=" +
            date +
            "&api-key=778db1c3-eabf-4572-8025-649d08dd934c"
    );
    let article = await response.json();
    console.log(article);
    console.log(article.response.results[1].webTitle);
    textGenerator.innerText = article.response.results[1].webTitle;
    console.log(textGenerator);
    // .then((response) => {
    //   console.log(response);
    // })
    // .catch((err) => {
    //   console.error(err);
    // });
}
