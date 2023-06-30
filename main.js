// createImage()
//ROADMAP :

//how to create and use a Loop (forLoop, forEach, map)

//how to create and use Functions

//learn the fundamentals of DOM manipulation

//Loops (Do not Repeat Yourself)

// for (let i = 0; i < 5; i++) {

//     const pTag = document.createElement("p")
// pTag.innerText="i am a p tag"

// imgContainer.appendChild(pTag)
// }

// Function

// function createPtags(numberOfTimes) {
//     for (let i = 0; i < numberOfTimes; i++) {

//         const pTag = document.createElement("p")
//     pTag.innerText="i am a p tag"

//     imgContainer.appendChild(pTag)
//     }
// }

// const  a = 10
// const b = 2
// createPtags(b)

// const date = "2023-06-20";
// data.near_earth_objects[date].forEach((singleElement, i)=>{
//   const num = document.createElement("nr");
//       a = i + 1;
//     console.log("i :>> ", i);
//   num.innerText = a;
//     imgContainer.appendChild(num);
// });
// function number() {
//   const imgContainer = document.getElementById("img-container");

//   for (i = 0; i < data.near_earth_objects[date].length; i++) {
//     a = i + 1;
//     console.log("i :>> ", i);
//     const num = document.createElement("nr");
//     num.innerText = a;
//     imgContainer.appendChild(num);
//   }
// }
// number()
// Try table

// function createTable() {
//   const tBody = document.getElementById("tBody");

//   for (i = 0; i < data.length; i++) {
//     let tr = document.createElement("tr");

//     let td1 = document.createElement("td");
//     td1.innerText = "Nr. " + [i + 1];

//     let td2 = document.createElement("td");
//     td2.innerText = data[i].name.common;

//     let td3 = document.createElement("td");
//     if (data[i].capital && data[i].capital !== "undefined") {
//       td3.innerText = data[i].capital;
//     } else {
//       td3.innerText = "Doesn't have a capital";
//     }

//     let td4 = document.createElement("td");
//     td4.innerText = data[i].continents;

//     let td5 = document.createElement("td");
//     if (data[i].languages && data[i].languages !== "undefined") {
//       td5.innerText = Object.values(data[i].languages)[0];
//     } else {
//       td5.innerText = "Doesn't have a language";
//     }

//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
//     tr.appendChild(td4);
//     tr.appendChild(td5);
//     tBody.appendChild(tr);
//   }
// }

// const myArray =["tom", "jerry", "adam"]
// console.log(myArray);
// console.log(myArray[1]);

// const namesObject = {
//   name1:"john",
//   name2:"mike",
//   name3: "michelle"
// }
// console.log(namesObject);
// console.log(namesObject.name1);

// function accessingArrays() {
//   console.log("data.near_earth_objects :>> ", data.near_earth_objects);
//   let insideArrays = Object.values(data.near_earth_objects);
//   console.log("insideArrays :>> ", insideArrays);

//   for (let i = 0; i < insideArrays.length; i++) {
//     console.log(" array :>> ", insideArrays[i]);
//     const individualArray = insideArrays[i];

//     for (let j = 0; j < individualArray.length; j++) {
//       console.log("values inside array ", i, ">>>", individualArray[j]);
//     }
//   }
// }
// accessingArrays()







// Fetching Data
const url = "https://restcountries.com/v3.1/all";
const getData = () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      const database = result;
      functions(database);
    })
    .catch((error) => {
      console.log("error", error);
    });
};

// Function controller
function functions(database) {
  dropdownOptionContinent();
  creatHtmlTable(database);
  // filterByContinent(database);
  dropdownOptionLanguages();
  // dropdownContinentValueChanging(database);
  // dropdownLanguageValueChanging(database);
  dropdownValueChanging(database)
}

// creating the table
const creatHtmlTable = (database) => {
  let table = document.getElementById("tBody");
  table.innerText = "";
  database.forEach((base, i) => {
    let row = document.createElement("tr");
    table.appendChild(row);

    let column = document.createElement("td");
    column.innerText = "Nr" + [i + 1];
    column.setAttribute("id", i);
    row.appendChild(column);

    let column2 = document.createElement("td");
    column2.innerText = base.name.common;
    column2.setAttribute("class", "country");
    column2.setAttribute("id", i);
    row.appendChild(column2);

    let column4 = document.createElement("td");
    column4.setAttribute("id", i);
    column4.innerText = base.continents;
    row.appendChild(column4);

    let column5 = document.createElement("td");
    column5.setAttribute("id", i);
    if (base.languages && base.languages !== "undefined") {
      column5.innerText = Object.values(base.languages);
    } else {
      column5.innerText = "Doesn't have a language";
    }
    row.appendChild(column5);
  });
  trInfo();
};

