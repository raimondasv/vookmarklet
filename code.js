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
<<<<<<< HEAD
    app_name = $('html > meta[@name="application-name"]').attr('contents');

    console.log(app_name);

    body = $('body');
    body.append('<input type="file" name="img"/>');
    $('#img').click();
}
