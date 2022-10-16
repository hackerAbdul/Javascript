//Loop through a list and if item is not in the list then add the item

let basket = ["milk","bread","tomatoes","lettuce","icecream"]


for(let index=0; index<basket.length; index++){
    let newList = []
    let item = "fruit"
    //console.log(index)
    console.log(basket[index])

    if(!basket.includes(item)){
        basket.push(item)
    }

    if(!newList.includes(item)){
        newList.push(item)
    }else if(!newList.includes(basket[item])){
        newList.push(basket[index])
    }
    console.log(newList)
    
}

//console.log(basket)






// let list = ["eyeshadow", "mascara", "lipgloss"];
// let index = 0;
// let makeup = "foundation";

// while (index < list.length){

    

//     if (!list.includes(makeup)) {
//         list.push(makeup);
//     }
//     index++;
//     console.log(list[index]);
    
// }

