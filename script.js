var html = document.querySelector('.html');
var css = document.querySelector('.css');
var javascript = document.querySelector('.js');
var php = document.querySelector('.php');
var python = document.querySelector('.python');



function loadScores(){
//html
var hwidth =0;
var interval = setInterval(function(){
 ++hwidth;
html.style.width = hwidth+'%';
html.innerHTML = hwidth+'%';
if(hwidth ==95){
 clearInterval(interval);
}

}, 10);

//css
var cwidth = 0;
var cssinterval = setInterval(function(){
 ++cwidth;
css.style.width = cwidth+'%';
css.innerHTML = cwidth+'%';
if(cwidth ==90){
 clearInterval(cssinterval);
}

}, 10);


//js

var jwidth = 0;
var jsinterval = setInterval(function(){
 ++jwidth;
javascript.style.width = jwidth+'%';
javascript.innerHTML = jwidth+'%';
if(jwidth ==85){
 clearInterval(jsinterval);
}

}, 10);

//php

var phwidth = 0;
var phinterval = setInterval(function(){
 ++phwidth;
php.style.width = phwidth+'%';
php.innerHTML = phwidth+'%';
if(phwidth ==70){
 clearInterval(phinterval);
}

}, 10);

//python

var pwidth = 0;
var pinterval = setInterval(function(){
 ++pwidth;
python.style.width = pwidth+'%';
python.innerHTML = pwidth+'%';
if(pwidth ==60){
 clearInterval(pinterval);
}

}, 10);


}

