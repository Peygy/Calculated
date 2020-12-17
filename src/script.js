window.onload = function() 
{
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
    one_num.addEventListener("click", GetNumberOne, false);
    numsActions.appendChild(one_num);

    let two_num = document.createElement('input');
    two_num.id = '2';
    two_num.type = 'button';
    two_num.value = two_num.id;
    two_num.addEventListener("click", GetNumberTwo, false);
    numsActions.appendChild(two_num);
    
    
    let three_num = document.createElement('input');
    three_num.id = '3';
    three_num.type = 'button';
    three_num.value = three_num.id;
    three_num.addEventListener("click", GetNumberThree, false);
    numsActions.appendChild(three_num);

    let sum = document.createElement('input');
    sum.id = '+';
    sum.type = 'button';
    sum.value = sum.id;
    numsActions.appendChild(sum);



    let four_num = document.createElement('input');
    four_num.id = '4';
    four_num.type = 'button';
    four_num.value = four_num.id;
    four_num.addEventListener("click", GetNumberFour, false);
    numsActions.appendChild(four_num);

    let five_num = document.createElement('input');
    five_num.id = '5';
    five_num.type = 'button';
    five_num.value = five_num.id;
    five_num.addEventListener("click", GetNumberFive, false);
    numsActions.appendChild(five_num);
    
    let six_num = document.createElement('input');
    six_num.id = '6';
    six_num.type = 'button';
    six_num.value = six_num.id;
    six_num.addEventListener("click", GetNumberSix, false);
    numsActions.appendChild(six_num);

    let minus = document.createElement('input');
    minus.id = '-';
    minus.type = 'button';
    minus.value = minus.id;
    numsActions.appendChild(minus);



    let seven_num = document.createElement('input');
    seven_num.id = '7';
    seven_num.type = 'button';
    seven_num.value = seven_num.id;
    seven_num.addEventListener("click", GetNumberSeven, false);
    numsActions.appendChild(seven_num);

    let eight_num = document.createElement('input');
    eight_num.id = '8';
    eight_num.type = 'button';
    eight_num.value = eight_num.id;
    eight_num.addEventListener("click", GetNumberEight, false);
    numsActions.appendChild(eight_num);
 
    let nine_num = document.createElement('input');
    nine_num.id = '9';
    nine_num.type = 'button';
    nine_num.value = nine_num.id;
    nine_num.addEventListener("click", GetNumberNine, false);
    numsActions.appendChild(nine_num);
    
    let multi = document.createElement('input');
    multi.id = 'X';
    multi.type = 'button';
    multi.value = multi.id;
    numsActions.appendChild(multi);




    let dot = document.createElement('input');
    dot.id = '.';
    dot.type = 'button';
    dot.value = dot.id;
    numsActions.appendChild(dot);

    let zero_num = document.createElement('input');
    zero_num.id = '0';
    zero_num.type = 'button';
    zero_num.value = zero_num.id;
    zero_num.addEventListener("click", GetNumber, false);
    numsActions.appendChild(zero_num);

    let division = document.createElement('input');
    division.id = '/';
    division.type = 'button';
    division.value = division.id;
    numsActions.appendChild(division);

    let equally = document.createElement('input');
    equally.id = '=';
    equally.type = 'button';
    equally.value = equally.id;
    numsActions.appendChild(equally);
}



function GetNumberZero() 
{
    return document.getElementById("0"); 
}
function GetNumberOne() 
{
    return document.getElementById("1");
}
function GetNumberTwo() 
{
    return document.getElementById("2");
}
function GetNumberThree() 
{
    return document.getElementById("3");
}
function GetNumberFour() 
{
    return document.getElementById("4");
}
function GetNumberFive() 
{
    return document.getElementById("5");
}
function GetNumberSix() 
{
    return document.getElementById("6");
}
function GetNumberSeven() 
{
    return document.getElementById("7");
}
function GetNumberEight() 
{
    return document.getElementById("8");
}
function GetNumberNine() 
{
    return document.getElementById("9");
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







function GetNumber() // Забирает число, добавляет его в строку и в метод выполнения операций
{
    
}
function GetActions() // Забирает оперцаю(действие) и добавляет его в строку... Исп. switch производим оперцаю и записываем результат в объект, который идёт в метод по ввыводу в строку
{
    // switch
}
function Output()
{

}
