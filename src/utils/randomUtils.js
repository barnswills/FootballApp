export const numbers = amount => {
  let holder = [];

  for (let i = 0; i < amount; i++) {
    const number = Math.floor(Math.random() * 100) + 1;
    holder.push(number);
  }

  return holder;
};

export const colors = amount => {
  let holder = [];

  for (let i = 0; i < amount; i++) {
    const color = getRandomColor();
    holder.push(color);
  }

  console.log(holder);

  return holder;
};

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
