var arr1=[]
let getData=async () =>{

    let res=await fetch("https://max-fashion-backend.herokuapp.com/womens");

    let data=await res.json();
   Append(data)

   console.log(data)

}

getData()

function Append (arr){
    let container=document.getElementById('container');
    arr.forEach((el)=>{
        
        // console.log(el)
        let div=document.createElement('div');
        let image=document.createElement('img');
        image.src=el.imageURL;
        let iteamName=document.createElement('h3');
        iteamName.innerText=el.productName;
        let price=document.createElement('p');
        price.innerText=el.price;
        let cat=document.createElement('p')
        cat.innerText=el.category;

        let btn=document.createElement('button');
        btn.innerText="Add To Cart"
        btn.addEventListener('click',function (){
        console.log("hello");

        let obj={
            image:el.imageURL,
            iteamName:el.productName,
            category:el.category,
            price:el.price
        }
        arr1.push(obj)
        localStorage.setItem('product',JSON.stringify(arr1))
        window.location.href="cart.html"
        })
        
        div.append(image,iteamName,cat,price,btn);
        container.append(div)
        })



    }