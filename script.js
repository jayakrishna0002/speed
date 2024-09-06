let time = 0;
let timer;
let isRunning = false;

document.querySelector("textarea").addEventListener("input", (e) => {
    if (!isRunning && e.target.value.length === 1) {
        timer = setInterval(() => {
            time++;
            document.getElementById("time").textContent = getTime();
        }, 1000);
    }

    let typing = e.target.value;
    let actual = document.querySelector("p").textContent;
    let match = actual.substring(0, typing.length) === typing;
    e.target.style.outline = `2px solid ${match ? "green" : "red"}`;

    if (typing === actual) {
        clearInterval(timer);
        let word_count = actual.split(" ").length;
        document.getElementById("result").textContent = `You have typed ${word_count} in ${getTime()}`;
    }
});

function getTime() {
    let sec = time % 60;
    let min = Math.floor(time / 60);
    return `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
}
