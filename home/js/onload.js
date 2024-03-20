window.onload = function () {
    if (document.getElementById('warning-message') !== null) {
        if (window.innerWidth > 800) {
            document.getElementById('warning-message').style.display = 'block';
        }
    }

    if (document.body.offsetHeight > window.innerHeight) {
        document.querySelector('footer').style.position = 'static';
    }

    // Check if user should have access to the page
    if (document.getElementById('title') !== null) {
        const title = document.getElementById('title').innerHTML;
        const buttonStates = JSON.parse(localStorage.getItem('buttonStates'));
        let btn = '';

        switch (title) {
            case 'Kerk Heide':
                btn = 'btn1';
                break;
            case 'Station Heide':
                btn = 'btn2';
                break;
            case 'Hotel De Zwaan':
                btn = 'btn3';
                break;
            case 'Fleiz En Helena':
                btn = 'btn4';
                break;
            case 'Synagoge':
                btn = 'btn5';
                break;
            case 'Kinderwelzijnstraat':
                btn = 'btn6';
                break;
            case 'Nieuwstraat':
                btn = 'btn7';
                break;
            case 'Bospadje De Vroente':
                btn = 'btn8';
                break;
            case 'Kalmthoutse Heide':
                btn = 'btn9';
                break;
            case 'Keienhof':
                btn = 'btn10';
                break;
        }
        if (buttonStates[btn] === false){
            window.location.href = '/home/wandeling/';
        }
    }

    // Back to top button
    //Get the button
    var mybutton = document.getElementById("backToTopButton");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    mybutton.onclick = function() {topFunction()};

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
}
