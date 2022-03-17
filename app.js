const colors = document.createElement("p");
const image = document.createElement("img");
image.src = "http://static.indigoimages.ca/2015/shop/orange-paint-splatter.png";

// const inputNumber = document.createElement("input")
// inputNumber.style.width = "30em"
// document.body.appendChild(inputNumber)

function generateRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomPosition(element) {
  var x = document.body.offsetHeight - element.clientHeight;
  var y = document.body.offsetWidth - element.clientWidth;
  var randomX = Math.floor(Math.random() * x);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

function creatNewDiv(num) {
  let newDiv = document.createElement("div");
  const image = document.createElement("img");
  image.src =
    "http://static.indigoimages.ca/2015/shop/orange-paint-splatter.png";
  image.style.height = `${num}px`;
  image.style.height = `${num}px`;
  image.style.width = `${num}px`;
  image.style.borderRadius = "50%";
  image.style.position = "absolute";
  let xy = getRandomPosition(image);
  image.style.left = `${xy[0]}px`;
  image.style.top = `${xy[1]}px`;
  image.style.backgroundColor = generateRandomColor();
  document.body.appendChild(newDiv);
  newDiv.appendChild(image);
}

let counter = 0;

counter++;

const countdown = (num, callback) => {
  if (num == 1) {
    let callback = counter;
  } else {
    counter++;
    if (num % 2 === 0) {
      setTimeout(() => {
        creatNewDiv(num);

        // newDiv.appendChild.image
        // image.classList.add("splatter")
        // image.style.height = `${num}px`;
        // image.style.height = `${num}px`;
        // image.style.width = `${num}px`;
        // image.style.borderRadius = "50%";
        // image.style.position = "absolute";
        // image.style.left = `${posY}px`;
        // image.style.top = `${posX}px`;
        // image.style.backgroundColor = generateRandomColor();

        countdown(num / 2, callback);
      }, 200);
    } else {
      setTimeout(() => {
        creatNewDiv(num);
        //THE DIVS NEED TO STAY INSTEAD OF BEING REPLACED EACH TIME WORK ON THAT NEXT
        // newDiv.appendChild(image)
        // image.style.height = `${num}px`;
        // image.style.width = `${num}px`;
        // image.style.borderRadius = "50%";
        // image.style.position = "absolute";
        // image.style.left = `${posY}px`;
        // image.style.top = `${posX}px`;
        // image.style.backgroundColor = generateRandomColor();

        countdown(3 * num + 1, callback);
      }, 200);
    }
  }
};

function getInputValue() {
  let inputValue = document.getElementById("input-box").value;
  // console.log(inputValue);
  console.log(
    `The number you entered is ${inputValue} and the number of times it has been called is ${counter}`
  );
  countdown(inputValue);
}

// let input = document.getElementById("input-box").value;

// const countButton = document.getElementById("submit-button");
// countButton.addEventListener("click", () => {
//   // countdown(103, done);

//  console.log(
// countdown());
// });
