// Using JavaScript, complete the following items:

// Update the 'Apples' item to say 'Granny Smith Apples'
// Remove 'Oat Milk' from the list
// Add an item 'Kombucha'
// Clear the list and programmatically add items from the array ['protein bars', 'almonds', 'peanut butter']
// Add the class 'important' to the almonds item.


// Update the 'Apples' item to say 'Granny Smith Apples'

let shoppingList = document.querySelector('#list').children;
shoppingList[1].innerHTML = 'Granny Smith Apples'
console.log(shoppingList[1].innerHTML);


// Remove 'Oat Milk' from the list
shoppingList[3].remove();
//console.log(shoppingList[3]);  // returns undefined since it was removed and there is not an element in the index 3.

// Add an item 'Kombucha'
let newLI = document.createElement('li');
newLI.innerHTML = "Kombucha";

const shoppingList2 = document.querySelector('ul')
shoppingList2.appendChild(newLI);

// Clear the list and programmatically add items from the array ['protein bars', 'almonds', 'peanut butter']
let additionalItems = ['protein bars', 'almonds', 'peanut butter'];

shoppingList = document.getElementById("list");
shoppingList.innerHTML = ""; // Clears list


for (let i = 0; i < additionalItems.length; i++) { // adds items in the array
    const li = document.createElement("li");
    li.textContent = additionalItems[i];
    shoppingList.appendChild(li);
  }


// Add the class 'important' to the almonds item.

shoppingList = document.querySelector('#list').children;
shoppingList[1].className = "important";



