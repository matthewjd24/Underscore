#pragma strict

var maincamera : GameObject;
private var splashscript : splash;

function Start () {
	maincamera = GameObject.Find("Main Camera");
	splashscript = maincamera.GetComponent(splash);
}

function OnMouseDown () {
	this.transform.localScale.x = this.transform.localScale.x * 1.2;
	this.transform.localScale.z = this.transform.localScale.z * 1.2;
}

function OnMouseUp () {
	this.transform.localScale.x = this.transform.localScale.x * .8333;
	this.transform.localScale.z = this.transform.localScale.z * .8333;
	splashscript.playbuttonpressed = true;
}