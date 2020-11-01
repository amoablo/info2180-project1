/* Add your JavaScript to this file */
window.onload = function() {
    document.getElementsByClassName('btn')[1].addEventListener("click", function(event) {
        event.preventDefault();
        var email = document.getElementById("email").value;


        if (email.length > 0) {
            document.getElementsByClassName("message")[0].innerText = "Thank you! Your email address" + " " + email + " has been added to our mailing list!";

        } else {
            document.getElementsByClassName("message")[0].innerText = "Please enter a email address"


        }



    });


}