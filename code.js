if (!($ = window.jQuery)) { // typeof jQuery=='undefined' works too
    script = document.createElement( 'script' );
    script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
    script.onload = exec;
    document.body.appendChild(script);
}
else {
    exec();
}

function exec() {
    body = $('body');
    body.append('<input type="file" name="img"/>');
    $('#file').click();
}
