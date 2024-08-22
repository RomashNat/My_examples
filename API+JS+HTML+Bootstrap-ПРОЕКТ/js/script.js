function takeInfo() {
  const URL_API =
    "https://api.thedogapi.com/v1/images/search?limit=171&api_key=live_TgtNSYpJQUgr1EmEretWNCDdSALhSsW3d72xImhHIkED3YWrS2a8I3Ouq2vgY4IE";
  const COUNT_COLUMN = 4;

  $.getJSON(URL_API, (data) => {
    console.log(data);
    let N = Math.ceil(data.length / COUNT_COLUMN);

    for (let j = 0; j < N; j++) {
      let row = document.createElement("div");
      $(row).addClass("row mt-5 justify-content-around g-5");
      document.body.getElementsByClassName("container")[0].appendChild(row);

      for (let i = 0; i < COUNT_COLUMN; i++) {
        let index = j * COUNT_COLUMN + i;
        if (typeof data[index] == "undefined") break;

        let card = document.createElement("div");
        $(card).addClass("card");
        card.style.width = "20rem";
        row.appendChild(card);

        if (data[index].url) {
          let linkElement = document.createElement("a");
          linkElement.setAttribute("href", data[index].url);
          linkElement.setAttribute("target", "_blank");

          let imgElement = document.createElement("img");
          $(imgElement).addClass("card-img-top");
          imgElement.setAttribute("src", data[index].url);

          linkElement.appendChild(imgElement);
          card.appendChild(linkElement);
        }

        let cardBody = document.createElement("div");
        $(cardBody).addClass("card-body");
        card.appendChild(cardBody);

        let cardTitle = document.createElement("h4");
        $(cardTitle).addClass("card-title");
        cardBody.appendChild(cardTitle);

        let cardSubTitle = document.createElement("h6");
        $(cardSubTitle).addClass("card-subtitle");
        cardBody.appendChild(cardSubTitle);

        let cardSubTitle1 = document.createElement("h6");
        $(cardSubTitle1).addClass("card-subtitle1");
        cardBody.appendChild(cardSubTitle1);

        let cardSubTitle2 = document.createElement("h6");
        $(cardSubTitle2).addClass("card-subtitle2");
        cardBody.appendChild(cardSubTitle2);

        let dateElement = document.createElement("h6");
        cardBody.appendChild(dateElement);

        if (data[index].breeds && data[index].breeds.length > 0) {
          cardTitle.innerHTML = `Имя: ${data[index].breeds[0].name}`;
          cardSubTitle.innerHTML = `Характеристики: ${data[index].breeds[0].temperament}`;
          cardSubTitle1.innerHTML = `Порода-группа: ${data[index].breeds[0].breed_group}`;
          cardSubTitle1.innerHTML = `Описание: ${data[index].breeds[0].bred_for}`;
          dateElement.innerHTML = `Продолжительность жизни: ${data[index].breeds[0].life_span}`;
        } else {
          let name = data[index].id || "Имя не указано";
          cardTitle.innerHTML = `Имя: ${name}`;
          cardSubTitle.innerHTML = "";
          cardSubTitle1.innerHTML = "";
          cardSubTitle2.innerHTML = "";
          dateElement.innerHTML = "";
        }
      }
    }
  });
}

function f_search(event) {
  event.preventDefault();
  let string = document.getElementById("str1").value.toLowerCase();
  let massive = document.body.getElementsByClassName("card");
  if (string === "")
    for (let card of massive) {
      if (card.classList.contains("not_visible"))
        card.classList.remove("not_visible");
    }
  else {
    for (let card of massive) {
      let name = card.querySelector(".card-title").innerText.toLowerCase();
      if (!name.includes(string)) card.classList.add("not_visible");
    }
  }
}

 
function initMap() {
  ymaps.ready(function () {
    const map = new ymaps.Map("map", {
      center: [55.481995, 37.259576],
      zoom: 10,
    });

    const placemark = new ymaps.Placemark([55.481995, 37.259576], {

      hintContent: "Наш приют",
      balloonContent: "Здесь находится приют",
    });

    map.geoObjects.add(placemark);
  });
}

function changeView() {
  if ($("#img1").hasClass("disp")) {
    $("#mapBtn1").html("Посмотреть изображение");
    $("#img1").removeClass("disp").addClass("disp_none");
    $("#map").removeClass("disp_none").addClass("disp");
    $("#col1").removeClass("h-100");
    initMap();
  } else {
    $("#mapBtn1").html("Посмотреть на карте");
    $("#img1").removeClass("disp_none").addClass("disp");
    $("#map").removeClass("disp").addClass("disp_none");
    $("#col1").addClass("h-100");
  }
}

