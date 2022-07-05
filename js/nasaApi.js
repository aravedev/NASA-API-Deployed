//Selecting tags

let titleInfo = document.getElementById("title-info");
let copyrightInfo = document.getElementById("copyRight");
let explanationInfo = document.getElementById("explanation-info");
let btn = document.getElementById("submit");
let dateApi = document.getElementById("date1");
let pic1 = document.getElementById("pic");
const timeInfo = new Date().toJSON().slice(0, 10);
console.log(timeInfo);

let todayDate = new Date(timeInfo);

const api_key = "cbEjdWVrbdVRI1btd8wfJIo0ZbAahjLsctJDhnqz";
const random = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=5`;
const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=2017-07-08`;

//Creating a Promise:

btn.addEventListener("click", getFetch);

//console.log(dateApi);
//let infoDate = dateApi.value;

function readDate() {
  let val = dateApi.value;
  let pickedDate = new Date(val);

  if (pickedDate > todayDate) {
    console.log("are you a timetraveler?");
  } else {
    console.log("nahh");
  }
}

function getFetch() {
  let val = dateApi.value;
  let pickedDate = new Date(val);
  let todayDate = new Date(timeInfo);

  if (pickedDate <= todayDate) {
    const api_key = "cbEjdWVrbdVRI1btd8wfJIo0ZbAahjLsctJDhnqz";
    const random = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=5`;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${val}&concept_tags=True`;

    console.log(val);
    //Creating the connection
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        //console.log(data);

        const explanation = data.explanation;
        const pic = data.url;
        const title = data.title;
        const copyright = data.copyright;

        titleInfo.innerText = title;
        explanationInfo.innerText = explanation;
        copyrightInfo.innerText = "Copyright: " + copyright;
        pic1.src = pic;
      })
      .catch((error) => console.log(error));
  } else {
    alert("Not Valid Date");
  }
}

const todayPOD = function () {
  const api_key = "cbEjdWVrbdVRI1btd8wfJIo0ZbAahjLsctJDhnqz";
  const random = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=5`;
  const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${timeInfo}&concept_tags=True`;

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      //console.log(data);

      const explanation = data.explanation;
      const pic = data.url;
      const title = data.title;
      const copyright = data.copyright;

      titleInfo.innerText = title;
      explanationInfo.innerText = explanation;
      copyrightInfo.innerText = "Copyright: " + copyright;
      pic1.src = pic;
    })
    .catch((error) => console.log(error));
};

todayPOD();

// http://api.open-notify.org/astros.json (API show you how many persons are in the space)
