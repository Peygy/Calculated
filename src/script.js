var sumMain = 0;
var minusMain = 0;
var multiMain = 0;
var divisionMain = 0;
var outted = 0; 

window.onload = function() 
{
    // let darkswitch = document.createElement('label');
    // darkswitch.className = 'switch';
    // document.body.appendChild(darkswitch);

    // let darkDark = document.createElement('input');
    // darkDark.type = 'checkbox';
    // darkDark.id = 'dark';
    // darkDark.addEventListener("change", DarkMode, false);
    // darkswitch.appendChild(darkDark);

    // let darkSpan = document.createElement('span');
    // darkSpan.className = 'slider';
    // darkswitch.appendChild(darkSpan);
    


    let Calc = document.createElement('div');
    Calc.style.width = '600px';
    Calc.style.height = '600px';
    document.body.appendChild(Calc);

    let inputLine = document.createElement('input');
    inputLine.style.width = '80%';
    inputLine.style.display = 'inline-block';
    inputLine.style.height = '60px';
    inputLine.style.boxSizing = 'border-box';
    inputLine.id = 'Line';
    inputLine.addEventListener("", Output, false);
    Calc.appendChild(inputLine);



    let checking = document.createElement('label');
    checking.className = 'switch';
    Calc.appendChild(checking);

    let checkInput = document.createElement('input');
    checkInput.type = 'checkbox';
    checkInput.id = 'checkbox';
    checkInput.addEventListener("change", Checking, false);
    checking.appendChild(checkInput);

    let checkSpan = document.createElement('span');
    checkSpan.className = 'slider';
    checking.appendChild(checkSpan);



    let numsActions = document.createElement('form')
    numsActions.style.marginTop = '30px';
    numsActions.style.display = 'grid';
    numsActions.style.gridTemplateColumns = 'repeat(4, 25%)';
    numsActions.style.gridTemplateRows = 'repeat(4, 25%)';
    Calc.appendChild(numsActions);


    let one_num = document.createElement('input');
    one_num.id = '1';
    one_num.type = 'button';
    one_num.value = one_num.id;
    one_num.classList.add("numbers");
    one_num.addEventListener("click", GetNumber, false);
    numsActions.appendChild(one_num);

    let two_num = document.createElement('input');
    two_num.id = '2';
    two_num.type = 'button';
    two_num.value = two_num.id;
    two_num.classList.add("numbers");
    two_num.addEventListener("click", GetNumber, false);
    numsActions.appendChild(two_num);
    
    
    let three_num = document.createElement('input');
    three_num.id = '3';
    three_num.type = 'button';
    three_num.value = three_num.id;
    three_num.classList.add("numbers");
    three_num.addEventListener("click", GetNumber, false);
    numsActions.appendChild(three_num);

    let sum = document.createElement('input');
    sum.id = '+';
    sum.type = 'button';
    sum.value = sum.id;
    sum.classList.add("actions");
    numsActions.appendChild(sum);



    let four_num = document.createElement('input');
    four_num.id = '4';
    four_num.type = 'button';
    four_num.value = four_num.id;
    four_num.classList.add("numbers");
    four_num.addEventListener("click", GetNumber, false);
    numsActions.appendChild(four_num);

    let five_num = document.createElement('input');
    five_num.id = '5';
    five_num.type = 'button';
    five_num.value = five_num.id;
    five_num.classList.add("numbers");
    five_num.addEventListener("click", GetNumber, false);
    numsActions.appendChild(five_num);
    
    let six_num = document.createElement('input');
    six_num.id = '6';
    six_num.type = 'button';
    six_num.value = six_num.id;
    six_num.classList.add("numbers");
    six_num.addEventListener("click", GetNumber, false);
    numsActions.appendChild(six_num);

    let minus = document.createElement('input');
    minus.id = '-';
    minus.type = 'button';
    minus.value = minus.id;
    minus.classList.add("actions");
    numsActions.appendChild(minus);



    let seven_num = document.createElement('input');
    seven_num.id = '7';
    seven_num.type = 'button';
    seven_num.value = seven_num.id;
    seven_num.classList.add("numbers");
    seven_num.addEventListener("click", GetNumber, false);
    numsActions.appendChild(seven_num);

    let eight_num = document.createElement('input');
    eight_num.id = '8';
    eight_num.type = 'button';
    eight_num.value = eight_num.id;
    eight_num.classList.add("numbers");
    eight_num.addEventListener("click", GetNumber, false);
    numsActions.appendChild(eight_num);
 
    let nine_num = document.createElement('input');
    nine_num.id = '9';
    nine_num.type = 'button';
    nine_num.value = nine_num.id;
    nine_num.classList.add("numbers");
    nine_num.addEventListener("click", GetNumber, false);
    numsActions.appendChild(nine_num);
    
    let multi = document.createElement('input');
    multi.id = 'X';
    multi.type = 'button';
    multi.value = multi.id;
    multi.classList.add("actions");
    numsActions.appendChild(multi);




    let dot = document.createElement('input');
    dot.id = '.';
    dot.type = 'button';
    dot.value = dot.id;
    dot.classList.add("actions");
    numsActions.appendChild(dot);

    let zero_num = document.createElement('input');
    zero_num.id = '0';
    zero_num.type = 'button';
    zero_num.value = zero_num.id;
    zero_num.classList.add("numbers");
    zero_num.addEventListener("click", GetNumber, false);
    numsActions.appendChild(zero_num);

    let division = document.createElement('input');
    division.id = '/';
    division.type = 'button';
    division.value = division.id;
    division.classList.add("actions");
    numsActions.appendChild(division);

    let equally = document.createElement('input');
    equally.id = '=';
    equally.type = 'button';
    equally.value = equally.id;
    equally.classList.add("total");
    numsActions.appendChild(equally);
}






function Checking()
{
    if(document.getElementById('checkbox').checked)
    {
        alert("Можно");
        document.getElementById('Line').readOnly = false;
    }
    else
    {
        alert("Нельзя");
        document.getElementById('Line').readOnly = true;
    }
}





function GetNumber(event) // Забирает число, добавляет его в строку и в метод выполнения операций
{
    return Number (document.getElementsByClassName('numbers').innerHTML += event.value);    
}
function GetActions(event) // Забирает оперцаю(действие) и добавляет его в строку... Исп. switch производим оперцаю и записываем результат в объект, который идёт в метод по ввыводу в строку
{
    return document.getElementsByClassName('actions').innerHTML += event.value;
}
function SetAction()
{
    switch(GetActions)
    {
        case '+':
            sumMain = sumMain + GetNumber;
            break;
        case '-':
            minusMain = minusMain + GetNumber;
            break;
        case '*':
            multiMain = multiMain + GetNumber;
            break;
        case '/':
            divisonMain = divisionMain + GetNumber;
            break;
    }
    return outted = sumMain + minusMain + multiMain + divisionMain;
}
function Output()
{
    document.getElementById('Line').value = SetAction;
}




// function DarkMode()
// {
//     if(document.getElementById('dark').checked)
//     {
//         document.body.style.backgroundColor = '#474747';
//     }
//     else
//     {
//         document.body.style.backgroundColor = 'whitesmoke'
//     }
// }




