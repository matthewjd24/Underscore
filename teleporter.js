#pragma strict

private var player : GameObject;
var tp : GameObject;
private var teleporting = false;
private var timetogrow = false;

function Start () {
	player = GameObject.Find("Player");
}

function OnTriggerEnter () {
	teleporting = true;
	player.GetComponent(FPSInputController).abletomove = false;
	player.GetComponent(CharacterMotor).movement.maxFallSpeed = 0.0;
	
	if (player.transform.position.y < this.transform.position.y) {
		player.transform.position.y += .3;
	}
	
	yield WaitForSeconds(.7);
	player.transform.position.x = tp.transform.position.x;
	player.transform.position.y = tp.transform.position.y;
	teleporting = false;
	yield WaitForSeconds(.3);
	timetogrow = true;
}

function FixedUpdate () {
	if (teleporting == true) {
		if (player.transform.localScale.x >= .1) {
			player.transform.localScale.x -= .1;
			player.transform.localScale.y -= .1;
		}
		
		if (player.transform.position.x < this.transform.position.x) {
			player.transform.position.x += .08;
		}
		if (player.transform.position.x > this.transform.position.x) {
			player.transform.position.x -= .08;
		}
		
		if (player.transform.position.y < this.transform.position.y) {
			player.transform.position.y += .08;
		}
		if (player.transform.position.y > this.transform.position.y) {
			player.transform.position.y -= .08;
		}
	}
	
	if (timetogrow == true) {
		player.transform.localScale.x += .1;
		player.transform.localScale.y += .1;
	}
	if (player.transform.localScale.x >= 1.3) {
		timetogrow = false;
		player.GetComponent(CharacterMotor).movement.maxFallSpeed = 40.0;
		player.GetComponent(FPSInputController).abletomove = true;
	}
}