// Creating the dropdown option for the language dropdown
function dropdownOptionLanguages() {
  const uniqueOptionsArrayLanguage = [];
  const dropdown = document.getElementById("languages-dropdown");
  for (let i = 0; i < data.length; i++) {
    if (data[i].languages && data[i].languages !== "undefined") {
      const languagesArray = Object.values(data[i].languages);

      for (let j = 0; j < languagesArray.length; j++) {
        if (!uniqueOptionsArrayLanguage.includes(languagesArray[j])) {
          uniqueOptionsArrayLanguage.push(languagesArray[j]);
        }
      }
    }
  }
  const uniqueOptionsArrayLanguageSort = uniqueOptionsArrayLanguage.sort()
  for (let i = 0; i < uniqueOptionsArrayLanguage.length; i++) {
    const option = document.createElement("option");
    option.innerText = uniqueOptionsArrayLanguage[i];
    dropdown.appendChild(option);
  }
}

// Eventlistener for the language dropdown
// function dropdownLanguageValueChanging(database) {
//   document
//     .getElementById("languages-dropdown")
//     .addEventListener("change", change);

//   function change() {
//     filterByLanguage(database);
//   }
// }


// creating the dropdown option for the continent dropdown
function dropdownOptionContinent() {
  const uniqueOptionsArrayContinent = [];
  const dropdown = document.getElementById("continent-dropdown");
  for (let i = 0; i < data.length; i++) {
    if (uniqueOptionsArrayContinent.includes(data[i].continents[0]) == false) {
      uniqueOptionsArrayContinent.push(data[i].continents[0]);
    }
  }
  const uniqueOptionsArrayContinentSort = uniqueOptionsArrayContinent.sort()
  for (let i = 0; i < uniqueOptionsArrayContinent.length; i++) {
    const option = document.createElement("option");
    option.innerText = uniqueOptionsArrayContinent[i];
    dropdown.appendChild(option);
  }
}

// Eventlistener for the continent dropdown
function dropdownValueChanging(database) {
  document
    .getElementById("continent-dropdown")
    .addEventListener("change", change);
  document
    .getElementById("languages-dropdown")
    .addEventListener("change", change);
  function change() {
    // filterByContinent(database);
    combinedFilter(database)
  }
}



// Eventlistener for more country info
function trInfo() {
  let row = document.querySelectorAll("tr");
  row.forEach(function (a) {
    a.addEventListener("click", function (event) {
      infoTable(a, event.target.id);
    });
  });
}

// Creating the more info panel for the clicked country
var count = 0
const infoTable = (a, id) => {
  const country = a.getElementsByClassName("country")[0].textContent;
  nameArray = [];
  for (let i = 0; i < data.length; i++) {
    const h = data[i].name.common;
    nameArray.push(h);
  }

  let table = document.getElementById(id);
  table.innerText = "";
  const position = nameArray.indexOf(country);
  const ida = id++ + 1;

  let row = document.createElement("tr");
  table.appendChild(row);

  let column0 = document.createElement("td");
  column0.setAttribute("class", "table");
  column0.innerText = "Nr" + [ida];
  row.appendChild(column0);

  let column01 = document.createElement("td");
  column01.setAttribute("class", "table");
  if (data[position].capital && data[position].capital !== "undefined") {
    column01.innerText = "Capital: " + data[position].capital;
  } else {
    column01.innerText = "Doesn't have a capital";
  }
  row.appendChild(column01);

  let column = document.createElement("td");
  column.setAttribute("class", "table");
  column.innerText = "Population: " + data[position].population + " habitants";
  row.appendChild(column);

  let column2 = document.createElement("td");
  column2.setAttribute("class", "table");
  if (data[position].currencies && data[position].currencies !== "undefined") {
  column2.innerText =
    "Currencies: " + Object.values(data[position].currencies)[0].name;
  } else{
    column2.innerText = "Doesn't have a currency"
  }
  row.appendChild(column2);

  let column3 = document.createElement("td");
  column3.setAttribute("class", "table");
  const img = document.createElement("img");
  img.src = data[position].flags.png;
  img.alt = "flag image";
  img.setAttribute("style", "width:200px");

  column3.appendChild(img);
  row.appendChild(column3);
  if (count === 1){
    table.innerText = "Nr" + [ida]
    count = 0
  } else{
    count +++ 1
  }
}

// Search bar
// Filtering by continent
function filterByContinent(database, checkContinent) {
  const continentFilter = database.filter((base) => {
    return base.continents.includes(checkContinent) || checkContinent === "all";
  });
  console.log('continentFilter :>> ', continentFilter);
  return continentFilter
}

// filtering by language
function filterByLanguage(database, checkLanguages) {
  const languageFilter = database.filter((base) => {
    if (base.languages && base.languages !== "undefined") {
      return (
        Object.values(base.languages).includes(checkLanguages) || checkLanguages === "all"
      );
    }
  });
  console.log('languageFilter :>> ', languageFilter);
  return languageFilter
}
// Combine filtering
function combinedFilter(database){
  const checkContinent = document.getElementById("continent-dropdown").value;
  console.log('checkContinent :>> ', checkContinent);
  const checkLanguages = document.getElementById("languages-dropdown").value;
  console.log('checkLanguages :>> ', checkLanguages);
  let filtered = []
  if (
    filterByLanguage(database, checkLanguages) &&
    filterByContinent(database, checkContinent)
  ){
    console.log('filtered3 :>> ', filtered);
    creatHtmlTable(filtered)
  }
}




























// start
getData()
