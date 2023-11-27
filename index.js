let header=document.querySelector("header");
let menu =document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{
    header.classList.toggle("shadow",window.scrollY>0);

})

menu.onclick=()=>{
    navbar.classList.toggle("active");
};
window.onscroll = () =>{
    navbar.classList.remove("active");
}

// database connection

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set, get, child,update } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Your web app's Firebase configuration
       const firebaseConfig = {
        apiKey: "AIzaSyDK-3_5E0qUGryoClhScvxJo89XfC15ubk",
        authDomain: "e-commerce-20d15.firebaseapp.com",
        projectId: "e-commerce-20d15",
        storageBucket: "e-commerce-20d15.appspot.com",
        messagingSenderId: "997889231389",
        appId: "1:997889231389:web:ce7203a8bf1699206714f4"
       };


       const app = initializeApp(firebaseConfig);

        const db = getDatabase(app);
        const db1 = getDatabase(app);


let openShopping=document.querySelector(".shopping");
        let closeShopping=document.querySelector(".closeshopping");
        let list=document.querySelector(".listcart");
        let listcard=document.querySelector(".listcards");
        let body=document.querySelector("body");
        let total=document.querySelector(".total");
        let quantity=document.querySelector(".quantity");

        openShopping.addEventListener('click',()=>{
            header.style.zIndex=0;
            body.classList.add('active');
        })
        closeShopping.addEventListener('click',()=>{
            body.classList.remove('active');
            header.style.zIndex="10001"
        })

let array=[];
let food=[];
let k=1;
let account=0;
let tooltiptext1=document.getElementById("tooltiptext1");


const additem= document.querySelectorAll('#add');
additem.forEach(icon => {
    icon.addEventListener("click",(event)=>{
    let ammount=0;
    var content=event.target.parentElement.id;
    let parentid=document.getElementById(content);
    let img=parentid.querySelector("img").src;
    let input=parentid.querySelector("#input").value;
    let h2=parentid.querySelector("h2").innerHTML;
    let h3=parentid.querySelector("#rate").innerHTML;
    array.push(h3);
    food.push(h2);
    ammount=input*h3;
    account+=ammount;
    let imgelement=document.createElement("img");
    let h3element=document.createElement("h3");
    let h2element=document.createElement("h2");
    let h4element=document.createElement("h4");
    let buttonelement=document.createElement("button");
    imgelement.src=img;
    h4element.innerHTML=input;
    h3element.innerHTML=h3;
    h2element.innerHTML=h2;
    buttonelement.innerHTML="X";
    let divelement=document.createElement("div");
    divelement.id="cartitem"+k;
    k++;
    divelement.className="boxcart";
    divelement.appendChild(imgelement);
    divelement.appendChild(h3element);
    divelement.appendChild(h2element);
    divelement.appendChild(h4element);
    divelement.appendChild(buttonelement);
    let listcards=document.getElementById("listcards");
    listcards.appendChild(divelement);
    alert(h2+" successfully added to cart");
    tooltiptext1.innerHTML=food.length;
    buttonelement.addEventListener("click",(err)=>{
        ammount=0;
        var contentid=err.target.parentElement.id;
        let deleteitem=document.getElementById(contentid);
        let deleteh3=deleteitem.querySelector("h3").innerHTML;
        let deleteh4=deleteitem.querySelector("h4").innerHTML;
        let deleteh2=deleteitem.querySelector("h2").innerHTML;
        listcards.removeChild(deleteitem);
        ammount=deleteh4*deleteh3;
        account=account-ammount;
        food.pop(deleteh2);
        tooltiptext1.innerHTML=food.length;
        cartcheakpostion();
        array.pop(deleteh3)
    });
    cartcheakpostion();
    }) 
});

// function addtocart(e)
// {
//     let ammount=0;
//     var content=e.target.parentElement.id;
//     let parentid=document.getElementById(content);
//     let img=parentid.querySelector("img").src;
//     let input=parentid.querySelector("#input").value;
//     let h2=parentid.querySelector("h2").innerHTML;
//     let h3=parentid.querySelector("#rate").innerHTML;
//     array.push(h3);
//     food.push(h2);
//     ammount=input*h3;
//     account+=ammount;
//     let imgelement=document.createElement("img");
//     let h3element=document.createElement("h3");
//     let h2element=document.createElement("h2");
//     let h4element=document.createElement("h4");
//     let buttonelement=document.createElement("button");
//     imgelement.src=img;
//     h4element.innerHTML=input;
//     h3element.innerHTML=h3;
//     h2element.innerHTML=h2;
//     buttonelement.innerHTML="X";
//     let divelement=document.createElement("div");
//     divelement.id="cartitem"+k;
//     k++;
//     divelement.className="boxcart";
//     divelement.appendChild(imgelement);
//     divelement.appendChild(h3element);
//     divelement.appendChild(h2element);
//     divelement.appendChild(h4element);
//     divelement.appendChild(buttonelement);
//     let listcards=document.getElementById("listcards");
//     listcards.appendChild(divelement);
//     alert(h2+" successfully added to cart");
//     tooltiptext1.innerHTML=food.length;
//     buttonelement.addEventListener("click",(err)=>{
//         ammount=0;
//         var contentid=err.target.parentElement.id;
//         let deleteitem=document.getElementById(contentid);
//         let deleteh3=deleteitem.querySelector("h3").innerHTML;
//         let deleteh4=deleteitem.querySelector("h4").innerHTML;
//         let deleteh2=deleteitem.querySelector("h2").innerHTML;
//         listcards.removeChild(deleteitem);
//         ammount=deleteh4*deleteh3;
//         account=account-ammount;
//         food.pop(deleteh2);
//         tooltiptext1.innerHTML=food.length;
//         cartcheakpostion();
//         array.pop(deleteh3)
//     });
//     cartcheakpostion();
// }

