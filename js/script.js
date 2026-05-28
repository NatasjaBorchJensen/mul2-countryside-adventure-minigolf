const bold = document.querySelector(".bold1");

window.addEventListener("scroll", () => {

    const bane = document.querySelector(".bane1");

    const rect = bane.getBoundingClientRect();

    /* Når banen er synlig */
    if(rect.top < window.innerHeight && rect.bottom > 0){

        /* Hvor langt vi er på banen */
        const progress =
            (window.innerHeight - rect.top) /
            (window.innerHeight + rect.height);

        /* Bolden triller fra venstre til højre */
        bold.style.left = (progress * 90) + "%";

        /* Bolden bliver synlig */
        bold.style.opacity = "1";

    } else {

        /* Skjul bolden når banen ikke er synlig */
        bold.style.opacity = "0";
    }

});