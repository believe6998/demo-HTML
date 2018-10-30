var play = document.getElementsByClassName("play");
 play.onclick =function () {
     
 }
var Mp3_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responseText);
        var jsObject = JSON.parse(xhttp.responseText);
        var content = '';
        for (var i = 0; i < jsObject.items.length; i++) {
            var  mp3Item = '<div class="mp3-item">';
            mp3Item += '<img src="'+ jsObject.items[i].thumbnail+'" alt="">';
            mp3Item += '<div class="singer">' + jsObject.items[i].singer + '</div>';
            mp3Item += '<div class="author">' + jsObject.items[i].author + '</div>';
            mp3Item += '<audio class="autoplay" controls autoplay="autoplay">\n' +
                '    <source src="'+jsObject.items[i].link+'" type="audio/mpeg">';
            mp3Item += '</div>';
            content += mp3Item;
        }
        document.getElementById("mp3").innerHTML = content;
    }
};
xhttp.open("GET", Mp3_API, true);
xhttp.send();