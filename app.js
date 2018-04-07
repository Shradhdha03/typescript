// #---- Reviewing ES6 language features
// ***Optional parameters
function option_parameters(a, b, c) {
    if (b === void 0) { b = 0; }
    if (c === void 0) { c = 0; }
    console.log(a + "--" + b + "--" + c);
}
option_parameters(5, 8);
option_parameters(3);
// ***Tamplate string
var a = 5;
var b = "hello " + a;
var c = "hello " + (a > 5 ? "aha, more than five" : "not enough");
// ***Let, Const and Var
function testVar() {
    var iAmVar = "var is here"; //Can not be access outside the methode
    var iAmLet = "let is here";
    var iAmConst = "const is here";
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
        console.log(element + " --> " + key + " ");
        element = "ok";
    }
}
console.log("in my fruits " + fruitsToEat);
for (var index = 0; index < fruitsToEat.length; index++) {
    var element = fruitsToEat[index];
    console.log(element + " --> " + index + " ");
    element = "hello";
}
console.log("index my fruits " + fruitsToEat);
for (var _i = 0, fruitsToEat_1 = fruitsToEat; _i < fruitsToEat_1.length; _i++) {
    var element = fruitsToEat_1[_i];
    console.log(element);
    element = "hello1";
}
console.log(" of my fruits " + fruitsToEat);
fruitsToEat.forEach(function (element) {
    console.log(element);
    element = "hello2";
});
console.log("each my fruits " + fruitsToEat);
// ***Lambdas
var container = document.getElementById("container");
function Counter(el) {
    var _this = this;
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
    el.addEventListener('click', function () {
        console.log(_this);
        _this.count++;
        el.innerHTML = _this.count;
    });
    console.log("" + this.count);
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
var filtered = [3, 5, 7, 4, 2].filter(function (item) { return item < 5; });
console.log("" + filtered);
// ***Destucturing
var array = ["red", 11.60, false];
var color = array[0], price = array[1], in_stock = array[2];
//switch values without temp
var aa = 2, bb = 3;
_a = [bb, aa], aa = _a[0], bb = _a[1];
var customer = {
    id: 123,
    fname: "Hathoda",
    active: false
};
var isActive = customer.active, id = customer.id, fname = customer.fname;
function option_parameters_jinda_he(_a) {
    var id = _a.id, _b = _a.fname, fname = _b === void 0 ? "" : _b, _c = _a.active, active = _c === void 0 ? false : _c, oldfname = _a.fname;
    fname = fname + " oldy";
    console.log(id + "--" + fname + "--" + active + "---" + oldfname);
}
var _a;
/*
Specifying JavaScript types
Defining custom and anonymous types
Defining and implementing TypeScript classes
Working with generics
Organizing code with namespaces
Switching modules
Importing modules
Debugging TypeScript
Implementing decorators

*/ 
