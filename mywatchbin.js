
const watchList = [];


function displayWatchList(){
	return watchList.join("");
}


function addToWatchList(movieToAdd){
	watchList.push("-" + movieToAdd + "<br>");
	return watchList;

}

function changeColor(element){
	element.style.color = "red";
}

function removeFromWatchList(){
	watchList.pop();
	return watchList;
}

var imgSpiderman3 = "/Users/andydang/Documents/Red Bear Technologies/MoviesDB/Movie Images/spider-man3.jpeg";
var imgSpiderman2 = "/Users/andydang/Documents/Red Bear Technologies/MoviesDB/Movie Images/spider-man2.jpeg";
var imgSpiderman1 = "/Users/andydang/Documents/Red Bear Technologies/MoviesDB/Movie Images/spiderman-homecoming.jpg";


//not sure how this function works
function createimg(key,sizeA,sizeB) {
var theimage = document.createElement("img");
theimage.setAttribute('src', key);
theimage.setAttribute('alt', 'image');
theimage.height = sizeA;
theimage.width = sizeB;
document.body.appendChild(theimage);  
}

var allMarvelMovies = {

	"Spider-man: No Way Home" : [2022, createimg(imgSpiderman3, 250,250) ],
	"Spider-man: Far From Home" : [2019, createimg(imgSpiderman2, 250,250)],
	"Spider-man: Homecoming" : [2017, createimg(imgSpiderman1, 250,250)]
}

let output = "";
for (let key in allMarvelMovies) {
	output = output + key + "<br>";

	for (let movieInformation in allMarvelMovies[key])
	output = output + allMarvelMovies[key][movieInformation] + "<br>"
}







// let spiderman1 = {
// 	img: "/Users/andydang/Documents/Red Bear Technologies/MoviesDB/Movie Images/spiderman-homecoming.jpg",
// 	title: "Spider-man: Homecoming",
// 	releaseDate: 2017,

// };

// let spiderman2 = {
// 	img: "/Users/andydang/Documents/Red Bear Technologies/MoviesDB/Movie Images/spider-man2.jpeg",
// 	title: "Spider-man: Far From Home",
// 	releaseDate: 2019,
// };

// let spiderman3 = {
// 	img: "/Users/andydang/Documents/Red Bear Technologies/MoviesDB/Movie Images/spider-man3.jpeg"
// 	title: "Spider-man: No Way Home",
// 	releaseDate: 2022,
// };


// var spidermanMovies = [spiderman1.title, spiderman2.title, spiderman3.title];


function copy(){
	var cb = document.getElementById("cb");
	cb.value = watchList;
	cb.style.display ='block';
	cb.select();
	document.execCommand('copy');
	cb.style.display ='none';
}





document.getElementById('myWatchList').innerHTML = displayWatchList();
document.getElementById('movieList').innerHTML = output;
document.getElementById('movieTitle').innerHTML = spiderman1.title;















