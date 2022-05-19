

//------------------ Inheritance--------------------------


// const cat = {
//     name: "cat",
//     leg: 4,
//     fur: true,
//     tail: true,
//     type: "animal",
// }




// const tiger = Object.create(cat);
// tiger.name = "tiger"
// console.log(tiger);


//------------------ Inheritance--------------------------


// const Product = {
//     brand: "Nike",
//     logo: "url",
//     sellar: "nike",
    
// }

// const Product1 = Object.create(Product);
// Product1.name = "Puma"
// console.log(Product1);


//---------------------Constructor Function--------------

function Product(type) {
    this.type = type;
    this.brand = "Nike";
    this.logo = "URL";
    this.sellar = "Nike";
}


Product.prototype.discount = function () {
    console.log("50% discount")
}


Product.prototype.changetype = function (type) {
    this.type = type;
}

Product.prototype.price = 1000;

let p1 = new Product("shoe");

let p2 = new Product("sneaker");
// p1.discount();
// console.log(p2);

console.log(p1);
p1.changetype("t-shirt")
console.log(p1)





// ----------------------2nd Example------------------

let arr = [1, 2, 3];

let arr2 = new Array (1, 2, 3);
console.log(arr2);



function myArray (){

    Object.defineProperty(this, "length",{
        value: 0,
        writable: true,
        enumerable: false
    })
    
    this.length = arguments.length

    for(let i=0; i<arguments.length; i++){
        this[i] = arguments[i];
    }
}


let arr3 = new myArray(1, 2, 3, 4, 5, 6, 7);
console.log(Object.values(arr3))


//-----------------------Own Constructor Function-------------

myArray.prototype.पुश = function (value){
    this[this.length] = value;
    this.length++;
};

arr3.पुश(6);
console.log(Object.values(arr3))


myArray.prototype.पॉप = function(){
    delete this [this.length-1];
    this.length--;
}

arr3.पॉप(6);
console.log(Object.values(arr3))



myArray.prototype.पॉपPrint= function(){
    console.log(Object.values(this))
}

arr3.पॉपPrint();


//  --------------------------------------------------------------------

let grandfather = {
    heigth: "tall",
};

let father = Object.create(grandfather);

let son = Object.create(father);

son.name = "babu bhaiya";

console.log(son);
