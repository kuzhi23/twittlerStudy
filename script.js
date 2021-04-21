// your code here
// DATA는 이미 작성된 트윗을 표시합니다.
console.log(DATA);
let ul = document.querySelector(".twitt-list");
// 배열을 트윗리스트에  표시하는 함수
function makeTwitList(arr) {
  arr.forEach(function (element) {
    let li = document.createElement("li");
    ul.appendChild(li);
    let user = document.createElement("p");
    let date = document.createElement("p");
    let text = document.createElement("p");
    user.classList.add("twitt-username");
    date.classList.add("twitt-date");
    text.classList.add("twitt-text");
    li.appendChild(user);
    li.appendChild(date);
    li.appendChild(text);
    user.textContent = element.user;
    date.textContent = element.created_at;
    text.textContent = element.message;
    let userList = document.querySelectorAll(".twitt-username");
    for (let i = 0; i < userList.length; i++) {
      userList[i].addEventListener("click", filtering);
    }
  });
}

makeTwitList(DATA);
function deleteTwit() {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

let twitBtn = document.querySelector(".btn");
twitBtn.onclick = function () {
  let inputName = document.getElementById("name").value;
  let inputText = document.getElementById("text").value;
  let newTwit = {};
  newTwit.user = inputName;
  newTwit.message = inputText;
  newTwit.created_at = new Date().format();
  DATA.unshift(newTwit);
  deleteTwit();
  makeTwitList(DATA);
};

let randomBtn = document.querySelector(".btn2");
randomBtn.onclick = function () {
  let randomTwit = generateNewTweet();
  DATA.unshift(randomTwit);
  deleteTwit();
  makeTwitList(DATA);
};

function filtering() {
  let filterList = [];
  for (let j = 0; j < DATA.length; j++) {
    if (DATA[j].user === event.target.textContent) {
      filterList.push(DATA[j]);
      deleteTwit();
      makeTwitList(filterList);
    }
  }
}
