var target : Transform;
var distance = 56.8065;
var height =0.0;
var damping = 5.0;
var smoothRotation = false;
var rotationDamping = 0.0;

function Start () {
	target = GameObject.Find("Player").transform;
}

function Update () {
	var wantedPosition = target.TransformPoint(0, height, -distance);
	transform.position = Vector3.Lerp (transform.position, wantedPosition, Time.deltaTime * damping);

	if (smoothRotation) {
		var wantedRotation = Quaternion.LookRotation(target.position - transform.position, target.up);
		transform.rotation = Quaternion.Slerp (transform.rotation, wantedRotation, Time.deltaTime * rotationDamping);
	}

	else transform.LookAt (target, target.up);
}