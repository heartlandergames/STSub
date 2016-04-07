#pragma strict

var id : String;

var itemName : String;

var type : itemType;

var size : Vector3;

var weight : float;

var owner : Player;

var quantity : float;

var maxQuan : float;

var quality : float;

var durability : float;

var maxDurability :float;

var lastCheck : float;


enum itemType
{
    Connector,
    Consumable,
    Construction,
    Appliance,
    Tool,
    Container,
    Clothing,

    }

function Start () {

}

function Update () {

}

function Item()
{
    itemName = "RandomizedItem";
    type = Random.Range(0,6);
    weight = Random.Range(.1, 50);
    size = Vector3(Random.Range(.1,10),Random.Range(.1,10),Random.Range(.1,10));
    maxQuan = 100;
    quantity = Random.Range(0,maxQuan);    
    quality = Random.Range(0,100);
    durability = Random.Range(0,100);
    maxDurability = 100;
    lastCheck = Time.time;
}

function Item(nam : String, typ : int, wei : float, siz : Vector3, quan : float, mQua : float, qual : float, dur : float, mDur : float)
    {
        itemName = nam;
        type = typ;
        weight = wei;
        size = siz;
        quantity = quan;
        maxQuan = mQua;
        quality = qual;
        durability = dur;
        maxDurability = mDur;
        lastCheck = Time.time;
    }