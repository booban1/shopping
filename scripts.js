var item = document.getElementById("item");
var closeBtn = document.getElementById("closeBtn");
var itemBody = document.getElementById("itemView");

var itemObj = {
        itemName: "Luciano Shoel",
        itemType: "Gucini",
        itemPrice: "1490"
    };
    
var itemName = document.getElementById("item-name").innerHTML = itemObj.itemName;
var itemType = document.getElementById("item-type").innerHTML = itemObj.itemType;
var itemPrice = document.getElementById("item-price").innerHTML = "Ksh. " + itemObj.itemPrice;

item.addEventListener( 'click', () => {
    itemBody.style.display = 'block';
    console.log("i am running");
});

closeBtn.addEventListener( 'click', () => {
    itemBody.style.display = 'none';
    console.log("i am running");
});


itemBody.addEventListener( 'click', () => {
    itemBody.style.display = 'none';
});


// gets sample from here
// https://www.home24.de/produkt/sessel-garbo-i-webstoff-stoff-saia-hellgrau-eiche-dunkel