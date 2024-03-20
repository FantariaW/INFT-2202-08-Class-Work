// Name: Jiabao Wu
// ID: 100753779
// Date: 2024/03/16

// document.getElementById("loadBlog").addEventListener("DOMContentLoaded", async function(){

//-----------------------------------------------------------------------------------------------------------

// "DOMContentLoaded" can show up everything while the page open
document.addEventListener("DOMContentLoaded", async function(){
      try{
          let blogList = await fetch(
              "https://jsonplaceholder.typicode.com/posts/"
          );
          
          // setup value
          var blogString = "";
          var blogJsonResult = await blogList.json();
          // array for pictures form internet and img file
          const pics = [`<img src = "./img/background.jpg" width="400">`,
                        `<img src = "./img/Duck.gif" width="150">`,
                        `<img src = "https://wallpaperaccess.com/full/207037.jpg" width="400">`,
                        `<img src = "https://getwallpapers.com/wallpaper/full/4/2/1/75407.jpg" width="400">`,
                        `<img src = "https://i.pinimg.com/originals/11/44/b9/1144b9ee54c5bedfd4aa788230a6cc31.jpg" width="400">`,
                        `<img src = "https://i.pinimg.com/736x/8d/4a/c0/8d4ac0b6618d4f0f1371b96c72e2ef2a.jpg" width="400">`,
                        `<img src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHo1YzRtbjMwaWltOW81bzF1OXp1bW9oenJtMGN6dnIzaDZtaHptaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SKGo6OYe24EBG/giphy.gif" width="200">`,
                        `<img src = "https://images.hdqwalls.com/download/1/airplane-dawn-dusk-flight-sunrise-sky-24.jpg" width="400">`,
                        `<img src = "https://img.freepik.com/premium-photo/3-different-flavors-shapes-dim-sum-bamboo-dimsum-place_963305-423.jpg" width="300">`,
                        `<img src = "https://sandiegomagazine.com/wp-content/uploads/2023/08/0894be879230dc23d674991fed2b6028.jpg" width="400">`,
                        `<img src = "https://cdn.toptutorjob.com/inline-images/y0A1fJgvDH5P6xUpS61N4b1ErL8LHW6E5CDHDiLZXyZbcgIWWh.jpeg" width="400">`,
                        `<img src = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/china-guangxi-province-guilin-wilfried-krecichwost.jpg" width="400">`,
                        `<img src = "http://www.xinhuanet.com/english/2020-06/19/139151705_15925561466021n.jpg" width="400">`,
                        `<img src = "https://gxmu.cucas.cn/uploads/school/2015/0722/1437547320520618.jpg" width="400">`,
                        `<img src = "https://png.pngtree.com/thumb_back/fw800/background/20210910/pngtree-city-night-nanning-night-view-aerial-photography-drone-shooting-photography-map-image_845001.jpg" width="400">`,
                        `<img src = "https://img.goodfon.com/wallpaper/big/d/4f/call-of-duty-modern-warfare-ii-activision-men-video-games-vi.webp" width="400">`,
                        `<img src = "https://i.ytimg.com/vi/wTH5Y9P5Nfs/maxresdefault.jpg" width="400">`,
                        `<img src = "https://wallpapercave.com/wp/wp4624576.jpg" width="350">`,
                        `<img src = "https://i13b.3djuegos.com/juegos/7475/terraria/fotos/maestras/terraria-2658916.jpg" width="400">`,
                        `<img src = "./img/Gift.jpg" width="300">`
        ];
          
          // for loop to print out results and blogs
          // ${pics}[i] printout pictures from pics array for each blogs, I replaced `<img src = "./img/Duck.gif" width="100">` with ${pics}[i]
          for(i = 0; i<20; i++){
              blogString += 
              `<div id="blogContainer" class="card text-white bg-dark mb-3" style="height: 750px; width: 600px; margin-right: auto; margin-left: auto;">
              <div id="blogContainer" class="card-header">Blog: ${blogJsonResult[i].id}</div>
              <div id="blogContainer" class="card-body">
                <h5 class="card-title">Title: ${blogJsonResult[i].title}</h5>
                <div>${pics[i]}</div>
                <br>
                <p class="card-text">User ID: ${blogJsonResult[i].userId}</p>
                <p class="card-text">ID: ${blogJsonResult[i].id}</p>
                <p class="card-text">Body:<br> ${blogJsonResult[i].body}</p>
              </div>
            </div> <br><br><br><br>`
          }
          document.getElementById("blogList").innerHTML = blogString;
      }
      catch(err){
          console.log(err);
      }
  });

//-----------------------------------------------------------------------------------------------------------

// document.addEventListener("DOMContentLoaded", async function(){
//     try{
//         let blogList = await fetch(
//             "https://jsonplaceholder.typicode.com/posts/"
//         );
        
//         // setup value
//         var blogString = "";
//         var blogJsonResult = await blogList.json();
        
//         //for loop to print out results and blogs
//         for(i = 0; i<20; i++){
//             blogString += 
//             `<div id="blogContainer" class="card text-white bg-dark mb-3" style="height: 400px; width: 600px; margin-right: auto; margin-left: auto;">
//             <div id="blogContainer" class="card-header">Blog: ${blogJsonResult[i].id}</div>
//             <div id="blogContainer" class="card-body">
//               <h5 class="card-title">Title: ${blogJsonResult[i].title}</h5>
//               <div id="duck"><img src = "./img/Duck.gif" width="100"></div>
//               <br>
//               <p class="card-text">User ID: ${blogJsonResult[i].userId}</p>
//               <p class="card-text">ID: ${blogJsonResult[i].id}</p>
//               <p class="card-text">Body:<br> ${blogJsonResult[i].body}</p>
//             </div>
//           </div> <br><br><br><br>`
//         }
//         document.getElementById("blogList").innerHTML = blogString;
//     }
//     catch(err){
//         console.log(err);
//     }
// });

// ------------------------------------------------------------------------------------

// document.getElementById("loadBlog").addEventListener("click", async function(){
//   try{
//       let blogList = await fetch(
//           "https://jsonplaceholder.typicode.com/posts?limit=20&offset=0"
//       );

//       var blogString = "";
//       var blogJsonResult = await blogList.json();
//       blogJsonResult.forEach((post) => {
//           blogString += 
//           `<li>
//               <p>User ID: ${post.userId}</p>
//               <p>ID: ${post.id}</p>
//               <p>Title: ${post.title}</p>
//               <p>Body: ${post.body}</p>
//           </li><br>`;
//       });
//       document.getElementById("blogList").innerHTML = blogString;
//   }
//   catch(err){
//       console.log(err);
//   }
// });