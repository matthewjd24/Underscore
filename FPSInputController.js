private var motor : CharacterMotor;
private var directionVector = new Vector3(0, 0, 0);

private var jumpbutton : GUITexture;
private var left : GUITexture;
private var right : GUITexture;
private var menubutton : GUITexture;
private var pausemenubg : GameObject;
private var boost1 : GameObject;
private var boostscript : boost;
var currentpos = new Vector3(0,0,0);
var secssincetriggered = 0.0;
var triggered = false;
var abletomove = true;

function Awake () {
	motor = GetComponent(CharacterMotor); 
	jumpbutton = GameObject.Find("jumpbutton").guiTexture;
	menubutton = GameObject.Find("menubutton").guiTexture;
	left = GameObject.Find("leftgui").guiTexture;
	right = GameObject.Find("rightgui").guiTexture;
	pausemenubg = GameObject.Find("pause menu bg");
	boost1 = GameObject.Find("boost1");
	//boostscript = boost1.GetComponent(boost);
}


function Update () {
	this.transform.position = this.transform.position + Vector3.zero;
	motor.inputJump = false;
	directionVector = new Vector3(0, 0, 0);
	
	for (var i = 0; i < Input.touchCount; ++i) {
		if(right.HitTest(Input.GetTouch(i).position) && abletomove == true) {
			directionVector = new Vector3(1, 0, 0);
		}
		else if(left.HitTest(Input.GetTouch(i).position) && abletomove == true) {
			directionVector = new Vector3(-1, 0, 0);
		}
	}
	
	if (Input.GetKey("left") && abletomove == true) {
		directionVector = new Vector3(-1, 0, 0);
	}
	else if (Input.GetKey("right") && abletomove == true) {
		directionVector = new Vector3(1, 0, 0);
	}
	

	motor.inputMoveDirection = transform.rotation * directionVector;
	
	if(Input.GetKey(KeyCode.UpArrow) && abletomove == true) {
		motor.inputJump = true;
	}
	

	for (var x = 0; x < Input.touchCount; ++x) {
		if (Input.GetTouch(x).position.x > (Screen.width * 2 / 3) && Input.GetTouch(x).position.y < (Screen.height * 2 / 3) && abletomove == true) {
			motor.inputJump = true;
		}
	}
	
	
	/*if (boostscript.boosting) {
		motor.inputJump = true;
		boostscript.boosting = false;
	}*/
	
	
	this.transform.position = this.transform.position + Vector3.zero;
}


// Require a character controller to be attached to the same game object
@script RequireComponent (CharacterMotor)
@script AddComponentMenu ("Character/FPS Input Controller")
