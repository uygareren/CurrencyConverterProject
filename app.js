const select = document.querySelectorAll(".currency");
const input = document.querySelector("#input");
const result = document.getElementById("result")
const button = document.getElementById("button");



fetch("https://api.frankfurter.app/currencies")
.then(res => res.json())
.then(res => currencyOptions(res));


function currencyOptions(res){
  
    let currency = Object.entries(res);

    for(let i=0; i<currency.length; i++){

        let option = `<option value=${currency[i][0]}>${currency[i][0]}</option>`

        select[0].innerHTML += option;
        select[1].innerHTML += option;
    }

}

button.addEventListener("click", ()=>{
    let selectValue1 = select[0].value
    let selectValue2 = select[1].value
    let inputValue = input.value
    

    if(selectValue1 === selectValue2){
        alert("You must choose two different currencies");
    }else{
        converter(selectValue1, selectValue2, inputValue)

    }
});

function converter(selectValue1, selectValue2, inputValue){
    
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputValue}&from=${selectValue1}&to=${selectValue2}`)
    .then(resp => resp.json())
    .then((data) => {
        result.value = Object.values(data.rates)[0]
        
    });
}


