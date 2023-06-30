//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=5;
var score=0; scoreMax=1; scoreInc=1; scoreDec=0
var successes=0; successesMax=1; attempts=1; attemptsMax=1;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var startTime; tiSuccesses=false; tiAttempts=false; tiScore=false;
typeGame=1;
var colorBack="#FFB9B9"; colorButton="#0DB956"; colorText="#000000"; colorSele="#E21D89";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="'Arial Narrow', sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=6; messageOk="muy bien!"; messageTime="3:00"; isShowMessage=false;
var urlOk=""; urlTime="";
var goURLOk="_blank"; goURLTime="_blank"; 
var borderOk="#008000"; borderTime="#FF0000"; borderAttempts="#FF0000";borderError="#FF0000";
var imaSel=0; texSel=0;
var board=[]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=["UFJPVE9O","TkVVVFJPTg==","RUxFQ1RST04=","QVRPTU8=","TlVDTEVP","UVVBUks=","REFMVE9O","VEhPTVBTT04=","Qk9IUg==","UlVUSEVSRk9SRA=="];
var c=[6,7,8,5,6,5,6,8,4,10];
var defs=["Partícula elemental del núcleo del átomo y que tiene carga eléctrica positiva.","Partícula elemental del núcleo del átomo que no tiene carga eléctrica.","Partícula que se encuentra alrededor del núcleo del átomo y que tiene carga eléctrica negativa.","Porción material menor de un elemento químico que interviene en las reacciones químicas y posee las propiedades características de dicho elemento.","El núcleo atómico es la parte central de un átomo, tiene carga positiva, y concentra más del 99,9 % de la masa total del átomo.","En física de partículas, los cuarks​​ o quarks​​ son los fermiones elementales masivos que interactúan fuertemente formando la materia nuclear y ciert","En su modelo atómico, Dalton sugirió que los átomos eran similares a bolas. El también creía que los átomos de dos o más elementos podían unirse quími","el modelo atómico de Thomson? En 1904, Thomson contaba con evidencias suficientes para desarrollar el primer modelo atómico.","Bohr describió el átomo fundamental del hidrógeno como un electrón moviéndose en orbitas circulares alrededor de un protón","Modelo atómico de Rutherford. El Modelo de Rutherford establecía: El átomo tiene un núcleo central en el que están concentradas la carga positiva y pr"];
var wDefs=350; posCheck=[];
var answers=[]; letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="anVlZ29fc29hcA=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var numCols=10; numRows=10; sizeCell=20;
var direction=["HD","VD","X1D"];
var boardGame=[[".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".","."]];
var solved1X=[];solved1Y=[];solved2X=[];solved2Y=[];paintSolved=["N","N","N","N","N","N","N","N","N","N"];x1=[];y1=[];x2=[];y2=[];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
