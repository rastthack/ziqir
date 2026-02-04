let count = 0;
const counter = document.querySelector(".counter");
const message = document.getElementById("message");
const step = document.getElementById("step");
const historyList = document.getElementById("history");

const today = new Date().toLocaleDateString();

let history = JSON.parse(localStorage.getItem("ziqirHistory")) || {};

if (!history[today]) history[today] = 0;

count = history[today];
updateUI();

document.getElementById("increase").onclick = () => {
  count += Number(step.value);
  save();
};

document.getElementById("decrease").onclick = () => {
  count -= Number(step.value);
  if (count < 0) count = 0;
  save();
};

document.getElementById("reset").onclick = () => {
  count = 0;
  save();
};

function save() {
  history[today] = count;
  localStorage.setItem("ziqirHistory", JSON.stringify(history));
  updateUI();
}

function updateUI() {
  counter.textContent = count;
  message.textContent = `You have read ${count} times`;
  renderHistory();
}

function renderHistory() {
  historyList.innerHTML = "";
  Object.keys(history).reverse().forEach(date => {
    const li = document.createElement("li");
    li.textContent = `${date} → ${history[date]} times`;
    historyList.appendChild(li);
  });
}
