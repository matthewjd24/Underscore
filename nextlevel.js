#pragma strict

var nextlevel = "";
var thislevel = 1; //number of levels completed if you've completed this one
private var levelsavailable : int;
private var loadingscreen : GameObject;
private var maincamera : GameObject;
private var player : GameObject;
private var loadingnextlevel = false;

function Start () {
	loadingscreen = GameObject.Find("loadingscreen");
	player = GameObject.Find("Player");
	maincamera = GameObject.Find("Main Camera");
}

function OnTriggerEnter () {
	loadingnextlevel = true;
	player.GetComponent(FPSInputController).abletomove = false;
	levelsavailable = PlayerPrefs.GetInt("cleared"); //number of levels completed already
	if (thislevel > levelsavailable) {
		PlayerPrefs.SetInt("cleared", thislevel); //if this hasn't been cleared yet, make cleared equal to it
	}
	yield WaitForSeconds(1);
	Application.LoadLevel(nextlevel);
}

function Update () {
	if (loadingnextlevel == false) {
		loadingscreen.transform.position.y = maincamera.transform.position.y - 38;
	}
	else {
		loadingscreen.transform.position.y = maincamera.transform.position.y;
	}
	loadingscreen.transform.position.x = maincamera.transform.position.x;
}