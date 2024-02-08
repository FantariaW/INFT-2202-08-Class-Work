// JQuery Code Here
//Wrap our code in ready method
$(document).ready(function (){
    console.log("ready")

    $("#registration-form").hide().fadeIn(1000);
    

    // document.querySelector("#signup-form").
    $("#signup-form").submit(function (event){
        event.preventDefault();

        let name =$("#name").val().trim();
        let email = $("#email").val().trim();
        let date = $("#date").val();
        let isValid = true;

        console.log(name);
        console.log(email);
        console.log(date);

        if(name == ""){
            alert("Name pls")
            isValid = false
        }
        if(email == ""){
            alert("Email pls")
            isValid = false
        }
        if(date == ""){
            alert("Date pls")
            isValid = false
        }
        if(isValid == true){
            $("#confirmation-message").slideUp(function(){
                // ` ` can activate multiple line
                $(this).html(`
                    <p>Thank You, <strong>${name}</strong>!</p>
                    <p>Your registration for the show on, <strong>${date.toUpperCase()}</strong> is confirm!</p>
                    <p>A confirmation email has been sent to: <strong>${email}</strong>!</p>
                `)
                .fadeIn(2000).slideDown();
            });
            $("#signup-form")
            .find("input[type=text], input[type=email], select")
            .val("");
        }
    });

    //Form field
//     $("#input, select").focus(function(){
//         $(this).animate(
//             {
//                 borderColor: '#68b3c8'
//             }, 500
//         )
//     }).blur(function(){
//         $(this).animate(
//             {
//                 borderColor: '#ddd'
//             }, 500
//         )
//     })

//     $("#signup-form input[type=submit]").hover(
//         function(){
//         $(this).animate(
//             {
//                 //jQuery.Color is seperate module
//                 backgroundColor: jQuery.Color('#333333'),
//             }, 
//             200
//         );
//     },
//         function(){
//              $(this).animate(
//                 {
//                     backgroundColor: jQuery.Color('#5c5c5c'),
//                 }, 200
//             );
//         }
//     );
});


//ICE 4:
//1. reset button clears all input and confirmation message
//2. Implement "fade out" for confirmation message after a certain period once the registration confirmed

//First part
$("#reset").click(function (event){
    event.preventDefault();

    $("#name").val("");
    $("#email").val("");
    $("#date").val("");

    $("#confirmation-message").empty();
});

//Second part
//I add dafeIn(2000) into line 42, to make the output fade out