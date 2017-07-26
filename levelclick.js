#pragma strict

var loading : GameObject;
var level = "";
private var loadinglevel = false;
private var levelsavailable = 0;
private var level2button : GameObject;
private var level3button : GameObject;
private var level4button : GameObject;
private var level5button : GameObject;
private var level6button : GameObject;
private var level7button : GameObject;
private var level8button : GameObject;
private var level9button : GameObject;
private var level10button : GameObject;
private var level11button : GameObject;
private var level12button : GameObject;
private var level13button : GameObject;
private var level14button : GameObject;
private var level15button : GameObject;
private var level16button : GameObject;
private var level17button : GameObject;
private var level18button : GameObject;
private var level19button : GameObject;
private var level20button : GameObject;
private var level21button : GameObject;
private var level22button : GameObject;
private var level23button : GameObject;
private var level24button : GameObject;
private var level25button : GameObject;
private var level26button : GameObject;
private var level27button : GameObject;

function Start () {
	loading = GameObject.Find("loadingscreen");
	loading.renderer.material.color.a = 0;
	level2button = GameObject.Find("level2");
	level3button = GameObject.Find("level3");
	level4button = GameObject.Find("level4");
	level5button = GameObject.Find("level5");
	level6button = GameObject.Find("level6");
	level7button = GameObject.Find("level7");
	level8button = GameObject.Find("level8");
	level9button = GameObject.Find("level9");
	level10button = GameObject.Find("level10");
	level11button = GameObject.Find("level11");
	level12button = GameObject.Find("level12");
	level13button = GameObject.Find("level13");
	level14button = GameObject.Find("level14");
	level15button = GameObject.Find("level15");
	level16button = GameObject.Find("level16");
	level17button = GameObject.Find("level17");
	level18button = GameObject.Find("level18");
	level19button = GameObject.Find("level19");
	level20button = GameObject.Find("level20");
	level21button = GameObject.Find("level21");
	level22button = GameObject.Find("level22");
	level23button = GameObject.Find("level23");
	level24button = GameObject.Find("level24");
	level25button = GameObject.Find("level25");
	level26button = GameObject.Find("level26");
	level27button = GameObject.Find("level27");
	levelsavailable = PlayerPrefs.GetInt("cleared") + 1;
	
	if (levelsavailable >= 2) {
		level2button.transform.position.z = 4;
	}
	else {
		level2button.transform.position.z = 10;
	}
	
	if (levelsavailable >= 3) {
		level3button.transform.position.z = 4;
	}
	else {
		level3button.transform.position.z = 10;
	}
	
	if (levelsavailable >= 4) {
		level4button.transform.position.z = 4;
	}
	else {
		level4button.transform.position.z = 10;
	}
	
	if (levelsavailable >= 5) {
		level5button.transform.position.z = 4;
	}
	else {
		level5button.transform.position.z = 10;
	}
	
	if (levelsavailable >= 6) {
		level6button.transform.position.z = 4;
	}
	else {
		level6button.transform.position.z = 10;
	}
	
	if (levelsavailable >= 7) {
		level7button.transform.position.z = 4; 
	}
	else {
		level7button.transform.position.z = 10;
	}
	
	if (levelsavailable >= 8) {
		level8button.transform.position.z = 4;
	}
	else {
		level8button.transform.position.z = 10;
	}
	
	if (levelsavailable >= 9) {
		level9button.transform.position.z = 4;
		level10button.transform.position.z = 4;
	}
	else {
		level9button.transform.position.z = 10;
		level10button.transform.position.z = 10;
	}
	
	if (levelsavailable >= 10) {
		level11button.transform.position.z = 4;
	}
	else {
		level11button.transform.position.z = 10;
	}
	
	if (levelsavailable >= 11) {
		level12button.transform.position.z = 4;
	}
	else {
		level12button.transform.position.z = 10;
	}
	
	if (levelsavailable >= 12) {
		level13button.transform.position.z = 4;
	}
	else {
		level13button.transform.position.z = 10;
	}
	
	if (levelsavailable >= 13) {
		level14button.transform.position.z = 4;
	}
	else {
		level14button.transform.position.z = 10;
	}
	
	if (levelsavailable >= 14) {
		level15button.transform.position.z = 4;
	}
	else {
		level15button.transform.position.z = 10;
	}
	
	if (levelsavailable >= 15) {
		level16button.transform.position.z = 4;
	}
	else {
		level16button.transform.position.z = 10;
	}
	
	if (levelsavailable >= 16) {
		level17button.transform.position.z = 4;
	}
	else {
		level17button.transform.position.z = 10;
	}
	
	if (levelsavailable >= 17) {
		level18button.transform.position.z = 4;
		level19button.transform.position.z = 4;
	}
	else {
		level18button.transform.position.z = 10;
		level19button.transform.position.z = 10;
	}
	
	if (levelsavailable >= 18) {
		level20button.transform.position.z = 4;
	}
	else {
		level20button.transform.position.z = 10;
	}
	
	if (levelsavailable >= 19) {
		level21button.transform.position.z = 4;
	}
	else {
		level21button.transform.position.z = 10;
	}
	
	if (levelsavailable >= 20) {
		level22button.transform.position.z = 4;
	}
	else {
		level22button.transform.position.z = 10;
	}
	
	if (levelsavailable >= 21) {
		level23button.transform.position.z = 4;
	}
	else {
		level23button.transform.position.z = 10;
	}
	
	if (levelsavailable >= 22) {
		level24button.transform.position.z = 4;
	}
	else {
		level24button.transform.position.z = 10;
	}
	
	if (levelsavailable >= 23) {
		level25button.transform.position.z = 4;
	}
	else {
		level25button.transform.position.z = 10; 
	}
	
	if (levelsavailable >= 24) {
		level26button.transform.position.z = 4;
	}
	else {
		level26button.transform.position.z = 10;
	}
	
	if (levelsavailable >= 25) {
		level27button.transform.position.z = 4;
	}
	else {
		level27button.transform.position.z = 10;
	}
}


function OnMouseDown () {
	gameObject.renderer.material.color = Color(0.666, 0.666, 0.666);
}

function OnMouseUp () {
	gameObject.renderer.material.color = Color(1, 1, 1);
	loadinglevel = true;
}

function FixedUpdate () {
	if (loadinglevel) {
		loading.transform.position.z = -5;
		if (loading.renderer.material.color.a >= 1) {
			loadinglevel = false;
			Application.LoadLevel(level);
		}
		else {
			loading.renderer.material.color.a += .02;
		}
	}
}