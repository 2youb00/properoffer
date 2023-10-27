let showhidde=true;
console.log("1");
    function HandS(faqbars) {
        console.log("hhh2h");
        let closep = faqbars.closest('p');
        if(showhidde){
            closep.classList.remove("displaynone");
            showhidde=false;
        }
        else{
            closep.classList.add("displaynone");
            showhidde=true;
        }
    }








/*
.closest():
let faqps=document.querySelectorAll(".faqbars p");
let faqbars=document.querySelectorAll(".faqbars");
let showhidde=true;
faqbars.forEach(faqbar => {
    faqbar.addEventListener("click",()=>{
        faqps.forEach(faqp => {
            if(showhidde){
                faqp.classList.remove("displaynone");
                showhidde=false;
            }
            else{
                faqp.classList.add("displaynone");
                showhidde=true;
            }
        });
    })
});











/*/