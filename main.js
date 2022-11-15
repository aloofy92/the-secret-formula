//Part 1

let alertForm = document.querySelector('#alertForm');
let alertInput = document.querySelector('#alertInput');

alertForm.addEventListener('submit', function(event){
event.preventDefault();
alert(alertInput.value);
alertInput.value = "";
})

//Part 2

let sandwichForm = document.querySelector('#sandwichForm');

let toppings = document.querySelectorAll('#sandwichForm .toppings');

for(let item of toppings){
    console.log(item.id);
}

sandwichForm.addEventListener('submit', function(event){
    event.preventDefault();

    let newStr = "";
    for(let i = 0; i < toppings.length; i++){
        if(toppings[i].checked === true){
            newStr += toppings[i].id;
        }
    }
    console.log(newStr);
    alert(`Your sandwich contains:${newStr} `);
})

//Part 3

