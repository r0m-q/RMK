function valid(form){
    var fail = false;
    var name = form.name.value;
    var Email = form.Email.value;
    var adr_pateern = /[0-9a-z_-]+@[0-9a-z_-]+.[a-z]{2,5}/i;
    if( form.id =='form1')
    {
        if(adr_pateern.test(Email)==false)
            fail = "Вы ввели неверный Email";
            else if(Password == "")
                fail = "Вы не ввели пароль";
            if(fail)
                alert(fail);
            else{
                focus('block');
                show('none');
                shadow('none');
            }
    }
    else{
        var Password = form.Password.value;
        var RePassword = form.RePassword.value;
        var gender = form.gender.value;
        if(name == "" || name == " ")
            fail = "Вы не ввели своё имя";
        else if(adr_pateern.test(Email)==false)
            fail = "Вы ввели неверный Email";
        else if(Password == "")
            fail = "Вы не ввели пароль";
        else if(Password != RePassword)
            fail = "Пароли не совпадают";
        else if(gender == "")
            fail = "Укажите пол";
        if(fail)
            alert(fail);
        else{
            focus('block');
            show('none');
            shadow('none');
        }
    }
}
function show1(state){
    document.getElementById('wind1').style.display = state;
    document.getElementById('form1').style.display = state;
    document.getElementById('gray').style.display = state;
}
function show2(state){
    document.getElementById('wind2').style.display = state;
    document.getElementById('form2').style.display = state;
    document.getElementById('gray').style.display = state;
}
function show(state){
    document.getElementById('wind2').style.display = state;
    document.getElementById('wind1').style.display = state;
    document.getElementById('form1').style.display = state;
    document.getElementById('form2').style.display = state;
    document.getElementById('gray').style.display = state;
}
function shadow(state){
    document.getElementById('shadowContent').style.display = state;
}
function focus(state){
    document.getElementById('iframe').style.display = state; 
}