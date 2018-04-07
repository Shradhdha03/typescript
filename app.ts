// #---- Reviewing ES6 language features


// ***Optional parameters
function option_parameters(a: number, b = 0, c = 0) {
    console.log(a + "--" + b + "--" + c);
}
option_parameters(5, 8);
option_parameters(3);



// ***Tamplate string
var a = 5;
var b = `hello ${a}`;
var c = `hello ${a > 5 ? "aha, more than five" : "not enough"}`;



// ***Let, Const and Var
function testVar() {
    var iAmVar = "var is here"; //Can not be access outside the methode
    let iAmLet = "let is here";
    const iAmConst = "const is here";
}
testVar();
// console.log(iAmVar); 

for (var i = 0; i < 2; i++) {
    var counter = i; //Can be access outside the methode (strange)
}
// console.log(counter); 



// ***For of loops
var fruitsToEat = ["apple", "banana", "I am full"];
for (var key in fruitsToEat) {
    if (fruitsToEat.hasOwnProperty(key)) {
        var element = fruitsToEat[key];
        console.log(`${element} --> ${key} `);
        element = "ok";
    }
}
console.log(`in my fruits ${fruitsToEat}`);

for (var index = 0; index < fruitsToEat.length; index++) {
    var element = fruitsToEat[index];
    console.log(`${element} --> ${index} `);
    element = "hello";
}
console.log(`index my fruits ${fruitsToEat}`);

for (var element of fruitsToEat) {
    console.log(element);
    element = "hello1";
}
console.log(` of my fruits ${fruitsToEat}`);

fruitsToEat.forEach(element => {
    console.log(element);
    element = "hello2";
});
console.log(`each my fruits ${fruitsToEat}`);



// ***Lambdas
var container = document.getElementById("container");
function Counter(el) {

    console.log(this);
    console.log(el);

    this.count = 0;
    el.innerHTML = this.count;

    // el.addEventListener('click', function () {
    //     // console.log(this);
    //     this.count++;
    //     el.innerHTML = this.count;
    // });

    // let _this =this;
    // el.addEventListener('click', function () {
    //     // console.log(this);
    //     // console.log(_this);
    //     _this.count++;
    //     el.innerHTML = _this.count;
    // });

    el.addEventListener('click', () => {
        console.log(this);
        this.count++;
        el.innerHTML = this.count;
    });
    console.log(`${this.count}`);
}

new Counter(container);

// let filtered = [3,5,7,4,2].filter(function(item){
//     return item<5;
// });
// console.log(`${filtered}`);

// let filtered = [3,5,7,4,2].filter((item)=>{
//     return item<5;
// });
// console.log(`${filtered}`);

let filtered = [3, 5, 7, 4, 2].filter(item => item < 5);
console.log(`${filtered}`);



// ***Destucturing
let array = ["red", 11.60, false]
let [color, price, in_stock] = array;

//switch values without temp
let aa = 2, bb = 3;
[aa, bb] = [bb, aa];

let customer = {
    id: 123,
    fname: "Hathoda",
    active: false
},
let { active: isActive, id, fname } = customer;

function option_parameters_jinda_he({
    id,
    fname: fname = "",
    active: active = false,
    fname: oldfname
}) {
    fname += " oldy";
    console.log(id + "--" + fname + "--" + active + "---" + oldfname);
}



// ***Spread operator
function add() {
    let values = Array.prototype.splice.call(arguments, [1]), total = 0;
    values.forEach(value => { total += value });
}

function calSpread(action...values) {
    let total=0;
    values.forEach(value => {
        if (action === "add") {
            total += value
        }
        if (action === "multi") {
            total *= value
        }
    });
    return total;
}

console.log(`${calSpread("add",8.8,5,6.2,5.3)}`);

var source =[4,5];
var target =[1,2,3,...source,6,7];
console.log(`${target}`);

var list =[1,2];
var moreList=[3,4];

Array.prototype.push.apply(list,moreList);

let newList = list.push(...moreList);
console.log(`${newList}`);


