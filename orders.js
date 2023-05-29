console.clear()
let hp1 = document.getElementById("hp1")
let hp2 = document.getElementById("hp2")
let hp3 = document.getElementById("hp3")
let hp4 = document.getElementById("hp4")
let hp5 = document.getElementById("hp5")
let hp6 = document.getElementById("hp6")
let hp7 = document.getElementById("hp7")
let hp8 = document.getElementById("hp8")

let total = 0;

let hp1count = 0;
hp1.addEventListener('click', ()=>{
hp1count++
total += 18;
console.log(total)
document.getElementById("num").innerHTML = "$" + total + ".00"
document.getElementById("hp1").innerHTML = "Remove from Cart"
document.getElementById("hp1").style.backgroundColor = "red"

if(hp1count % 2 == 0){
    total -=36;
    console.log(total)
    document.getElementById("num").innerHTML = "$" + total + ".00"
    document.getElementById("hp1").innerHTML = "Add to Cart"
    document.getElementById("hp1").style.backgroundColor = "black"
}
})

let hp2count = 0;
hp2.addEventListener('click', ()=>{
hp2count++
total += 200;
console.log(total);
document.getElementById("num").innerHTML = "$" + total + ".00"
document.getElementById("hp2").innerHTML = "Remove from Cart"
document.getElementById("hp2").style.backgroundColor = "red"

if(hp2count % 2 == 0){
    total -= 400;
    console.log(total)
    document.getElementById("num").innerHTML = "$" + total + ".00"
    document.getElementById("hp2").innerHTML = "Add to Cart"
    document.getElementById("hp2").style.backgroundColor = "black"
}
})

let hp3count = 0;
hp3.addEventListener('click', ()=>{
hp3count++
total += 10;
console.log(total);
document.getElementById("num").innerHTML = "$" + total + ".00"
document.getElementById("hp3").innerHTML = "Remove from Cart"
document.getElementById("hp3").style.backgroundColor = "red"

if(hp3count % 2 == 0){
total -= 20;
console.log(total)
document.getElementById("num").innerHTML = "$" + total + ".00"
document.getElementById("hp3").innerHTML = "Add to Cart"
document.getElementById("hp3").style.backgroundColor = "black"
}
})

let hp4count = 0;
hp4.addEventListener('click', ()=>{
    hp4count++
    total += 1300;
    console.log(total);
    document.getElementById("num").innerHTML = "$" + total + ".00"
    document.getElementById("hp4").innerHTML = "Remove from Cart"
document.getElementById("hp4").style.backgroundColor = "red"
    
    if(hp4count % 2 == 0){
    total -= 2600;
    console.log(total)
    document.getElementById("num").innerHTML = "$" + total + ".00"
    document.getElementById("hp4").innerHTML = "Add to Cart"
    document.getElementById("hp4").style.backgroundColor = "black"
    }
})

let hp5count = 0;
hp5.addEventListener('click', ()=>{
    hp5count++
    total += 17;
    console.log(total);
    document.getElementById("num").innerHTML = "$" + total + ".00"
    document.getElementById("hp5").innerHTML = "Remove from Cart"
document.getElementById("hp5").style.backgroundColor = "red"
    
    if(hp5count % 2 == 0){
    total -= 34;
    console.log(total)
    document.getElementById("num").innerHTML = "$" + total + ".00"
    document.getElementById("hp5").innerHTML = "Add to Cart"
    document.getElementById("hp5").style.backgroundColor = "black"
    }
})

let hp6count = 0;
hp6.addEventListener('click', ()=>{
    hp6count++
    total += 7;
    console.log(total);
    document.getElementById("num").innerHTML = "$" + total + ".00"
    document.getElementById("hp6").innerHTML = "Remove from Cart"
document.getElementById("hp6").style.backgroundColor = "red"
    
    if(hp6count % 2 == 0){
    total -= 14;
    console.log(total)
    document.getElementById("num").innerHTML = "$" + total + ".00"
    document.getElementById("hp6").innerHTML = "Add to Cart"
    document.getElementById("hp6").style.backgroundColor = "black"
    }
})

let hp7count = 0;
hp7.addEventListener('click', ()=>{
    hp7count++
    total += 650;
    console.log(total);
    document.getElementById("num").innerHTML = "$" + total + ".00"
    document.getElementById("hp7").innerHTML = "Remove from Cart"
document.getElementById("hp7").style.backgroundColor = "red"
    
    if(hp7count % 2 == 0){
    total -= 1300;
    console.log(total)
    document.getElementById("num").innerHTML = "$" + total + ".00"
    document.getElementById("hp7").innerHTML = "Add to Cart"
    document.getElementById("hp7").style.backgroundColor = "black"
    }
})

let hp8count = 0;
hp8.addEventListener('click', ()=>{
    hp8count++
    total += 15;
    console.log(total);
    document.getElementById("num").innerHTML = "$" + total + ".00"
    document.getElementById("hp8").innerHTML = "Remove from Cart"
document.getElementById("hp8").style.backgroundColor = "red"

    
    if(hp8count % 2 == 0){
    total -= 30;
    console.log(total)
    document.getElementById("num").innerHTML = "$" + total + ".00"
    document.getElementById("hp8").innerHTML = "Add to Cart"
    document.getElementById("hp8").style.backgroundColor = "black"
    }
})


