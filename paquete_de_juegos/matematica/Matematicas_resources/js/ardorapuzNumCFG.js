//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=60;
var successes=0; successesMax=0; attempts=0; attemptsMax=3;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#8080FF"; colorButton="#374F73"; colorText="#000000"; colorSele="#400080";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="'Trebuchet MS', Helvetica, sans-serif";
var timeOnMessage=5; messageOk="Felicidades, lo ha logrado "; messageTime="Su tiempo ha terminado "; messageError="Intentelo de nuevo haha "; messageErrorG="Intentelo de nuevo haha "; messageAttempts="Ha hecho el maximo de intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#930B44";borderError="#930B44"; borderAttempts="#930B44";
var wordsGame="TWF0ZW1hdGljYXM="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var a=["0","0","0","0","1","1","1","1",];
var b=["MTU=","MTM=","Ng==","MjU=","MzA=","MjI=","MzQ=","NDU=",];
var c=["30","34","40","30","15","20","29","39",];
var d=["MTU=","MjE=","MzQ=","NQ==","MTU=","Mg==","NQ==","Ng==",];
var colorSol="#F12783";var actualState=[];var iOp1=false;var iOp2=false;var iM=false;var iSol=false;var idiOp1=-1;var idiOp2=-1;var idiM=-1;var idiSol=-1;
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
