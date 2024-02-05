// Name: Jiabao Wu
// ID: 100753779
// Date: 2024/02/05

//copyright and date
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = "&copy; " + y + "/" + m + "/" + d + " Jiabao Wu";

//link to other pages
function home(){
    location.replace("index.html")
}
function product(){
    location.replace("product.html")
}
function services(){
    location.replace("services.html")
}
function about(){
    location.replace("about.html")
}
function contact(){
    location.replace("contact.html")
}

//Product page text
if (document.getElementById("productSub")) {
    document.getElementById("productSub").innerHTML = "My Three Favourite Things";
    document.getElementById("pro1st").innerHTML = "My favorite movie is Resident Evil. Actually, I really like apocalyptic movies, such as Maze Runner, World War Z, etc."
    document.getElementById("pro2nd").innerHTML = "I like listening to music very much. One of my favorite songs is 'Umbrella(Matte Remix)-Matte/Ember Island'. I fell in love with listening to this song after first hearing it in high school, and even as I was doing this Lab 1, I was listening to this song.";
    document.getElementById("pro3rd").innerHTML = "My favorite book is called &lt;Vater und Sohn - E.O.Plauen&gt;,he's a German Writter. I have loved reading this book since I was in elementary school. Although it does not have much text expression, the comics in it are very educational and very interesting.";
}

//Service page text
if(document.getElementById("servicesSub")){
document.getElementById("servicesSub").innerHTML = "Three Skills That I would Offer My Clients";
document.getElementById("ser1st").innerHTML = "1. I will try my best to listen to clients' requests and suggestions to provide good cooperative services.";
document.getElementById("ser2nd").innerHTML = "2. I will submit the results to the client on the deadline. If there are additional circumstances that cannot be completed on time, I will communicate with the client in advance and try my best to reach a cooperative agreement.";
document.getElementById("ser3rd").innerHTML = "3. I have a good professional ethics, every customer is important, every customer deserves good service, I will help clients and solve their problems.";
}

//About page text
if(document.getElementById("aboutSub")){
    document.getElementById("abt1st").innerHTML = "I live a fulfilling life almost every day. Sometimes I stay at school to do my homework after class, because this way I can ask the professor immediately if I encounter any problems. I don’t participate in group activities. On weekends, I go to the gym to play badminton with my friends, sometimes I go to the school gymnasium, or watch previous sports games on campus. My latest photo is my ID photo. my family took this shot for me, and I use this avatar as my passport photo and ID photo.";
}

//Contact page
const form = $("form");

console.log(form);

const nameInput = $("input#Name");

console.log(nameInput.value);
//output all the infomation that typed in
$("input#Submit").click(function (event){
    event.preventDefault();
    const myFormArray = $("form")[0].elements;
    for(let input of myFormArray){
        console.log(input.value);
    }
});

//Back to Home page after 3 seconds that submit button been clicked
let timeout;
//settime out js
function myFunction() {
    timeout = setTimeout(alertFunc, 3000);
    // return true;
}
//alert after submit button clicked
function alertFunc() {
    location.replace("index.html")
    alert("User's info has been output, I wish you could read them easier during 3 seconds, so I used alert to paused it, click 'OK' to back to Home Page, btw, Thank you for helping me, Mr.Kareem.\nWish you the best everyday  :)");
}