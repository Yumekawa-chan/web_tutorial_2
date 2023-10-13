const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg',]

/* Declaring the alternative text for each image file */

const txt = {
    'pic1.jpg':'eye',
    'pic2.jpg':'wave',
    'pic3.jpg':'flower',
    'pic4.jpg':'human',
    'pic5.jpg':'molphon'
}

/* Looping through images */

for(const image of images){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`); // 新しく追加するソースを指定
    newImage.setAttribute('alt', txt[image]); // alt の指定。無くても動きそう
    thumbBar.appendChild(newImage); // ここで初めて画像として追加。
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});