// $(document).ready(function(){
// 	setTimeout(function(){
// 		$('body').addClass('loaded')

function runAnim(){ 
 setTimeout(function(){
  document.querySelector('body').className = 'loaded';;
  document.querySelector('h1').style.color = "#222222";;
 }, 1500);
};

window.onload = runAnim();﻿