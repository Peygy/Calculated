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
    inputLine.type = 'number';
    inputLine.id = 'Line';
    inputLine.readOnly = true;
    Calc.appendChild(inputLine);

    let BackSpace = document.createElement('input');
    BackSpace.style.width = '10%';
    BackSpace.style.display = 'inline-block';
    BackSpace.type = 'button';
    BackSpace.style.height = '61px';
    BackSpace.id = 'Back';
    BackSpace.value = '<---';
    BackSpace.setAttribute("onclick", "Delete()");
    Calc.appendChild(BackSpace);

    let Cleaning = document.createElement('input');
    Cleaning.style.width = '10%';
    Cleaning.style.display = 'inline-block';
    Cleaning.type = 'button';
    Cleaning.style.height = '61px';
    Cleaning.id = 'clean';
    Cleaning.value = 'C';
    Cleaning.setAttribute("onclick", "Clean()");
    Calc.appendChild(Cleaning);



    let checking = document.createElement('label');
    checking.className = 'switch';
    checking.setAttribute("onclick", "Checking()");
    Calc.appendChild(checking);

    let checkInput = document.createElement('input');
    checkInput.type = 'checkbox';
    checkInput.id = 'checkbox';
    checkInput.setAttribute("onclick", "GetNumber(this)");
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
    one_num.setAttribute("onclick", "GetNumber(this)");
    numsActions.appendChild(one_num);

    let two_num = document.createElement('input');
    two_num.id = '2';
    two_num.type = 'button';
    two_num.value = two_num.id;
    two_num.setAttribute("onclick", "GetNumber(this)");
    numsActions.appendChild(two_num);
    
    
    let three_num = document.createElement('input');
    three_num.id = '3';
    three_num.type = 'button';
    three_num.value = three_num.id;
    three_num.setAttribute("onclick", "GetNumber(this)");
    numsActions.appendChild(three_num);

    let sum = document.createElement('input');
    sum.id = '+';
    sum.type = 'button';
    sum.value = sum.id;
    sum.setAttribute("onclick", "GetNumber(this)");
    numsActions.appendChild(sum);



    let four_num = document.createElement('input');
    four_num.id = '4';
    four_num.type = 'button';
    four_num.value = four_num.id;
    four_num.setAttribute("onclick", "GetNumber(this)");
    numsActions.appendChild(four_num);

    let five_num = document.createElement('input');
    five_num.id = '5';
    five_num.type = 'button';
    five_num.value = five_num.id;
    five_num.setAttribute("onclick", "GetNumber(this)");
    numsActions.appendChild(five_num);
    
    let six_num = document.createElement('input');
    six_num.id = '6';
    six_num.type = 'button';
    six_num.value = six_num.id;
    six_num.setAttribute("onclick", "GetNumber(this)");
    numsActions.appendChild(six_num);

    let minus = document.createElement('input');
    minus.id = '-';
    minus.type = 'button';
    minus.value = minus.id;
    minus.setAttribute("onclick", "GetNumber(this)");
    numsActions.appendChild(minus);



    let seven_num = document.createElement('input');
    seven_num.id = '7';
    seven_num.type = 'button';
    seven_num.value = seven_num.id;
    seven_num.setAttribute("onclick", "GetNumber(this)");
    numsActions.appendChild(seven_num);

    let eight_num = document.createElement('input');
    eight_num.id = '8';
    eight_num.type = 'button';
    eight_num.value = eight_num.id;
    eight_num.setAttribute("onclick", "GetNumber(this)");
    numsActions.appendChild(eight_num);
 
    let nine_num = document.createElement('input');
    nine_num.id = '9';
    nine_num.type = 'button';
    nine_num.value = nine_num.id;
    nine_num.setAttribute("onclick", "GetNumber(this)");
    numsActions.appendChild(nine_num);
    
    let multi = document.createElement('input');
    multi.id = '*';
    multi.type = 'button';
    multi.value = 'X';
    multi.setAttribute("onclick", "GetNumber(this)");
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
    zero_num.setAttribute("onclick", "GetNumber(this)");
    numsActions.appendChild(zero_num);

    let equally = document.createElement('input');
    equally.id = '=';
    equally.type = 'button';
    equally.value = equally.id;
    numsActions.appendChild(equally);

    let division = document.createElement('input');
    division.id = '/';
    division.type = 'button';
    division.value = '÷';
    division.setAttribute("onclick", "GetNumber(this)");
    numsActions.appendChild(division);
}






function Checking()
{
    if(document.getElementById('checkbox').checked)
    {
        // alert("Можно");
        document.getElementById('Line').readOnly = false;
    }
    else
    {
        // alert("Нельзя");
        document.getElementById('Line').readOnly = true;
    }
}





function GetNumber(num) // Забирает число, добавляет его в строку и в метод выполнения операций
{
    document.getElementsById('Line').value += num.value; 
}
function Delete()
{
    var line = document.getElementsById('Line').value;
    document.getElementsById('Line').value = line.substring(0, line.length - 1);
}
function Equal()
{
    var line = document.getElementsById('Line').value;
    document.getElementsById('Line').value = eval(line);
}
function Clean()
{
    document.getElementsById('Line').value = " ";
}









