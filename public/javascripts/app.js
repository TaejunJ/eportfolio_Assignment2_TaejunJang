/*
Name: Taejun Jang
Student Number: 301228129
File: user.js
Date: Oct 20, 2022
*/

(function(){
    function Start()
    {
        console.log("App Started...");
        
        let deleteButtons = document.querySelectorAll('')

        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure of deletion?")){
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }
    }
    window.addEventListener("load", Start);
})();