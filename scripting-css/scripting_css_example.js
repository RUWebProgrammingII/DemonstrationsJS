/**
 * Demonstrations on how to use JS to script CSS
 */

/* Part 1 - Basic style changes */
    var body = document.getElementsByTagName('body')[0];
    // 1. Change color of background on body
    body.style.backgroundColor = 'blue';

    // 2. Change font size of all body
    body.style.fontSize = '24px';

    // 3. Toggle class (using classList and className)
    body.classList.toggle('container');
    body.classList.toggle('container');

    var div = document.getElementsByClassName('placeholder')[0];
    div.className += ' beautiful';

    document.getElementsByClassName('beautiful')[0].addEventListener('mousemove', function (evt) {
        this.style.boxShadow = `${-evt.offsetX + 50}px ${-evt.offsetY + 50}px 20px 10px rgba(155, 155, 155, .5)`;
    });

/* Part 2 - Using computed styles */
    var p = document.getElementById('text');
    // 1. Get computed style for p with id text
    console.log(getComputedStyle(p, null));

    // 2. Create shrink function
    p.nextElementSibling.addEventListener('click', function (e) {
        var fontSize = getComputedStyle(p, null).fontSize;
        p.style.fontSize = (parseInt(fontSize.substring(0, fontSize.length - 2)) - 1) + 'px';
    });

    // 3. Create enlarge function
    p.previousElementSibling.addEventListener('click', function (e) {
        var fontSize = getComputedStyle(p, null).fontSize;
        p.style.fontSize = (parseInt(fontSize.substring(0, fontSize.length - 2)) + 1) + 'px';
    });
