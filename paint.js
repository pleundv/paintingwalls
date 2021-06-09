const paintWall = function (item) {
    console.log("the wall has been painted red");
}

paintWall();

// single argument

const newWall = function (item) {
    console.log("the wall has been painted" + item);
}

const firstColor = "green"
const secondColor = "pink"
newWall(firstColor);
newWall(secondColor);
newWall();

// multiple arguments

const myWall = function (sides, colors) {
    console.log(sides + "has been painted" + colors);
}

const plekKleur = "the North wall"
const kleurPlek = "orange"

myWall(plekKleur, kleurPlek);

