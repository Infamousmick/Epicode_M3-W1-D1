/* JS Exercises should go here */

// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.
window.addEventListener("load", () => {
  let twitterElements = document.querySelectorAll(
    "aside div:nth-of-type(3)>ol>li",
  );
  twitterElements.forEach((element) => {
    if (element.textContent == "Twitter") {
      element.remove();
    }
  });
});

// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".
let continuaElement = document.querySelectorAll(
  "body>div:first-of-type>.row a",
);
continuaElement.forEach((elemento) => {
  elemento.addEventListener("click", () => {
    elemento.parentElement.parentElement.remove();
  });
});

// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.
let authorElements = document.querySelectorAll(".blog-post>h2+p>a");
authorElements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    alert(element.textContent);
  });
});
