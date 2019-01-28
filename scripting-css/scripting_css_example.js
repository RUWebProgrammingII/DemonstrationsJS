/**
 * Demonstrations on how to use JS to script CSS
 */
 
 document.getElementsByClassName('beautiful')[0].addEventListener('mousemove', function (evt) {
     this.style.boxShadow = `${-evt.offsetX + 50}px ${-evt.offsetY + 50}px 20px 10px rgba(155, 155, 155, .5)`;
 });

/* Part 1 - Basic style changes */
    // 1. Change color of background on body

    // 2. Change font size of all body

    // 3. Toggle class (using classList and className)

/* Part 2 - Using computed styles */
    var p = document.getElementById('text');
    // 1. Get computed style for p with id text

    // 2. Create shrink function

    // 3. Create enlarge function
