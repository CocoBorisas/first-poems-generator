function displayPoem(response) {
  //response.data.answer
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 100,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let poemElement = document.querySelector("#poem");

  //build API Url
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "9fa94bba2e1cf471d64t94o0d08300b7";
  let context = "provide a very short and polite answer";
  let prompt = `generate a very short poem in English, using as a keyword ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  //make a call to API using Axios
  axios.get(apiUrl).then(displayPoem);

  //Display generated poem
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
