#pragma strict

function OnMouseDown () {
	this.transform.localScale.x = this.transform.localScale.x * 1.2;
	this.transform.localScale.z = this.transform.localScale.z * 1.2;
}


function OnMouseUp () {
	this.transform.localScale.x = this.transform.localScale.x * .8333;
	this.transform.localScale.z = this.transform.localScale.z * .8333;
}