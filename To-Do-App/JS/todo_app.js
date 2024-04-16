
let listItems = ["Grocery Shopping", "Car Maintenance", "Yard Work"]

function ShoppingRemoved() {
    var removeditem = listItems.splice(0, 1)
    //console.log(removeditem);
    document.getElementById("grocery_shopping").innerHTML = "";
    document.getElementById("completed_tasks").innerHTML = removeditem;
}

function MaintenanceRemoved() {
    var removeditem = listItems.splice(0, 1)
    //console.log(removeditem);
    document.getElementById("car_maintenance").innerHTML = "";
    document.getElementById("completed_tasks").innerHTML = removeditem;
}

function YardWorkRemoved() {
    var removeditem = listItems.splice(0, 2)
    //console.log(removeditem);
    document.getElementById("yard_work").innerHTML = "";
    document.getElementById("completed_tasks").innerHTML = removeditem;
}


function myfunction() {
    document.getElementById("completed").style.color = "red";
}






/*document.getElementById("list_item1").addEventListener("click", removed())

function removed() {
     while (listItems.length) {
        let removedItem = listItems.splice(0);
        console.log(removedItem);

        //document.getElementById("completed_task").innerHTML = ;
     }
    
    }

function btnClick1() {
    document.getElementById("grocery_shopping").innerHTML = "";
}

document.getElementById("list_item2").addEventListener("click", btnClick2)
function btnClick2() {
    document.getElementById("car_maintenance").innerHTML = "";
}
*/