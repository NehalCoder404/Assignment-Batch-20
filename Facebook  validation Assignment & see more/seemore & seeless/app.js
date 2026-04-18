// var para = document.getElementById('para')
// var btn = document.getElementById('btn')

// var lgParaText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, ab a mollitia officia delectus minus qui
// repellendus nihil id. Quisquam alias voluptatem quo sed deleniti in quas eius quos, perspiciatis, accusamus
// nemo. Non, omnis! Hic vero a nesciunt totam nobis est, aliquid perspiciatis omnis non dicta quam ipsum laborum
// accusamus!`;



// function lgPara() {
//     if (btnEl.toLowerCase() == 'see more') {
//         paraEl = lgParaText
//         btnEl = 'see less'
//     }   
//     else{
    //         btn = 'see more'
    //         paraEl = lgParaText.slice(0,30)
    //     }
    //     // console.log(paraEl)
    
    // }


function seeMore(e){
    para.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo enim quae facilis! Magni?Lorem ipsum dolor sit amet consectetur. Nobis ipsum tempora at. Quos, minima ab.'
    btn.innerText = 'see less'
}

function lessMore(e) {
    para.innerText = 'Lorem ipsum dolor sit amet.'
    btn.innerText = 'see more'
}

function lgPara(){
    if (btn.innerText == "see more"){
         seeMore(this);

    }
    else{
         lessMore(this)
    }
}