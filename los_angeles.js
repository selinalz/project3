

var Airtable = require("airtable");

var base = new Airtable({apiKey: 'keyj2kPXpFWW8uq2L'}).base('app0RKGC9hu12v5a8');

base("sky_collection")
  .select({
		view: "los_angeles"
	})
  .eachPage(gotPageOfSkies, gotAllSkies);

var skies = [];

function gotPageOfSkies(records, fetchNextPage) {
  console.log("gotPageOfSkies()");
  skies.push(...records);
  fetchNextPage();
}

function gotAllSkies(err) {
  console.log("gotAllSkies()");

  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  consoleLogSkies();
  showSkies();
}

function consoleLogSkies() {
  console.log("consoleLogSkies()");
  skies.forEach(sky => {
    console.log("Sky:", sky);
  });
}

function showSkies() {
  console.log("showSkies()");
  skies.forEach(sky => {

    var skyContainer = document.createElement("div");
    skyContainer.classList.add("sky-container");
    document.querySelector(".container").append(skyContainer);

    var skyImage = document.createElement("img");
    skyImage.classList.add("sky-image");
    skyImage.src = sky.fields.image[0].url;
    skyContainer.append(skyImage);

    let skyPhotos = document.querySelectorAll('.sky-container');
    let container = document.querySelector('.container');
    skyPhotos.forEach(function (skyPhoto) {
      skyPhoto.style.left = (100 * Math.random()) + '%';
      skyPhoto.style.top = (70 * Math.random()) + '%';
    });

    var skyLocation = sky.fields.location;
    skyLocation.forEach(function(location) {
      skyContainer.classList.add(location);
    });

    var skyAqi = sky.fields.aqi;
    skyAqi.forEach(function(aqi) {
      skyContainer.classList.add(aqi);
    });

    var filter50 = document.querySelector(".aqi_50");
    filter50.addEventListener("click", function() {
      if (skyContainer.classList.contains("50")) {
        skyContainer.style.display = "block";
      } else {
        skyContainer.style.display = "none";
      }
    });

    var filter100 = document.querySelector(".aqi_100");
    filter100.addEventListener("click", function() {
      if (skyContainer.classList.contains("100")) {
        skyContainer.style.display = "block";
      } else {
        skyContainer.style.display = "none";
      }
    });

    var filter200 = document.querySelector(".aqi_200");
    filter200.addEventListener("click", function() {
      if (skyContainer.classList.contains("200")) {
        skyContainer.style.display = "block";
      } else {
        skyContainer.style.display = "none";
      }
    });

    var filter300 = document.querySelector(".aqi_300");
    filter300.addEventListener("click", function() {
      if (skyContainer.classList.contains("300")) {
        skyContainer.style.display = "block";
      } else {
        skyContainer.style.display = "none";
      }
    });

		var aqi = document.getElementsByClassName("aqi")[0];
    var aqi2 = document.getElementsByClassName("aqi2")[0];
		var hl = document.getElementsByClassName("hl")[0];
		var circlebutton = document.getElementsByClassName("circle")[0];
		var reset = document.getElementsByClassName("reset")[0];
		var resettext = document.getElementsByClassName("reset_text")[0];
    var location = document.getElementsByClassName("location")[0];
    var world = document.getElementsByClassName("world")[0];

    var filterReset = document.querySelector(".reset");
    filterReset.addEventListener("click", function() {

					skyContainer.style.display = "block";
					skyDes.style.display = "none";
					document.body.style.backgroundColor = "white";
					var circleb = document.getElementsByClassName("circle")[0];
					circleb.style.left = "28%";
					aqi.style.color = "black";
          aqi2.style.color = "black";
	        hl.style.border = "1px solid black";
	        button50.style.color = "black";
	        button100.style.color = "black";
	        button200.style.color = "black";
	        button300.style.color = "black";
					reset.style.color = "black";
					resettext.style.color = "black";
          location.style.color = "black";
          world.style.display = "black";
          skyDate.style.display = "none";
		});

    var filterReset2 = document.querySelector(".reset_text");
    filterReset2.addEventListener("click", function() {
					skyContainer.style.display = "block";
					skyDes.style.display = "none";
					document.body.style.backgroundColor = "white";
					var circleb = document.getElementsByClassName("circle")[0];
					circleb.style.left = "28%";
					aqi.style.color = "black";
          aqi2.style.color = "black";
	        hl.style.border = "1px solid black";
	        button50.style.color = "black";
	        button100.style.color = "black";
	        button200.style.color = "black";
	        button300.style.color = "black";
					reset.style.color = "black";
					resettext.style.color = "black";
          location.style.color = "black";
          world.style.display = "black";
          skyDate.style.display = "none";
		});

    var button50 = document.getElementsByClassName("aqi_50") [0];
    button50.addEventListener("click", MoveCircle);

    function MoveCircle() {
    var circle = document.getElementsByClassName("circle")[0];
    circle.style.left = "32%";
    document.body.style.backgroundColor = "white";
    skyDes.style.display = "none";
    aqi.style.color = "black";
    aqi2.style.color = "black";
    hl.style.border = "1px solid black";
    button50.style.color = "black";
    button100.style.color = "black";
    button200.style.color = "black";
    button300.style.color = "black";
    reset.style.color = "black";
    resettext.style.color = "black";
    location.style.color = "black";
    world.style.display = "black";
    skyDate.style.display = "none";
    }

    var button100 = document.getElementsByClassName("aqi_100") [0];
    button100.addEventListener("click", MoveCircle2);

    function MoveCircle2() {

    var circle = document.getElementsByClassName("circle")[0];
    circle.style.left = "47.5%";
    document.body.style.backgroundColor = "white";
    skyDes.style.display = "none";
    aqi.style.color = "black";
    aqi2.style.color = "black";
    hl.style.border = "1px solid black";
    button50.style.color = "black";
    button100.style.color = "black";
    button200.style.color = "black";
    button300.style.color = "black";
    reset.style.color = "black";
    resettext.style.color = "black";
    location.style.color = "black";
    world.style.display = "black";
    skyDate.style.display = "none";

    if (skyContainer.classList.contains("100")) {
      skyImage.style.display = "block";
      }
    }

    var button200 = document.getElementsByClassName("aqi_200") [0];
    button200.addEventListener("click", MoveCircle3);

    function MoveCircle3() {

    var circle = document.getElementsByClassName("circle")[0];
    circle.style.left = "62.5%";
    document.body.style.backgroundColor = "white";
    skyDes.style.display = "none";
    aqi.style.color = "black";
    aqi2.style.color = "black";
    hl.style.border = "1px solid black";
    button50.style.color = "black";
    button100.style.color = "black";
    button200.style.color = "black";
    button300.style.color = "black";
    reset.style.color = "black";
    resettext.style.color = "black";
    location.style.color = "black";
    world.style.display = "black";
    skyDate.style.display = "none";

    if (skyContainer.classList.contains("200")) {
      skyImage.style.display = "block";
      }
    }

    var button300 = document.getElementsByClassName("aqi_300") [0];
    button300.addEventListener("click", MoveCircle4);

    function MoveCircle4() {

    var circle = document.getElementsByClassName("circle")[0];
    circle.style.left = "77.5%";
    document.body.style.backgroundColor = "white";
    skyDes.style.display = "none";
    aqi.style.color = "black";
    aqi2.style.color = "black";
    hl.style.border = "1px solid black";
    button50.style.color = "black";
    button100.style.color = "black";
    button200.style.color = "black";
    button300.style.color = "black";
    reset.style.color = "black";
    resettext.style.color = "black";
    location.style.color = "black";
    world.style.display = "black";
    skyDate.style.display = "none";

    if (skyContainer.classList.contains("300")) {
      skyImage.style.display = "block";
      }
    }

    var dateContainer = document.createElement("div");
    dateContainer.classList.add("date-container");
    document.querySelector(".container2").append(dateContainer);

    var skyDes = document.createElement("div");
    skyDes.classList.add("sky-description");
    skyDes.innerText = sky.fields.description;
    dateContainer.append(skyDes);

    skyContainer.addEventListener("click", function() {

      var world = document.getElementsByClassName("world")[0];

      document.querySelectorAll(".sky-description").forEach(des => des.style.display = "none");
      skyDes.style.display = "block";

      if (skyContainer.classList.contains("50")) {
        document.body.style.backgroundColor = "#D9F0F9";
        skyDes.style.color = "#B4E3F5";
        skyImage.style.filter = "grayscale(0%) blur(0px)";
        aqi.style.color = "black";
        aqi2.style.color = "black";
        hl.style.border = "1px solid black";
        button50.style.color = "black";
        button100.style.color = "black";
        button200.style.color = "black";
        button300.style.color = "black";
				reset.style.color = "black";
				resettext.style.color = "black";
        location.style.color = "black";
        world.style.display = "black";
        circlebutton.style.left = "32%";
      } else {
        document.body.style.backgroundColor = "black";
        skyDes.style.color = "#454040";
        skyImage.style.display = "none";
        aqi.style.color = "white";
        aqi2.style.color = "white";
        hl.style.border = "1px solid white";
        button50.style.color = "white";
        button100.style.color = "white";
        button200.style.color = "white";
        button300.style.color = "white";
				reset.style.color = "white";
				resettext.style.color = "white";
        world.style.display = "white";
        location.style.color = "white";
      }
    });

    var skyDate = document.createElement("div");
    skyDate.classList.add("sky-date");
    skyDate.innerText = sky.fields.date;
    dateContainer.append(skyDate);

    skyContainer.addEventListener("click", function() {

      document.querySelectorAll(".sky-date").forEach(date => date.style.display = "none");
      skyDate.style.display = "block";

      if (skyContainer.classList.contains("50")) {
        skyDate.style.color = "black";
        world.style.color = "black";
      } else {
        skyDate.style.color = "white";
        world.style.color = "white";
      }
    });

    skyContainer.addEventListener("click", function() {

      var circlebutton2 = document.getElementsByClassName("circle")[0];

      if (skyContainer.classList.contains("100")) {
        circlebutton2.style.left = "47.5%";
      }
    });

    skyContainer.addEventListener("click", function() {

      var circlebutton3 = document.getElementsByClassName("circle")[0];

      if (skyContainer.classList.contains("200")) {
        circlebutton3.style.left = "62.5%";
      }
    });

    skyContainer.addEventListener("click", function() {

      var circlebutton4 = document.getElementsByClassName("circle")[0];

      if (skyContainer.classList.contains("300")) {
        circlebutton4.style.left = "77.5%";
        skyImage.style.display = "block";
      }
    });

    var aqitext = document.getElementsByClassName("aqi")[0];
    aqitext.addEventListener("mouseover", ShowWorld);

    function ShowWorld() {
    	var world = document.getElementsByClassName("world")[0];
    	world.style.display = "block";
    }

    var aqitext2 = document.getElementsByClassName("aqi2")[0];
    aqitext2.addEventListener("mouseover", ShowWorld2);

    function ShowWorld2() {
    	var world2 = document.getElementsByClassName("world")[0];
    	world2.style.display = "block";
    }

  });
}

function setNewSky() {
  var randLink = document.getElementById('randLink');

  var theLinks = new Array(
    'https://selinalz.github.io/project3/hubei.html',
    'https://selinalz.github.io/project3/los_angeles.html',
    'https://selinalz.github.io/project3/new_york.html',
    'https://selinalz.github.io/project3/jersey.html',
    'https://selinalz.github.io/project3/san_jose.html'
  );

  var arrSize = theLinks.length;

  var randNo = Math.random();
  randNo = Math.floor(randNo * arrSize);

  randLink.href = theLinks[randNo];
}
