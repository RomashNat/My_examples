function loopBegin()
            {
               
                let string = document.getElementById("str1").value;
                let countA = 0;
                let countB = 0;
                let countC = 0;
                let countPunct = 0;
                let punctSymbols = ".,!?:;"

                for(let i = 0; i < string.length; i++) 
                {
                    if
                    
                    (
                       string[i] == "а" || string[i] == "А" ||
                       string[i] == "о" || string[i] == "О" || 
                       string[i] == "и" || string[i] == "И" || 
                       string[i] == "е" || string[i] == "Е" || 
                       string[i] == "ё" || string[i] == "Ё" || 
                       string[i] == "э" || string[i] == "Э" || 
                       string[i] == "ы" || string[i] == "Ы" || 
                       string[i] == "у" || string[i] == "У" || 
                       string[i] == "ю" || string[i] == "Ю" || 
                       string[i] == "я" || string[i] == "Я"
                    
                    ) // Берем символы из строки по индексам.
                        countA++;
                    else if(string[i] == "ь" || string[i] == "Ь" || string[i] == "ъ" || string[i] == "Ъ")
                        countB++;
                    else if(punctSymbols.includes(string[i]))
                        countPunct++;
                    else if(string[i] != " " && string[i] != "." && string[i] != "," && string[i] != "!" && string[i] != "?")
                        countC++;
                }
                console.log(countPunct);
                let result = `Итого в строке: гласных: ${countA} букв, согласных: ${countC} букв, Ь и Ъ: ${countB} символов`; document.getElementById('res2').innerText = result;

               
}





function Hidden() {

    let name = document.getElementById("test")
    name.classList.add('btn_active');

}
function UnHidden() {

    let name = document.getElementById("test")
    name.classList.remove('btn_active');

}

