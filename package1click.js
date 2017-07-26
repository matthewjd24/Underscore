#pragma strict

var maincamera : GameObject;
private var splashscript : splash;

function Start () {
	maincamera = GameObject.Find("Main Camera");
	splashscript = maincamera.GetComponent(splash);
}

function OnMouseDown () {
	this.transform.localScale.x = this.transform.localScale.x * .9;
	this.transform.localScale.z = this.transform.localScale.z * .9;
}

function OnMouseUp () {
	this.transform.localScale.x = this.transform.localScale.x * 1.1111;
	this.transform.localScale.z = this.transform.localScale.z * 1.1111;
	splashscript.package1buttonpressed = true;
}