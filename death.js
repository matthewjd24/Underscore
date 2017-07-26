#pragma strict

private var SpawnX : int;
private var SpawnY : int;
private var flagObj1 : GameObject;
private var flagScript1 : flaganimatedtexture;
private var player : GameObject;

function Start() {
	player = GameObject.Find("Player");
	SpawnX = player.transform.position.x;
	SpawnY = player.transform.position.y;
	flagObj1 = GameObject.Find("flag1");
	flagScript1 = flagObj1.GetComponent(flaganimatedtexture);
}

function OnTriggerEnter() {
	if (flaganimatedtexture.checkpoint == true) {
		player.transform.position.x = flagObj1.transform.position.x;
		player.transform.position.y = flagObj1.transform.position.y;
	}
	else {
		player.transform.position.x = SpawnX;
		player.transform.position.y = SpawnY;
	}
}
