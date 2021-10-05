const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
refs = {
    startButton: document.querySelector("[data-action=start]"),
    stopButton: document.querySelector("[data-action=stop]"),
};
let timerId;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function onStartButtonClicked() {
    timerId = setInterval(changeBodyColor, 1000);
    refs.startButton.disabled = true;
}
function changeBodyColor() {
    const colorID = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.setProperty("background-color", colors[colorID]);
}
function onStopButtonClicked() {
    clearInterval(timerId);
    refs.startButton.disabled = false;

}
refs.startButton.addEventListener("click", onStartButtonClicked);
refs.stopButton.addEventListener("click", onStopButtonClicked);
 