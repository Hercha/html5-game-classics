var carPic = document.createElement("img");
var roadPic = document.createElement("img");
var wallPic = document.createElement("img");
var goalPic = document.createElement("img");
var treePic = document.createElement("img");
var flagPic = document.createElement("img");

var picsToLoad = 0; // set automatically based on imageList in loadImages()

function countLoadedImagesAndLaunchIfReady() {
    picsToLoad--;
    //console.log(picsToLoad);
    if(picsToLoad === 0) {
        imageLoadingDoneSoStartGame();
    }
}

function beginLoadingImage(imgVar, fileName) {
    imgVar.onload = countLoadedImagesAndLaunchIfReady;
    imgVar.src = "images/"+fileName;
}

function loadImages() {
    var imagesList = [
      {varName: carPic, theFile: "player1car.png"},
      {varName: roadPic, theFile: "track_road.png"},
      {varName: wallPic, theFile: "track_wall.png"},
      {varName: goalPic, theFile: "track_goal.png"},
      {varName: treePic, theFile: "track_tree.png"},
      {varName: flagPic, theFile: "track_flag.png"}
    ];
    
    picsToLoad = imagesList.length;
    
    for(var i=0; i<imagesList.length; i++) {
        beginLoadingImage(imagesList[i].varName, imagesList[i].theFile);
    }
}