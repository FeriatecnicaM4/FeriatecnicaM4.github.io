//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
calcMaxWidth();paintbGame();
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
cssColors();}
function calcMaxWidth() {$("#ardoraAct").css("width", actMaxWidth + "px");$("#ardoraAct").css("height",actMaxHeight + "px");
var canWidth = $("#ardoraAct").css("width").replace("px", "");var canHeight = $("#ardoraAct").css("height").replace("px", "");
$("#ardoraActCanvas").attr({"width": (parseInt(canWidth) + 20).toString(),"height": canHeight});}
function paintbGame() {var iW=[];var nalt=[];for (i = 0; i < wordsG.length; i++) {iW.push("");nalt.push("");}for (i = 0; i < iW.length; i++) {
var ind = Math.floor(Math.random() * iW.length);while (iW[ind].localeCompare("") != 0) {ind++;if (ind == iW.length) {ind = 0;}}
iW[ind]=$.trim(oimaWords(wordsG[i]));var pos=iW[ind].indexOf(".");iW[ind]=iW[ind].substring(0,pos+4);nalt[ind]=aW[i];}
var newHtml = "<ul id='sortable'>";for (i = 0; i < iW.length; i++) {newHtml=newHtml+"<li tabindex='0' id='cellG" + i.toString() + "' class='bGame'><img alt='"+nalt[i]+"' src='"+dirMedia+iW[i]+"'/></li>";
}newHtml = newHtml + "</ul>";$("#ardoraActSort").html(newHtml);$("#sortable").sortable({revert: true});$("ul, li").disableSelection();
$(".bGame").mouseenter(function () {$(this).css({background: colorSele,color: colorText,borderColor: colorButton});
var color2 = colorSele;var color1 = colorBack;
$(this).css("background", "-webkit-radial-gradient(center, ellipse, " + color1 + "," + color2 + ")");
$(this).css("background", "-moz-radial-gradient(center,ellipse, " + color1 + ", " + color2 + ")");
$(this).css("background", "-ms-radial-gradient(center, ellipse, " + color1 + ", " + color2 + ")");
$(this).css("background", "-o-radial-gradient(center, ellipse, " + color1 + ", " + color2 + ")");
$(this).css("background", "radial-gradient(ellipse at center, " + color1 + ", " + color2 + ")");
$(this).css("filter", "progid:DXImageTransform.Microsoft.gradient(startColorstr='"+color1+"', endColorstr='"+color2+"')");
});
$(".bGame").mouseleave(function () {$(this).css({background: colorBack,color: colorBack,borderColor:colorText});});
$(".bGame").focus(function() {$(this).css({background: colorSele,color: colorText,borderColor: colorButton});var color2 = colorSele;var color1 = colorBack;$(this).css("background", "-webkit-radial-gradient(center, ellipse, " + color1 + "," + color2 + ")");
$(this).css("background", "-moz-radial-gradient(center,ellipse, " + color1 + ", " + color2 + ")");$(this).css("background", "-ms-radial-gradient(center, ellipse, " + color1 + ", " + color2 + ")");
$(this).css("background", "-o-radial-gradient(center, ellipse, " + color1 + ", " + color2 + ")");
$(this).css("background", "radial-gradient(ellipse at center, " + color1 + ", " + color2 + ")");$(this).css("filter", "progid:DXImageTransform.Microsoft.gradient(startColorstr='" + color1 + "', endColorstr='" + color2 + "')");});
$(".bGame").blur(function() {$(this).css({background: colorBack,color: colorBack,borderColor: colorText});});
$(".bGame").keydown(function(event){if(event.which == 37 || event.which == 38) {$(this).insertBefore($(this).prev());} if(event.which == 39 || event.which == 40) {$(this).insertAfter($(this).next());}
if (event.which == 84 || event.which == 33) {$(this).parent().prepend($(this));} if (event.which == 66 || event.which == 34) {$(this).parent().append($(this));}
if(event.which == 82) {var p = $(this).parent(); p.children().each(function(){p.prepend($(this))})} if(event.which == 83) {var p = $(this).parent();p.children().each(function(){if(Math.random()<.5){p.prepend($(this));}else{p.append($(this));}})} $(this).focus();});
$("#buttonOk").keydown(function(e){if (e.which!=9){isCorrect();}});$("#buttonOk").focus(function(e){removeOk();});$("#buttonOk").blur(function(e){paintOk();});
}
function randomSort() {var iW=[];var nalt=[];for (i=0; i < words.length; i++){iW.push(words[i]);nalt.push(alts[i]);wordsG.push("");aW.push("");}for (i=0; i<iW.length; i++) {
var ind = Math.floor(Math.random()*iW.length);while (wordsG[ind].localeCompare("") != 0) {ind++;if (ind==iW.length){ind = 0;}}wordsG[ind]=iW[i];aW[ind]=nalt[i];}}
function isCorrect(){
successes=0;var correct = true;var i=0;$("ul li").each(function (ind, e) {var eId="#"+$(e).attr("id")+" img";var fileI=$(eId).attr("src").replace(dirMedia,"");
if (fileI.localeCompare(oimaWords(words[i]))!=0){correct=false;}else{successes++;}i++;});if (correct) {score=score+scoreInc;timeAct=timeAct+timeBon;$("#ardoraActCanvas").attr("aria-label",messageOk); showMessage("Ok");} else {
attempts++;score=score-scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {$("#ardoraActCanvas").attr("aria-label",messageAttempts);showMessage("Attempts");} else {
$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
var iW = [];for (i = 0; i < words.length; i++) {iW.push($.trim(oimaWords(words[i])));var pos = iW[i].indexOf(".");iW[i] = iW[i].substring(0, pos + 4);
}var i = 0;$("ul li").each(function (ind, e) {$(e).html("<img src='" + dirMedia + iW[i] + "'/>");i++;});
}
function paintBack(){}
function oimaWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