function cartcheakpostion()
{
    let cheakout=document.getElementById("cheakout");
    if(array.length>5)
    {
       cheakout.style.position="sticky";
    }
    else
    {
        cheakout.style.position="absolute";
    }
}

const openPopupButton = document.getElementById("open-popup");
const closePopupButton = document.getElementById("close-popup1");
const popupBox= document.getElementById("popup-box1");
let username=document.getElementById("username");
let mail=document.getElementById("mail");
let num=document.getElementById("Mobile-Number");

openPopupButton.addEventListener("click", function() {
    databasefunction();
  popupBox.style.display = "block";
  let full=document.getElementById("fullcontainer");
  full.classList.toggle("blur");
  body.classList.remove('active');
});


// database function
function databasefunction()
{
    let name=localStorage.getItem("username");
    const userRef = ref(db, 'user/' + name);

    get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
            const userData = snapshot.val();
            username.value=userData.username;
            mail.value=userData.email;
            num.value=userData.PhoneNumber;
        }
    })
}

closePopupButton.addEventListener("click", function() {
  popupBox.style.display = "none";
  let full=document.getElementById("fullcontainer");
  full.classList.remove("blur");
  header.style.zIndex="10001";
});


function paymentprocess()
{
   let totalammount=document.getElementById("totalammount");
   totalammount.innerHTML=account;
   body.classList.remove('active');
}

let successpopup=document.getElementById("success");

let heartcount = 0;
const heartcountelement = document.getElementById("heartcount");
const hearts = document.querySelectorAll('.bxs-heart');
let hearttooltip=document.getElementById("hearttooltip");

hearts.forEach(heart => {
    heart.addEventListener("click", (e) => {
        if (heart.classList.contains("red")) {
            heartcount--;
            heart.classList.remove("red");
        } else {
            heartcount++;
            heart.classList.add("red");
        }
        heartcountelement.innerHTML = heartcount;
    });
});



const openPopupButton1 = document.getElementById("submit");
const closePopupButton1 = document.getElementById("close-popup");
const popupBox1 = document.getElementById("popup-box");
openPopupButton1.addEventListener("click", function() {
  popupBox1.style.display = "block";
  popupBox.style.display = "none";
  paymentprocess();
});

closePopupButton1.addEventListener("click", function() {
  popupBox1.style.display = "none";
  let full=document.getElementById("fullcontainer");
  full.classList.remove("blur");
  header.style.zIndex="10001";
});


document.getElementById("okbutton").addEventListener("click",okprocess);
function okprocess()
{
    let full=document.getElementById("fullcontainer");
    full.classList.remove("blur");
    header.style.zIndex="10001";
    successpopup.style.display="none";
}


const eye= document.querySelectorAll('.fa-eye');
eye.forEach(icon => {
    icon.addEventListener("click",()=>{
        icon.classList.toggle("eyecolor");
    }) 
});




const allstar=document.querySelectorAll(".rating .star")
        const ratingValue=document.querySelector('.rating input')
        allstar.forEach((item,idx)=>{
            item.addEventListener('click',function(){
                let click=0;
                ratingValue.value=idx+1;
                allstar.forEach(i=>{
                    i.classList.replace('bxs-star','bx-star')
                    i.classList.remove('active')
                })
                for(let i=0;i<allstar.length;i++)
                {
                    if(i<=idx)
                    {
                        allstar[i].classList.replace('bx-star','bxs-star')
                        allstar[i].classList.add('active')
                    }
                    else{
                        allstar[i].style.setProperty('--1',click)
                        click++
                    }
                }
                localStorage.setItem("star",ratingValue.value);
            })
        })
       document.getElementById("star").addEventListener('click', function (e) {
    e.preventDefault();

    const userRef = ref(db, 'user/' + localStorage.getItem("username"));

    get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
            const userData = snapshot.val();
            
            const ratingValue = localStorage.getItem("star"); 
               
            // Construct an object with the data you want to update.
            const updateData = {
                ratings: ratingValue
            };

            // Update the data on the Firebase Realtime Database.
            update(child(userRef, "Ratings"), updateData).then(() => {
                alert("Rating added to the database");
            }).catch((error) => {
                console.error("Error adding rating to the database: ", error);
            });
        }
    });
});

document.querySelector(".make_pay").addEventListener("click",makepay);
function makepay()
{
    successpopup.style.display="flex";
    popupBox1.style.display = "none";
}
    