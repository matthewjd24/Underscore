//vars for the whole sheet
var colCount	: int =  4;
var rowCount	: int =  4;
 
//vars for animation
var rowNumber : int =  0;
var colNumber : int =  0;
var totalCells : int =  4;
var fps	 : int = 10;
var offset : Vector2;
var x : float;
private var left : GUITexture;
private var right : GUITexture;



function Start () {
	x = transform.localScale.x;
	left = GameObject.Find("leftgui").guiTexture;
	right = GameObject.Find("rightgui").guiTexture;
}


function Update () {
	rowNumber = 0;
	totalCells = 1;
	
	for (var i = 0; i < Input.touchCount; ++i) {
		if(right.HitTest(Input.GetTouch(i).position)) {
			rowNumber = 1;
			totalCells = 4;
			transform.localScale.x = x;
		}
		else if(left.HitTest(Input.GetTouch(i).position)) {
			rowNumber = 1;
			totalCells = 4;
			transform.localScale.x = -x;
		}
	}
	
	if (Input.GetKey("right")) {
		rowNumber = 1;
		totalCells = 4;
		transform.localScale.x = x;
	}
	else if (Input.GetKey("left")) {
		rowNumber = 1;
		totalCells = 4;
		transform.localScale.x = -x;
	}
	SetSpriteAnimation(colCount,rowCount,rowNumber,colNumber,totalCells,fps);  
}
 
//SetSpriteAnimation
function SetSpriteAnimation(colCount : int,rowCount : int,rowNumber : int,colNumber : int,totalCells : int,fps : int){
 
	// Calculate index
	var index : int = Time.time * fps;
	// Repeat when exhausting all cells
	index = index % totalCells;
 
	// Size of every cell
	var size = Vector2 (1.0 / colCount, 1.0 / rowCount);
 
	// split into horizontal and vertical index
	var uIndex = index % colCount;
	var vIndex = index / colCount;
 
	// build offset
	// v coordinate is the bottom of the image in opengl so we need to invert.
	offset = Vector2 ((uIndex+colNumber) * size.x, (1.0 - size.y) - (vIndex+rowNumber) * size.y);
 
	renderer.material.SetTextureOffset ("_MainTex", offset);
	renderer.material.SetTextureScale  ("_MainTex", size);
}