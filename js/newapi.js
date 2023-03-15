const newsContainer = document.querySelector(".news-container");

const header = document.querySelector(".header");
const searchingInput = document.querySelector(".searching");
const button = document.querySelector(".news-search-btn");
const newsForm = document.querySelector(".header-search");

const creatHtmlElemet = (el, className, id) => {
  const ele = document.createElement(el);
  if (className) {
    ele.className = className;
  }
  if (id) {
    ele.id = id;
  }

  return ele;
};
const appendChildern = (parent , ...childern) => {
    childern.forEach((ele) => {
        parent.appendChild(ele)
    })
}

const createNew = (imgUrl, title, date, desc) => {
  const news = creatHtmlElemet("div", "news");
  const imgDiv = creatHtmlElemet("div", "news-img");
  const containerDiv = creatHtmlElemet("div", "news-details");

  const img = creatHtmlElemet("img", "news-img");
  img.src = imgUrl;

  const h2 = creatHtmlElemet("h2", "news-title");
  h2.textContent = title;

  const span = creatHtmlElemet("span",  "news-description" );
  span.textContent = date;

  const para = creatHtmlElemet("p", "news-published-at");
  para.textContent = desc;
  const anchor = creatHtmlElemet("a");
  const button1 = creatHtmlElemet("button", "news-read-more");

  imgDiv.appendChild(img);
  news.appendChild(imgDiv);

  news.appendChild(containerDiv);
  anchor.appendChild(button1);

  appendChildern(containerDiv , h2 , para , span , anchor)
//   containerDiv.appendChild(h2);

//   containerDiv.appendChild(para);

//   containerDiv.appendChild(span);

//   containerDiv.appendChild(anchor);
  button1.textContent = "Read More";

  newsContainer.appendChild(news);
};

const showNews = (data) => {
  data.forEach(({ urlToImage, title, description, publishedAt }) => {
    createNew(urlToImage, title, description, publishedAt);
  });
};

const getNews = (url) => {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = JSON.parse(xhr.responseText);
      showNews(response.articles);
    }
  };
  xhr.open("GET", url);
  xhr.send();
};

searchingInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
        getNews(
            `https://newsapi.org/v2/everything?q=${searchingInput.value}&apiKey=a8b5329276ac4f60a90e30b4884c082f`
          );
    }
})
button.addEventListener("click", () => {
    getNews(
    `https://newsapi.org/v2/everything?q=${searchingInput.value}&apiKey=a8b5329276ac4f60a90e30b4884c082f`
  );
});
