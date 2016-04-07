#pragma strict

var moveSpeed : float = 5;

var lookSpeed :float = 5;

var moveLock : boolean = false;

var lookLock : boolean = false;

var yInvertLook : boolean = true;

var cameraHolder : Transform;

var maxY : float = 60;

var minY :float = 60;


function Start () {

}

function Update () {
    MoveKeyboard();
    LookMouse();
    ClampLook();
}

function MoveKeyboard ()
{
    if(moveLock)
    {
        return;
    }

    if(Input.GetButton("W"))
    {
        transform.Translate(transform.forward * Time.deltaTime *  moveSpeed);
    }
    if(Input.GetButton("S"))
    {
        transform.Translate(-transform.forward * Time.deltaTime * moveSpeed);
    }
    if(Input.GetButton("D"))
    {
        transform.Translate(transform.right * Time.deltaTime * (moveSpeed * .75));
    }
    if(Input.GetButton("A"))
    {
        transform.Translate(-transform.right * Time.deltaTime * (moveSpeed * .75));
    }
}

function LookMouse()
{
    if(lookLock)
    {
        return;
    }

    var rotateY : float = Mathf.Clamp(Input.GetAxis("Mouse Y"), minY, maxY);

    if(Input.GetAxis("Mouse X"))
    {
        transform.Rotate(Vector3(0,Input.GetAxis("Mouse X") * lookSpeed, 0));
    }
    if(Input.GetAxis("Mouse Y"))
    {
        if(yInvertLook)
            cameraHolder.Rotate(Vector3(Input.GetAxis("Mouse Y") * lookSpeed, 0,0));
        else if(!yInvertLook)
            cameraHolder.Rotate(Vector3(-Input.GetAxis("Mouse Y") * lookSpeed, 0, 0));
    }
    
}

function ClampLook()
{
   
    if(cameraHolder.rotation.x >= minY)
    {
        cameraHolder.rotation.x = minY;
    }
}