#pragma strict
import UnityEngine.UI;


var canvas : Canvas;

var invMenu : GameObject;

var invButton : GameObject;


function OpenInventory(p : Player)
{
    var inv : Inventory = p.inventory;
    var toDisplay : List.<Item> = new List.<Item>();

    for(var g : GameObject in inv.itemsList)
    {
        toDisplay.Add(g.GetComponent(Item));
    }

    var menu = Instantiate(invMenu, canvas.transform.position, canvas.transform.rotation); 
    var mRT : RectTransform = menu.GetComponent(RectTransform);  
    menu.transform.SetParent(canvas.transform);
    Debug.Log(toDisplay.Count-1);

    if(toDisplay.Count >=1)
    {
        mRT.rect.height = toDisplay.Count * invButton.GetComponent(RectTransform).rect.height + (5 * toDisplay.Count-1);
        for(var i : Item in toDisplay)
        {
            var but : GameObject = Instantiate(invButton, menu.transform.position, menu.transform.rotation);
            var butB : Button = but.GetComponent(Button);
            var butT : Text = but.GetComponentInChildren(Text);
            var butRT : RectTransform = but.GetComponent(RectTransform);

            butT.text = i.itemName;
            but.transform.SetParent(menu.transform);
            butRT.localPosition.y = -toDisplay.IndexOf(i) * (invButton.GetComponent(RectTransform).rect.height + 5);
        }
    }
}