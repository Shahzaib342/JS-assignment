//global variables
let calculator_value = 0;

//3 (a)

//create a new element using todo list and part of doSomething function
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

//functionality of doSomething function
let code_with_100_lines = function () {
// to do list
// Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }

// Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

// Add a "checked" symbol when clicking on a list item
    var list = document.querySelector('ul');
    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}

//function expression that will return a object consist of two keys doSomething and desc
let qSyntax = function () {
    let object = {
        doSomething: code_with_100_lines,
        desc: "doSomething function is performing basic sum operation and it is utilizing arithmetic operators"
    };
    return object;
};

// End - 3(a)

// 3(b)

//constructor functions for creating a object
function constructorFunctions(name, id) {
    this.name = name;
    this.id = id;
};

//return a map with 5 different ways of creating same object
let getMap = function () {
    let map = new Map();
    //first way
    let obj = {name: "Shoval Suissa", id: 313527111};
    map.set("Object Literal", obj);
    //second way
    let obj2 = new Object();
    obj2.name = "Shoval Suissa";
    obj2.id = 313527111;
    map.set("Object Constructor", obj2);
    //third way
    map.set("Object.create() Method", Object.create({
            name: "Shoval Suissa",
            id: 313527111,
        }
    ));
    //fourth way
    const obj4_createObjects = {name: "Shoval Suissa",};
    const obj4_chain = {id: 313527111,};
    map.set("Object.assign() Method", Object.assign({}, obj4_createObjects, obj4_chain));
    //fith way
    map.set("Constructor Function", new constructorFunctions("Shoval Suissa", 313527111,));
    //return map
    return map;
}

//Arrow function expression
let qObj = () => {
    let obj = {
        createObjects: getMap(),
        chain: {},
        desc: "desc of arrow function"
    }
    return obj;
};

// End - 3(b)

//3(c)
function qCalc() {
    let object = new Object();
    object.calculator = {};
    object.desc = "Calculator";

    object.calculator.add = function (num) {
        calculator_value = calculator_value + num;
    }

    object.calculator.sub = function (num) {
        calculator_value = calculator_value - num;
    }

    object.calculator.getValue = function () {
        return calculator_value;
    }

    return object;
}

// End - 3(c)

//3(d)
function qAsync() {
    var value = 0;
    let object = new Object();
    object.doAsync = function (someThing, time) {
        return setTimeout(() => document.getElementById("async_value").innerHTML = someThing, time)
    };
    object.exec = async function () {
        return object.doAsync("Hello Shoval Suissa", 11500)
    };
    object.desc = "Desc";
    return object;
}

// End - 3(d)








