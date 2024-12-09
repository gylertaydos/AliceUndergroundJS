window.addEventListener('DOMContentLoaded', init, false); /* inital loading */

function ShowHideDiv(checkbox) {
    switch (checkbox.id)
    {
        case "unaltered":
            var unaltered = document.getElementById("unaltered");
            unaltered.style.display = unaltered.checked ? "block" : "none";
            break;
        case "deyapped":
            var deyapped = document.getElementById("deyapped");
            deyapped.style.display = deyapped.checked ? "block" : "none";
            break;
        default:
            //What ever you want do to
            break;
    }
}