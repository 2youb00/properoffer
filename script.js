psids = [];
psshowhidde = [];
divslength=0;
let faqBars = document.querySelectorAll('.faqbars');
faqBars.forEach(function (faqBar, index) {
    for (let i = 0; i <= index; i++) {
        psids[index] = i;
        psshowhidde[index] = true;
        divslength++;
    }
});


let showhidde=true;
console.log("1");
    function HandS(faqbars) {
        let index = Array.from(document.querySelectorAll('.faqbars')).indexOf(faqbars);
        let divindex=0;
        for(let i=0;i<=divslength;i++){
            if(psids[i]==index){
                divindex=i;
            }
        }
        let closep = faqbars.closest('.faqbars').querySelector('p');
        let closeh3 = faqbars.closest('.faqbars').querySelector('h3');
        let closedown = faqbars.closest('.faqbars').querySelector('i');
        
        if(psshowhidde[divindex]){
            closep.classList.remove("displaynone");
            psshowhidde[divindex]=false;
            closedown.outerHTML='<i class="fa-solid fa-angle-up"></i>';
            closedown.style.color='#41bfc6';
            closeh3.style.color='#41bfc6';
        }
        else{
            closep.classList.add("displaynone");
            psshowhidde[divindex]=true;
            closedown.outerHTML='<i class="fa-solid fa-angle-down"></i>';
            closedown.style.color='#111837';
            closeh3.style.color='#111837';
        }
    }



/*
psids = [];
psshowhidde = [];
divslength=0;
let faqBars = document.querySelectorAll('.faqbars');
faqBars.forEach(function (faqBar, index) {
    for (let i = 0; i <= index; i++) {
        psids[index] = i;
        psshowhidde[index] = true;
        divslength++;
    }
});
console.log("psids:",psids);


let showhidde=true;
console.log("1");
    function HandS(faqbars) {
        let divindex=0;
        for(let i=0;i<=divslength;i++){
            if(psids[i]==faqbars.index){
                divindex=i;
            }
        }
        console.log("inex:",faqbars.index);
        let closep = faqbars.closest('.faqbars').querySelector('p');
        if(psshowhidde[divindex]){
            closep.classList.remove("displaynone");
            psshowhidde[divindex]=false;console.log("if");
        }
        else{
            closep.classList.add("displaynone");
            psshowhidde[divindex]=true;
            console.log("else");
        }
        console.log(psshowhidde[divindex]);
    }

/*/