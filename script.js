/////////////////////////////////////////////////////////////////////////////////////////////////
//                                      FOR USER 
// LEFT ----> RIGHT [] [] [] [] []
//Social    
const category1_titles = ['Gmail', 'Reddit', 'Twitter', 'Youtube'];
const category1_links = [`https://mail.google.com/mail/u/0/#inbox`, `https://www.reddit.com`, `https://twitter.com`, `https://www.youtube.com` ];
//Anime
const category2_titles = ['Anilist', 'Animepahe', 'AmiAmi', 'Crunchyroll', 'Danbooru', 'MFG'];
const category2_links = [`https://anilist.co`, `https://animepahe.com`, `https://www.amiami.com/eng/`, `https://crunchyroll.com`,  `https://danbooru.donmai.us/posts?tags=touhou`, `https://myfigurecollection.net/`];
//Extras
const category3_titles = ['ANN', 'Ko-fi', 'Patreon', 'Steam'];
const category3_links = [`https://www.animenewsnetwork.com/`, `https://ko-fi.com/devikomi`, `https://www.patreon.com/home`, `https://store.steampowered.com/`];
//School
const category4_titles = ['Github', 'Moodle', 'Webassign'];
const category4_links = [`https://github.ncsu.edu`, `https://wolfware.ncsu.edu/courses/my-wolfware`, `https://www.webassign.net/ncsu`];
//Music
const category5_titles = ['Listen.moe', 'Spotify'];
const category5_links = [`https://listen.moe`, `https://open.spotify.com/`];
//In order of left -> right
const categories = ['ソーシャル','アニメ','エクストラ','学校','音楽'];
                                                                          //Background Color
const card_colors = ['#28796B','#693273','#410E1A', '#7A94AB', '#D79052', '#2B2F3D']
//////////////////////////////////////////////////////////////////////////////////////////////

let root = document.documentElement;
root.style.setProperty("--youmu", card_colors[0]);
root.style.setProperty("--suwako", card_colors[1]);
root.style.setProperty("--reimu", card_colors[2]);
root.style.setProperty("--marisa", card_colors[3]);
root.style.setProperty("--koishi", card_colors[4]);
root.style.setProperty("--bg", card_colors[5]);

let links = '';

function showTitles() {
    links = '';
    for (let i=0; i<categories.length; i++) {
        document.getElementById(`category${i+1}`).innerHTML = `<h3>${categories[i]}</h3>`;
    }
}

function showLinks(category_titles, category_links) {
    links ='<div>'
    for (let i=0; i<category_titles.length; i++) {
        links += `<a href='${category_links[i]}'>${category_titles[i]}</a>`;
    }
    links +='</div>'
}

function blurImage(character) {
    document.getElementById(`${character}`).classList.add("blur");
    document.getElementById('settings-btn').classList.add('cardHover');
}

function unblurImage(character) {
    document.getElementById(`${character}`).classList.remove("blur");
    document.getElementById('settings-btn').classList.remove('cardHover');
}

let current_bg = '';
function getSettings() {
    let bg = document.getElementById('bg');
    bg.value = localStorage.getItem("background");
    let message = document.getElementById('message')
    message.value = localStorage.getItem('message');
    if (bg.value != '') {
        document.body.style.background = `url(${bg.value})`;
        current_bg = `url(${bg.value})`;
    }
    if (message.value != '') {
       document.getElementById('welcome-message').innerHTML = message.value;
    }
}

showTitles();
getSettings();

//Add Event Listeners

let settings = document.getElementById('settings-btn');
settings.onclick = () => {
    document.getElementById(`settings`).classList.toggle("show");
}

let bg = document.getElementById('bg');
bg.onchange = () => {
    current_bg = `url(${bg.value})`;
    current_link = bg.value;
    if (bg.value == '') {
        current_bg = card_colors[5];
    }
    document.body.style.background = current_bg;
    localStorage.setItem("background", current_link);
}

let message = document.getElementById('message');
message.onchange = () => {
    document.getElementById('welcome-message').innerHTML = message.value;
    localStorage.setItem("message", message.value);
}

let category1 = document.getElementById("category1");
category1.onmouseenter = function() {
    document.body.style.background = card_colors[0];
    blurImage('youmu-img');
    showLinks(category1_titles,category1_links);
    this.innerHTML = links;
};

category1.onmouseleave = function() {
    document.body.style.background = current_bg;
    unblurImage('youmu-img');
    showTitles();
}

let category2 = document.getElementById("category2");
category2.onmouseenter = function() {
    document.body.style.background = card_colors[1];
    blurImage('suwako-img');
    showLinks(category2_titles,category2_links);
    this.innerHTML = links;
};

category2.onmouseleave = function() {
    document.body.style.background = current_bg;
    unblurImage('suwako-img');
    showTitles();
}

let category3 = document.getElementById("category3");
category3.onmouseenter = function() {
    document.body.style.background = card_colors[2];
    blurImage('reimu-img');
    showLinks(category3_titles,category3_links);
    this.innerHTML = links;
};

category3.onmouseleave = function() {
    document.body.style.background = current_bg;
    unblurImage('reimu-img');
    showTitles();
}

let category4 = document.getElementById("category4");
category4.onmouseenter = function() {
    document.body.style.background = card_colors[3];
    blurImage('marisa-img');
    showLinks(category4_titles,category4_links);
    this.innerHTML = links;
};

category4.onmouseleave = function() {
    document.body.style.background = current_bg;
    unblurImage('marisa-img');
    showTitles();
}

let category5 = document.getElementById("category5");
category5.onmouseenter = function() {
    document.body.style.background = card_colors[4];
    blurImage('koishi-img');
    showLinks(category5_titles,category5_links);
    this.innerHTML = links;
};

category5.onmouseleave = function() {
    document.body.style.background = current_bg;
    unblurImage('koishi-img');
    showTitles();
}

