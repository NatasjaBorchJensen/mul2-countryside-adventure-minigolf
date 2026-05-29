const bold1 = document.querySelector(".bold1");
const bold2 = document.querySelector(".bold2");
const bold3 = document.querySelector(".bold3");

const bane1 = document.querySelector(".bane1");
const bane2 = document.querySelector(".bane2");
const footerFlag = document.querySelector(".flag-container");

/* ===== CHECKPOINTS ===== */

/* Bane 1 */
const path1 = [
    {x: 0, y: 55},
    {x: 25, y: 42},
    {x: 64, y: 58},
    {x: 100, y: 30}
];

/* Bane 2 */
const path2 = [
    {x: 90, y: 53},
    {x: 66, y: 42},
    {x: 35, y: 60},
    {x: 6, y: 35},
    {x: 0, y: 35}
];

/* Bane 3 */
const path3 = [
    {x: -50, y: 30},
    {x: -50, y: 30},
    {x: 27, y: 30},
    {x: 37, y: 15},
    {x: 37, y: 15},
];


/* ===== FUNKTION ===== */

function moveBall(ball, progress, path) {

    const maxIndex = path.length - 1;

    const position = progress * maxIndex;

    const index = Math.floor(position);

    const nextIndex = Math.min(index + 1, maxIndex);

    const localProgress = position - index;

    const start = path[index];
    const end = path[nextIndex];

    const x =
        start.x +
        (end.x - start.x) * localProgress;

    const y =
        start.y +
        (end.y - start.y) * localProgress;

    ball.style.left = x + "%";
    ball.style.bottom = y + "%";
}

/* ===== SCROLL ===== */

window.addEventListener("scroll", () => {

    /* BANE 1 */
    if (bane1) {
        const rect1 = bane1.getBoundingClientRect();

        if (rect1.top < window.innerHeight && rect1.bottom > 0) {

            const progress1 =
                (window.innerHeight - rect1.top) /
                (window.innerHeight + rect1.height);

            moveBall(bold1, progress1, path1);

            bold1.style.opacity = "1";

        } else {

            bold1.style.opacity = "0";
        }
    }

    /* BANE 2 */
    if (bane2) {
        const rect2 = bane2.getBoundingClientRect();

        if (rect2.top < window.innerHeight && rect2.bottom > 0) {

            const progress2 =
                (window.innerHeight - rect2.top) /
                (window.innerHeight + rect2.height);

            moveBall(bold2, progress2, path2);

            bold2.style.opacity = "1";

        } else {

            bold2.style.opacity = "0";
        }
    }

    /* FOOTER */
    if (footerFlag) {
        const rect3 = footerFlag.getBoundingClientRect();

        if (rect3.top < window.innerHeight && rect3.bottom > 0) {

            const progress3 =
                (window.innerHeight - rect3.top) /
                (window.innerHeight + rect3.height);

            moveBall(bold3, progress3, path3);
            bold3.style.opacity = "1";

        } else {

            bold3.style.opacity = "0";

        }
    }
});


/* Skab din egen pakke */
 const accordionBtns =
        document.querySelectorAll(".accordion-btn");

    accordionBtns.forEach(btn => {

        btn.addEventListener("click", () => {

            const content =
                btn.nextElementSibling;

            content.classList.toggle("active");

        });

    });


/* Skab din egen pakke - booking form */
document.querySelector(".booking-message button")
    .addEventListener("click", () => {

        alert("Tak for din forespørgsel! Vi vender tilbage hurtigst muligt.");

    });