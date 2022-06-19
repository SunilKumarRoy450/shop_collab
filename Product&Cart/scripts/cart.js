let container1 = document.getElementById("cartItem");
let subtotal = document.getElementById("total");
let container = document.getElementById("container");

let arr =
   JSON.parse(localStorage.getItem("product")) || []

  // [
  //   {
  //     image:
  //       "https://masai-website-images.s3.ap-south-1.amazonaws.com/Yogesh_52e31f5560.jpg",
  //     desc: "loreeeeemofff",
  //     price: 20.0,
  //     iteamName: "ghaslet",
  //   },
  //   {
  //     image:
  //       "https://masai-website-images.s3.ap-south-1.amazonaws.com/Yogesh_52e31f5560.jpg",
  //     desc: "loreeeeemofff",
  //     price: 20.0,
  //     iteamName: "ghaslet",
  //   },
  //   {
  //     image:
  //       "https://masai-website-images.s3.ap-south-1.amazonaws.com/Yogesh_52e31f5560.jpg",
  //     desc: "loreeeeemofff",
  //     price: 20.0,
  //     iteamName: "ghaslet",
  //   },
  // ];

showData(arr);
function showData() {
  container.innerHTML = null;
  container1.innerHTML = null;
  arr.forEach((el, ind) => {
    // console.log(el.image);
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = el.image;
    image.style.width="60%"
    let desc = document.createElement("p");
    desc.innerText = `Category :${el.category}`;
    let price = document.createElement("p");
    price.innerText = `Price: ${el.price}`;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
     // console.log(arr[i].price);
      sum += Number(arr[i].price);
     // console.log(sum)
     subtotal.innerHTML = `Total Price:${sum}`;
    }
    //console.log(sum)
    

    let iteamName = document.createElement("h3");
    iteamName.innerText = `Item: ${el.iteamName}`;

    let btn=document.createElement('button');
    btn.innerText="Add To Cart"
    btn.addEventListener('click',function (){
        console.log("hello");

    })

    div.append(image, iteamName, desc, price);
    container.append(div);

    // let container1=document.getElementById('cartItem');
    let div1 = document.createElement("div");
    let image1 = document.createElement("img");
    image1.src = el.image;
    let desc1 = document.createElement("p");
    desc1.innerText = `Category :${el.category}`;
    let price1 = document.createElement("p");
    price1.innerText = `Price: ${Number(el.price)}`;




    let iteamName1 = document.createElement("h3");
    iteamName1.innerText = `Item: ${el.iteamName}`;

    let i_div = document.createElement("div");
    let i = document.createElement("i");
    i.setAttribute("class", "fas fa-window-close");
    i_div.append(i);
    i_div.addEventListener("click", function (el, ind) {
      //container1.innerHTML=null
      //   JSON.parse(localStorage.getItem("product"));
     // console.log("hello");
      arr.splice(ind, 1);

      localStorage.setItem("product", JSON.stringify(arr));
      showData();
    });

    let input = document.createElement("input");
    input.type = "number";
    input.max = 5;
    input.min = 1;
    input.value = 1;

    input.addEventListener("click", function () {
      // console.log(el.price)
      // console.log((+input.value)* +price1);
      price1.textContent = `Price: ${Number(el.price * +input.value)}`;
      localStorage.setItem("product", JSON.stringify(arr));
        for (let i = 0; i < arr.length; i++) {
        console.log((arr[i].length));
        sum += Number(arr[i].price);
        //console.log(sum)
     }
    
    //   subtotal.innerHTML = `Total Price:${sum}`;
     
    });
    div1.append(i_div, image1, iteamName1, desc1, price1, input);
    container1.append(div1);
  });
}

// let cancle=document.getElementById('cancel');
// cancle.addEventListener('click',function(el,ind){
//    container1.innerHTML=null
//     console.log("hello");
//    // arr.splice(ind,1);

//     localStorage.setItem("product",JSON.stringify(arr))

// });

// function removeIteam(el, ind) {
//   arr.splice(ind, 1);
//   localStorage.setItem("product", JSON.stringify(arr));
// }

// let addToCart= ()=>{
//     arr.forEach((el)=> {
//         console.log(el.image)
//         let container=document.getElementById('cartItem');
//         let div=document.createElement('div');
//         let image=document.createElement('img');
//         image.src=el.image;
//         let desc=document.createElement('p');
//         desc.innerText=el.desc;
//         let price=document.createElement('p');
//         price.innerText=`Price: ${el.price}`;
//         let iteamName=document.createElement('h3');
//         iteamName.innerText=el.iteamName;

//         div.append(image,iteamName,desc,price);
//         container.append(div)

//     });

// }