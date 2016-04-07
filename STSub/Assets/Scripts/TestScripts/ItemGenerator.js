#pragma strict

var box : GameObject;

function Start () {

}

function Update () {
    SpawnItem();
}

function SpawnItem()
{
    var newItem : GameObject = Instantiate(box, transform.position, transform.rotation);
    newItem.AddComponent(Item);
    
}