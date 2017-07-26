#pragma strict

var optionsmenu = false;
var packagemenu = false;
var packageselectmenu = false;
var maincamera : GameObject;
private var splashscript : splash;


function Start () {
	maincamera = GameObject.Find("Main Camera");
	splashscript = maincamera.GetComponent(splash);
}


function OnMouseDown () {
	this.transform.localScale.x = this.transform.localScale.x * 1.3;
	this.transform.localScale.z = this.transform.localScale.z * 1.3;
}


function OnMouseUp () {
	this.transform.localScale.x = this.transform.localScale.x * .769;
	this.transform.localScale.z = this.transform.localScale.z * .769;
	if (optionsmenu) {
	
	}
	else if (packageselectmenu) {
		splashscript.packageselectbackbuttonpressed = true;
	}
	else if (packagemenu) {
		splashscript.packagemenubackbuttonpressed = true;
	}
}