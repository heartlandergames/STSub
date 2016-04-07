#pragma strict
import System.Collections.Generic;

var itemsList : List.<Item> = new List.<Item>();

var weight : float = 0;

var maxWeight : float = 100;

var size : float = 0;

var maxSize : float = 100;



function Start () {

}

function Update () {

}



function Add(g : GameObject)
{
    var toAdd : Item = g.GetComponent(Item); 
    for(var i : Item in itemsList)
    {
        if(i.itemName == toAdd.itemName)
        {
            if(i.quantity < i.maxQuan)
            {
                i.quantity += toAdd.quantity;

                if(i.quantity > i.maxQuan)
                {
                    var left : float = i.quantity - i.maxQuan;
                    
                    var newItem : Item = new Item();
                    newItem = toAdd;
                    newItem.quantity = left;
                    itemsList.Add(newItem);
                }   
            }
        return;
        }
        
    }
        itemsList.Add(toAdd);
        
}

function Remove(g: GameObject)
{

}

function Equip (g:GameObject)
{

}

function Split()
{

}

function Sort()
{

}

function Search()
{

}


function Recalculate()
{
    var w : float;
    var s : float;

    for(var i : Item in itemsList)
    {
        w += i.weight;
        s += i.size.y * i.size.x * i.size.z;
    }

weight = w;
size =s;
}