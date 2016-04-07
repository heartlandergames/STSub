#pragma strict

var box : GameObject;



|

function Start () {

}

function Update () {

}

function SpawnItem()
{
    var newItem : GameObject = Instantiate(box, transform.position, transform.rotation);
    newItem.AddComponent(new Item());
}
