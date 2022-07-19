const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Sabía que querías, me encantas mucho anshbshvbgsnjncjv')
    alert('MI BLANQUITO PRECIOSOO')
    alert('Te extraño:(')
    alert('Estás guapísimo mi bb hshnbdhgv')
});

const noBtn = document.querySelector('noBtn');

noBtn.addEventListener('Mouseover', () => {
        randomX = parseInt(Math.random() * 100);
        randomY = parseInt(Math.random() * 100);

        noBtn.style.setProperty('top', randomX + '%');
        noBtn.style.setProperty('left', randomY + '%');

        noBtn.style.setProperty('transform', `translate(-${randomX}%,-${randomY}%)`);
    })