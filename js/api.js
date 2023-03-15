let xhr = new XMLHttpRequest();
let fetchApi = function (url, callback) {
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      callback(response);
    }
  };
  xhr.open("GET", url);
  xhr.send();
};
