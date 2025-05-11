document.body.style.backgroundColor = '#fff';

function change() {
    const color = document.body.style.backgroundColor;
    document.body.style.backgroundColor = (color === 'rgb(255, 255, 255)') ? 'black' : 'rgb(255, 255, 255)';
}

function change2() {
    const color = document.body.style.backgroundColor;
    const borderColor = (color === 'black') ? '#ffffff' : 'black';
    const imageIds = ['child-image1', 'child-image2', 'child-image3', 'child-image4'];

    imageIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.borderColor = borderColor;
    });
}

function change3() {
    const color = document.body.style.backgroundColor;
    const borderColor = (color === 'black') ? '#ffffff' : 'black';
    const codeIds = ['go', 'js', 'c', 'py'];

    codeIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.borderColor = borderColor;
    });
}
