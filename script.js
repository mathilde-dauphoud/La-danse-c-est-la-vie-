/*let color = prompt("Quel est ton mood d'aujourd'hui ? (rose, bleu, violet, vert");

if (color == rose)
{

}


*/




let loveDance = prompt("Est-ce que tu aimes la danse ? Répond par oui ou non ")


if ((loveDance == "oui") || (loveDance == "OUI") || (loveDance == "Oui"))
{
	alert("Tu es une merveilleuse personne et tu as complêtement raison. ")
}
else if ((loveDance == "non") || (loveDance == "NON") || (loveDance == "Non"))
{
	alert("N'importe quoi. La danse est un incroyable sport. Ce site va permettre de te convaincre. ")
}
else
{
	alert("Je n'ai pas compris ta réponse. J'espère que c'était oui, sinon gare à toi. Si tu voulais dire non, je ne te comprend pas et tu dis n'importe quoi . Mais tu dois quand meêm lire ce site car il va te faire changé d'avis ")
}



// let name = prompt("Quel est ton prénom ?");


let name = prompt("Quel est ton prénom ?");
console.log("Bonjour " + name);


let titleOfMyPage = document.getElementById("titleOfMyPage")
titleOfMyPage.innerText = name + " : Future danseuse étoile"
