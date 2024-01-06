//console.log(document.body);

document.body.style.backgroundColor = '#fff'
function change() {
    const color = document.body.style.backgroundColor;
    if (color === 'rgb(255, 255, 255)') {
        document.body.style.backgroundColor = 'black'
    } else {
        document.body.style.backgroundColor = 'rgb(255, 255, 255)'
    } 
}


function  change2() {
    const color = document.body.style.backgroundColor;
    if (color === 'black') {
        document.getElementById('child-image1').style.borderColor = '#ffffff'
    } else {
        document.getElementById('child-image1').style.borderColor = 'black'
    } if (color === 'black') {
        document.getElementById('child-image2').style.borderColor = '#ffffff'
    } else {
        document.getElementById('child-image2').style.borderColor = 'black'
    } if (color === 'black') {
        document.getElementById('child-image3').style.borderColor = '#ffffff'
    } else {
        document.getElementById('child-image3').style.borderColor = 'black'
    } if (color === 'black') {
        document.getElementById('child-image4').style.borderColor = '#ffffff'
    } else {
        document.getElementById('child-image4').style.borderColor = 'black'
    }
/*СДЕЛАТЬ СМЕНУ ЦВЕТА НА NAV ТОЖЕ*/
}

function change3() {
    const color = document.body.style.backgroundColor;
    if (color === 'black') {
        document.getElementById('go').style.borderColor = '#ffffff'
    } else {
        document.getElementById('go').style.borderColor = 'black'
    } if (color === 'black') {
        document.getElementById('js').style.borderColor = '#ffffff'
    } else {
        document.getElementById('js').style.borderColor = 'black'
    } if (color === 'black') {
        document.getElementById('c').style.borderColor = '#ffffff'
    } else {
        document.getElementById('c').style.borderColor = 'black'
    } if (color === 'black') {
        document.getElementById('py').style.borderColor = '#ffffff'
    } else {
        document.getElementById('py').style.borderColor = 'black'
    }
}









