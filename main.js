// Start by fetching News API
// connect to DOM

const buttonClicker = document.getElementById("click-here");
const textGenerator = document.getElementById("text");
const dateSelector = document.querySelector("#date-selector");
const list_html = document.getElementById("list");

var date = 0;

dateSelector.addEventListener("change", updateValue);

function updateValue(e) {
    list_html.innerHTML = "";
    date = e.target.value;
    getNews();
}

async function getNews() {
    const response = await fetch(
        "https://content.guardianapis.com/search?&from-date=" +
            date +
            "&to-date=" +
            date +
            "&api-key=778db1c3-eabf-4572-8025-649d08dd934c&show-fields=body,thumbnail"
    );
    let article = await response.json();
    console.log(article);

    for (var i = 0; i < article.response.results.length; i++) {
        
        var listItem = document.createElement("li");
        listItem.innerHTML +=
            article.response.results[i].sectionName +
            "<br>" +
            article.response.results[i].webTitle +
            "<br>" +
            article.response.results[i].webUrl;
        list_html.appendChild(listItem);


        var listImg = document.createElement("img");
        listImg.src += article.response.results[i].fields.thumbnail;
        list_html.appendChild(listImg);



        var listBody = document.createElement("div");
        listBody.innerHTML += article.response.results[i].fields.body;
        list_html.appendChild(listBody);

    }
}

//function ShowAndHide() { 
//    if (listBody.style == "display: none") {
//        listBody.style = "display = block";
//    } else {
//        listBody.style.display = '';
//    }
//}
//        var button = document.createElement('button');
//button.appendChild(document.createTextNode('delete'));
//list_html.appendChild(button);
//buttonFunc = addEventListener("click", ShowAndHide)
//
//var showMeBtn = document.createElement("button");
//showMeBtn.id = "btnFunc";
//showMeBtn.innerText += "Show/Hide Article";
//list_html.appendChild(showMeBtn);
//
//buttonFunc = addEventListener("click", ShowAndHide);