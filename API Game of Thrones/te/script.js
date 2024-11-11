function takeInfo()
{
    const URL_API = "https://thronesapi.com/api/v2/Characters";
    const COUNT_COLUMN = 4;
    let responce = $.getJSON(URL_API, (data) =>{
        console.log(data);
        let N = data.length/COUNT_COLUMN;
        for(let j = 0; j < N; j++)
        {
            // row
            let row = document.createElement("div");
            $(row).addClass("row mt-5 justify-content-around");
            document.body.getElementsByClassName("container")[0].appendChild(row);

            for (let i = 0; i < COUNT_COLUMN; i++)
            {
                if(typeof(data[j * 4 + i]) == "undefined")  break; // Если информации нет, значит мы прошли все объекты API
                // card
                let card = document.createElement("div"); 
                $(card).addClass("card"); // add css class for element
                card.style.width = "18rem"; // add style property width
                row.appendChild(card); // add element like child for element row
               // imageUrl
                if (typeof(data[j * 4 + i].imageUrl) != undefined && data[j * 4 + i].imageUrl != "")
                {
                    let imgElement = document.createElement("img");
                    $(imgElement).addClass("card-img-top");
                    card.appendChild(imgElement);
                    imgElement.setAttribute("src", data[j * 4 + i].imageUrl);
                }
                // cardBody
                let cardBody = document.createElement("div");
                $(cardBody).addClass("card-body");
                card.appendChild(cardBody);
                // fullName
                let cardTitle = document.createElement("h5");
                $(cardTitle).addClass("card-title");
                cardBody.appendChild(cardTitle);
                cardTitle.innerHTML = data[j * 4 + i].fullName; 
                // family
                let cardSubTitle = document.createElement("h6");
                $(cardSubTitle).addClass("card-subtitle");
                cardBody.appendChild(cardSubTitle);
                cardSubTitle.innerHTML = data[j * 4 + i].family;

                // Title1 
                let cardSubTitle1 = document.createElement("h6");
                $(cardSubTitle1).addClass("card-subtitle1");
                cardBody.appendChild(cardSubTitle1);
                cardSubTitle1.innerHTML = data[j * 4 + i].title;
       
            }
        }
    });
}

//document.onclick = function(event)
//{
    //  console.log(event);
    
 //       console.log(event.target.tagName);

//     if (event.target.tagName == 'BUTTON'){
//        event.target.classList.add('btn_active');
//            document.getElementById("test").classList.add('btn_active')
//        }
//    }

function Hidden() {

    let name = document.getElementById("test")
    name.classList.add('btn_active');

}
function UnHidden() {

    let name = document.getElementById("test")
    name.classList.remove('btn_active');

}

function f_search() {
    let string = document.getElementById("str1").value.toLowerCase();
    let massive = document.body.getElementsByClassName("card");
    if (string === "")
        for (let card of massive)
        {
            if (card.classList.contains('not_visible'))
                card.classList.remove('not_visible');
        }
    else
    {
        for (let card of massive)
        {
            let fullName = card.querySelector('.card-title').innerText.toLowerCase();
            if (!fullName.includes(string))
                card.classList.add('not_visible');
        }
    }
}

