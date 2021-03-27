var names [
    "Father-Mukesh Jairath",
    "Mother-Aanchal Jairath",
    "Me-Akshat Jairath";
]

var images [
    "download.jpeg",
    "download2.jpeg",
    "download1.jpeg";
]

var i = 0;

function nextSlide() {
    document.getElementById("Names").innerHTML = names[i];
    document.getElementById("images").src = images[i];
    i++;
}