const block1 = document.querySelector('.block1');
const block2 = document.querySelector('.block2');
const block3 = document.querySelector('.block3');

console.log(block1);
console.log(block2);
console.log(block3);

block3.addEventListener('click', (e) => {
    // e.preventDefault();
    // e.stopPropagation();
    console.log('block3');
})

block2.addEventListener('click', (e) => {
    // e.stopPropagation()
    console.log('block2');
})

block1.addEventListener('click', () => {
    console.log('block1');
})