//declare the html elements

const buttonClicker = document.getElementById("click-here");
const textGenerator = document.getElementById("text");
const dateSelector = document.querySelector("#date-selector");
const list_html = document.getElementById("list");

//declare a variable to save date for api query
var date = 0;

//call the api element generation function
dateSelector.addEventListener("change", updateValue);

//
function updateValue(e) {
    list_html.innerHTML = ""; //empties the previously created articles
    date = e.target.value; //e comes from the calander selection
    getNews();
}

//fetch api
async function getNews() {
    const response = await fetch(
        "https://content.guardianapis.com/search?q=%20NOT%20Crosswords&from-date=" +
            date +
            "&to-date=" +
            date +
            "&api-key=778db1c3-eabf-4572-8025-649d08dd934c&show-fields=body,thumbnail"
    );
    let article = await response.json(); //get json object
    console.log(article); //json object includes an array of articles

    for (var i = 0; i < article.response.results.length; i++) {
        //length of array 0-9
        var articleContainer = document.createElement("div"); //creating a container for each article
        articleContainer.setAttribute("id", `articleContainer${[i]}`); //makes css easier
        articleContainer.setAttribute("class", "articleContainer");
        list_html.appendChild(articleContainer); //adding a div into existing div

        var image = document.createElement("img");
        image.setAttribute("id", `image${[i]}`);
        image.setAttribute("class", "image");
        image.src = article.response.results[i].fields.thumbnail; //pull from api
        if (!image.src.includes("undefined")) {
            //if image does not exist, do not display (shows broken icon)
            document
                .getElementById(`articleContainer${[i]}`)
                .appendChild(image);
        }

        var articleContainer2 = document.createElement("div");
        articleContainer2.setAttribute("id", `articleContainer2${[i]}`);
        articleContainer2.setAttribute("class", "articleContainer2");
        document
            .getElementById(`articleContainer${[i]}`)
            .appendChild(articleContainer2);

        var category = document.createElement("div");
        category.setAttribute("id", `category${[i]}`);
        category.setAttribute("class", "category");
        category.innerHTML = article.response.results[i].sectionName;
        document
            .getElementById(`articleContainer2${[i]}`)
            .appendChild(category);

        var title = document.createElement("div");
        title.setAttribute("id", `title${[i]}`);
        title.setAttribute("class", "title");
        title.innerHTML = article.response.results[i].webTitle;
        document.getElementById(`articleContainer2${[i]}`).appendChild(title);

        var url = document.createElement("a");
        title.setAttribute("id", `url${[i]}`);
        title.setAttribute("class", "url");
        url.innerText = "Article Source";
        url.href = article.response.results[i].webUrl;
        document.getElementById(`articleContainer2${[i]}`).appendChild(url);

        var button = document.createElement("button");
        button.setAttribute("id", `button${[i]}`);
        button.setAttribute("class", "button");
        button.setAttribute("onclick", `myFunction${[i]}()`);
        button.id = `btnFunc${[i]}`;
        button.innerText = "Show/Hide Article";
        document.getElementById(`articleContainer2${[i]}`).appendChild(button);

        var body = document.createElement("div");
        body.setAttribute("id", `body${[i]}`);
        body.setAttribute("class", "body");
        body.setAttribute("style", "display:none");
        body.innerHTML = article.response.results[i].fields.body;
        document.getElementById(`articleContainer2${[i]}`).appendChild(body);
    }
}
