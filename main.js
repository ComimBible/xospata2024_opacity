let imgFrame = document.querySelector('.addedImg')
let imgFrameNext = document.querySelector('.scaledImg')
let opaImg = document.querySelector('.scaledImg1')
let bgPurple = document.querySelector(".bg-purple");
let textArea = document.querySelectorAll(".textArea img");
let i = 1;

let addImg = document.querySelectorAll(".addImg");

console.log(addImg[0]);
console.log(addImg[1]);
console.log(addImg[2]);

// function test() {
//   setInterval(function () {
//     if (i < 11) {
//       i++;
//       if (i < 5) {
//         addImg[i].style.opacity = 1;
//       } else if (i == 5) {
//         imgFrame.animate(scaleImg, scaleTiming);
//       } else if (i == 6) {
//         opaImg.style.display = "block";
//       } else if (i == 7) {
//         imgFrameNext.innerHTML += `<img class="addImg" src="./images/background0${
//           i - 1
//         }.jpg">`;
//       } else if (7 < i && i < 12) {
//         textArea[i - 8].style.opacity = 1;
//       }
//     } else {
//       clearInterval(test);
//     }
//   }, 500);
// }

function test() {
  setInterval(function () {
    if (i < 12) {
      i++;
      if (i < 5) {
        addImg[i - 2].style.opacity = 1;
        console.log(i);
      } else if (i == 5) {
        imgFrame.animate(scaleImg, scaleTiming);
      } else if (i == 6) {
        opaImg.style.display = "block";
      } else if (i == 7) {
        bgPurple.style.opacity = 1;
      } else if (7 < i && i < 12) {
        textArea[i - 8].style.opacity = 1;
      }
    }
  }, 500);
}

setTimeout(test, 1400);

const scaleImg = [
  { transform: "scale(1)", transformOrigin: "74.5% 51%", easing: "linear" },
  { transform: "scale(1.65)", transformOrigin: "74.5% 51%" },
];

const scaleTiming = {
  duration: 500,
  easing: "linear",
  fill: "forwards", 
};   

// const textEffect= [
//   {opacity: 0},
//   {opacity: 1}
// ]
