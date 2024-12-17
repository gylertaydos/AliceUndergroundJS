window.addEventListener('DOMContentLoaded', init, false); /* inital loading */

var originalDisplay; /* declaring originalBackground but not yet defining it */

function toggleYap(){
    var pos = this.getAttribute('value'); /* "this" will refer back to whatever triggered the function- in this case, the checkbox which was checked */
    var display;
        switch (pos){ /* compares its arguement (the value listed in its parenthesis) to any of its case statements, and activates the matching case */
            case 'yap':
                display= 'none';
                break;
        }
        var status = this.checked; /* logs that this check box has been checked */
        var spans = document.getElementsByClassName(pos); /* sets the variable "spans" equal to all elements with the same class name as "pos", the variable defined above as equal to the "value" attribute of whichever checkbox was originally checked to trigger this function */
        for (var i = 0; i < spans.length; i++) { /* checks to see if the status variable is true or false. if true, it means the box is checked and it can activate the color variable. if false, it activates the originalColor variable, which hs the original CSS properties stored */
            if (status == true) {
                spans[i].style.display = display;
            } else {
                spans[i].style.display = originalDisplay;
            }
        }
}

function init() {
    originalDisplay = document.body.style.display; /* saving original display value of text marked yap */
    var checkboxes = document.getElementsByTagName('input'); /* assigning all checkboxes to the variable "checkboxes" by their HTML tag name of "input" */
    for (var i = 0; i < checkboxes.length; i++) { /* "i" is an arbitrary range variable, which is used to measure the position in an array of values (in this case, the number of checkboxes). .length returns the "length" of the checkboxes variable (or, how many values are stored in the variable). "i++" iterates over "i", the range variable, adding 1 to its value (it starts at 0, then iterates, to 1, 2, etc.) */
        checkboxes[i].addEventListener('click', toggleYap, false); /* adding the "click" event listener to each checkbox in the array */
    }
}