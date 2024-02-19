$(document).ready(function () {
  console.log("jQuery is running!");
  // Injecting an H1 header into the header HTML element with an id of "header"
  $("#header").html("<h1>Welcome to our Travel Blog!</h1>");

  // Create Navigation Bar
  const categories = ["Beaches", "Mountains", "Cities", "Forests", "Deserts"];
  let navContent = "<ul>";
  $.each(categories, function (index, category) {
    // console.log(index);
    // console.log(category);
    navContent += `<li onclick="loadCategoryContent('${category}')">${category}</li>`;
  });
  navContent += "</ul>";
  $("#navbar").html(navContent);

  window.loadCategoryContent = function (category) {
    console.log("loadCategoryContent function ran!");
    console.log(category);
    let content = `<h2>${category}</h2>`;
    content += `<div class="carousel" id="${category.toLowerCase()}-carousel"></div>`;
    $("#content").html(content);

    populateCarousel(category.toLowerCase());
  };

  const categoryImages = {
    beaches: [
      { alt: "Beach Sunset", src: "./img/beach1.jpg" },
      { alt: "Sandy Shore", src: "./img/beach2.jpg" },
      { alt: "Marina Resort", src: "./img/beach3.jpg" },
    ],
    mountains: [
      { alt: "Mountain Range", src: "./img/mountain1.jpg" },
      { alt: "Snowy Peak", src: "./img/mountain2.jpg" },
      { alt: "Hiking Trail", src: "./img/mountain3.jpg" },
    ],
    cities: [
      {alt:"Misty City", src: "./img/city1.jpg"},
      {alt:"City Night_Time", src: "./img/city2.jpg"},
      {alt:"City Sunset", src: "./img/city3.jpg"},
    ],
    forests: [
      {alt:"Tropical RainForest", src: "./img/forest1.jpg"},
      {alt:"Maple Forest", src: "./img/forest2.jpg"},
      {alt:"Coniferous Forest", src: "./img/forest3.jpg"},
    ],
    deserts: [
      {alt:"Semi-Arid Desert", src: "./img/desert1.jpg"},
      {alt:"Coastal Desert", src: "./img/desert2.jpg"},
      {alt:"Subtropical Desert", src: "./img/desert3.jpg"},
    ],
  };
  // category = beaches
  function populateCarousel(category) {
    console.log("populate carousel ran!");
    const images = categoryImages[category];

    // [].forEach(), [].map() -> 2 Array Iterator Method
    let carouselContent = images
      .map((image, index) => {
        return `<div class="carousel-item ${index == 0 ? "active" : ""}">
      <div class="image" style="background-image: url('${image.src}')">
      </div>
      <p>${image.alt}</p>
      </div>
      `;
      })
      .join("");

    $(`#${category}-carousel`).html(carouselContent);

    $(`#${category}-carousel`).append(`
    <button class="carousel-control prev" onclick="moveCarousel('${category}', -1)">&lt;</button>
    <button class="carousel-control next" onclick="moveCarousel('${category}', 1)">&gt;</button>
    `);
  }

  window.moveCarousel = function (category, direction) {
    debugger;
    let items = $(`#${category}-carousel .carousel-item`);

    let activeIndex = items.index(items.filter(".active"));

    let newIndex = activeIndex + direction;

    if (newIndex >= items.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = items.length - 1;
    }
    items.removeClass("active");
    items.eq(newIndex).addClass("active");
  };
});

// ICE 5 Tasks:
// 1.Populate Cities, Forests & Deserts
// 2. Add 3 images to the Cities & Deserts (Optionally, you may add images for the rest of the categories)
// 3. Dynamically add content to the Footer using jQuery. The content should include a short description of your favorite category/place and why.

// DUE Monday February 19th at 11:59 PM


//------------------------------------------------------------------------------------------------------------------------------------------------
//footer JQuery
$(document).ready(function() {
  // build up footer element
  var footer = $("<footer>");
  
  // Content in the footer( `` symbol can make mutipple line while coding)
  footer.html(`
    <p>My Favourite Category</p>
    <p>My favorite category is the forest, inside of forest are quiet and silence, feels good for me to take a walk in the forest. When I was in high school, I lived with a host family. The mountain behind was a large forest. I liked to go to the forest alone, but then my host family found me and gets mad. They said the forest was too dangerous, and won't let me in, XD</p>
  `);
  
  // Append footer to the body
  $("#footer").append(footer);
});