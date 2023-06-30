//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=5;
var score=0; scoreMax=5; scoreInc=5; scoreDec=0
var successes=0; successesMax=1; attempts=1; attemptsMax=1;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Lets Go !!!";
var startTime; tiSuccesses=false; tiAttempts=false; tiScore=false;
typeGame=1;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=1; scoWrongDo=1; scoMessage=""; scoPtos=0;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Arial, Helvetica, sans-serif";
var timeOnMessage=5; messageOk="Felicidades has ganado, muy bien !!!"; messageTime="Oh no, te has quedado sin tiempo."; isShowMessage=false;
var urlOk=""; urlTime="";
var goURLOk="_blank"; goURLTime="_blank"; 
var borderOk="#008000"; borderTime="#FF0000"; borderAttempts="#FF0000";borderError="#FF0000";
var imaSel=0; texSel=0;
var board=[]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=["Q09OUVVJU1RB","TU9OVEHDkUFT","UEVOSU5TVUxB","Q09SRElMTEVSQQ==","TUVTRVRB","TU9OVU1FTlRPUw==","QUNBTlRJTEFETw==","Q0HDkU9O","TExBTlVSQQ==","VkFMTEU=","REVTSUVSVE8=","UklP","TUFS","TEFHTw==","UFJBREVSQQ=="];
var c=[9,8,9,10,6,10,10,5,7,5,8,3,3,4,7];
var defs=["Conquista","Montañas","Península","Cordillera","Meseta","Monumentos","Acantilado","Cañon","Llanura","Valle","Desierto","Río","Mar","Lago","Pradera"];
var wDefs=350; posCheck=[];
var answers=[]; letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="RkVSSUFfVEVDTklDQQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var numCols=20; numRows=20; sizeCell=26;
var direction=["HD","VD","VI","X1D","X1I"];
var boardGame=[[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."]];
var solved1X=[];solved1Y=[];solved2X=[];solved2Y=[];paintSolved=["N","N","N","N","N","N","N","N","N","N","N","N","N","N","N"];x1=[];y1=[];x2=[];y2=[];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
