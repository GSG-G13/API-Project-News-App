const newsContainer = document.querySelector(".news-container");

const header = document.querySelector(".header");
const searchingInput = document.querySelector(".searching");
const button = document.querySelector(".news-search-btn");
const newsForm = document.querySelector(".header-search");

const creatHtmlElemet = (el, className) => {
  const ele = document.createElement(el);
  if (className) {
    ele.className = className;
  }
  return ele;
};
const appendChildern = (parent, ...childern) => {
  childern.forEach((ele) => {
    parent.appendChild(ele);
  });
};

const createNew = (imgUrl, title, date, desc, newsLink) => {
  const news = creatHtmlElemet("div", "news");
  const imgDiv = creatHtmlElemet("div", "news-img");
  const img = creatHtmlElemet("img", "img");
  if (imgUrl) {
    img.src = imgUrl;
  } else {
    img.src = `https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/1dfcc9d32009701a636d269b8baeddc0.jpg`;
  }
  const containerDiv = creatHtmlElemet("div", "news-details");

  const h2 = creatHtmlElemet("h2", "news-title");
  h2.textContent = title;

  const span = creatHtmlElemet("span", "news-published-at");
  span.textContent = date;

  const para = creatHtmlElemet("p", "news-description");
  para.textContent = desc;
  const anchor = creatHtmlElemet("a");
  anchor.href = newsLink;
  anchor.target = "_blank";
  const button1 = creatHtmlElemet("button", "news-read-more");
  button1.innerHTML = "Read More &rarr;";

  imgDiv.appendChild(img);
  news.appendChild(imgDiv);

  news.appendChild(containerDiv);
  anchor.appendChild(button1);

  appendChildern(containerDiv, h2, span, para, anchor);
  newsContainer.appendChild(news);
};

const showNews = (data) => {
  data.forEach(({ urlToImage, title, publishedAt, description, url }) => {
    createNew(urlToImage, title, publishedAt, description, url);
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

getNews(
  `https://newsapi.org/v2/everything?q=Palestine&apiKey=a8b5329276ac4f60a90e30b4884c082f`
);

searchingInput.addEventListener("keyup", (e) => {
  if (searchingInput.value === "") {
    return;
  }
  if (e.key === "Enter" || e.keyCode === 13) {
    getNews(
      `https://newsapi.org/v2/everything?q=${searchingInput.value}&apiKey=a8b5329276ac4f60a90e30b4884c082f`
    );
    newsContainer.innerHTML = "";
    searchingInput.value = "";
  }
});
button.addEventListener("click", () => {
  if (searchingInput.value === "") {
    return;
  }
  newsContainer.innerHTML = "";
  getNews(
    `https://newsapi.org/v2/everything?q=${searchingInput.value}&apiKey=a8b5329276ac4f60a90e30b4884c082f`
  );
  searchingInput.value = "";
});
