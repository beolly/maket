const btn = document.querySelectorAll('.hr');
const cards=document.querySelectorAll('.disc__cards');
btn.forEach(buttn => {
    buttn.addEventListener('click',() =>{
        
        btn.forEach((buttn)=>{
            buttn.classList.remove('active');
        });

        const cardFor = buttn.dataset.for;
        cards.forEach((card)=>{
            card.classList.remove('active');
        });
        cards.forEach(card => {
            const tab = card.dataset.tab;
            if(tab === cardFor){
                card.classList.add('active');
            }
        });
        buttn.classList.add('active');
    });
});
console.log(btn)