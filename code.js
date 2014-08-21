if (!($ = window.jQuery)) {
    script = document.createElement( 'script' );
    script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
    script.onload = exec;
    document.body.appendChild(script);
}
else {
    exec();
}

function exec() {
    app_name = $('html > meta["application-name"]').attr()

    application-name

    body = $('body');
    body.append('<input type="file" name="img"/>');
    $('#img').click();
}
