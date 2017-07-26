#pragma strict

private var i = 0;
public var playbuttonpressed = false;
public var optionsbuttonpressed = false;
public var package1buttonpressed = false;
public var packagemenubackbuttonpressed = false;
public var optionsmenubackbuttonpressed = false;
public var packageselectbackbuttonpressed = false;
private var x = 0;
private var y = 0;
private var z = 0;
var animlength : int;
var cameramovelength : int;
var optionscameramovelength : int;

function Start () {
	this.transform.position.y = 0;
	this.transform.position.x = 0;
}

function FixedUpdate () {
	if (i == animlength) {
		this.transform.position.y += 30;
		i++;
	}
	else if (i < animlength) {
		i++;
	}
	
	if (playbuttonpressed) {
		if (x < cameramovelength) {
			this.transform.position.x += .9;
			x++;
		}
		else {
			playbuttonpressed = false;
			x = 0;
		}
	}
	
	if (packageselectbackbuttonpressed) {
		if (z < cameramovelength) {
			this.transform.position.x -= .9;
			z++;
		}
		else {
			packageselectbackbuttonpressed = false;
			z = 0;
		}
	}
	
	if (optionsbuttonpressed) {
		if (y < optionscameramovelength) {
			this.transform.position.y += .74;
			y++;
		}
		else {
			optionsbuttonpressed = false;
			y = 0;
		}
	}
	
	if (package1buttonpressed) {
		this.transform.position.y += 30;
		package1buttonpressed = false;
	}
	
	if (packagemenubackbuttonpressed) {
		this.transform.position.y = 30;
		this.transform.position.x = 20.7;
		packagemenubackbuttonpressed = false;
	}
}