function generatePoem(event) {
  event.preventDefault();
  let poemElement = document.querySelector("#poem");
  // poemElement.innerHTML = "This is the new poem";

  //let heading = document.querySelector("h1");
  //heading.innerHTML = "Hello World";

  new Typewriter("#poem", {
    strings: "This is the new poem",
    autoStart: true,
    cursor: "",
    delay: 100,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
