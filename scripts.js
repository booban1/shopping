var item = document.getElementById("item");
var closeBtn = document.getElementById("closeBtn");
var itemBody = document.getElementById("itemView");

item.addEventListener( 'click', () => {
    itemBody.style.display = 'block';
    console.log("i am running");
});

closeBtn.addEventListener( 'click', () => {
    itemBody.style.display = 'none';
    console.log("i am running");
});

// itemBody.addEventListener( 'click', () => {
//     itemBody.style.display = 'none';
// });

