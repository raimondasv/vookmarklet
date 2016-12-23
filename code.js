WORDS = [
    "handmade", "zara", "topshop", "h&m", "warehouse", "boohoo", "she inside",
    "ax paris", "dorothy perkins", "new look", "river island", "true decadence",
    "the rockn rev", "ribbon", "next", "unknown", "dixi", "weide", "rare",
    "jane shilton", "hand made", "american apparel", "mango", "asos", "diesel",
    "french connection", "mulberry", "nike", "urban outfitters", "office",
    "london designer", "peacocks", "michael kors", "seven for all mankind",
    "new era", "powerhouse", "newlook", "coast", "monsoon", "missguided",
    "ted baker", "guess", "tommy hilfiger", "jack wills", "armani jeans",
    "schuh", "matalan", "primark", "les nereides", "all saints", "kurt geiger",
    "just sheepskin", "iron fist", "vivienne westwood", "debenhams",
    "mode accessories", "giorgio armani", "converse", "dolce & gabbana",
    "max mara", "simone rocha", "lipsy", "pinkwin", "alessa boutique",
    "china", "matalan papaya", "jane norman", "miss selfridges", "tfnc",
    "puma", "cow vintage", "st michael", "nike jordan", "canterbury",
    "adidas", "juju jellys", "lee cooper", "fiorelli", "hollister", "levi's",
    "lee's", "none", "fern cotton", "yumi", "ugg", "south", "bench",
    "christian loubutin", "republic", "bay", "superdry", "killah", "vans",
    "denim co", "asmosphere", "elle", "sandro ferrone", "melissa", "boy london",
    "oasis", "hello kitty", "boutique", "madonna", "chanel", "paul smith",
    "candy couture", "firetrap", "miss sixty", "atmosphere", "forever yours",
    "london times", "lovarni", "therapy", "jlo", "exhibit", "dv8",
    "louis vuitton", "secret", "beaverbrook", "soleil sucree", "links london"
]

if (!($ = window.jQuery)) {
    script = document.createElement( 'script' );
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
    script.onload = magic;
    document.body.appendChild(script);
}
else {
    magic();
}
function bootstrap_jquery() {
    $.fn._rnd = function()
    {
        var ret = $();

        if(this.length > 0)
            ret = ret.add(this[Math.floor((Math.random() * this.length))]);

        return ret;
    };
}

function rnd(from, to) {
    return to + Math.floor(Math.random() * (from-to + 1));
}

function rnd_word() {
    return WORDS[rnd(0, WORDS.length)];
}

function words(min_words, min_length) {
    result = rnd_word();
    while (min_words >= 0 && result.length <= min_length) {
        min_words--;
        result += " " + rnd_word();
    }
    return result
}


function magic() {
    bootstrap_jquery();
    $("input[id='title']").attr('value', words(4, 20)).trigger("change");
    $("textarea[id='description']").focus().text(words(6, 40)).trigger("change");

    $('.js-category-selector .options-list__content')._rnd().click();
    setTimeout(function() {
        $('.js-subcategory-select .nav-item')._rnd().click();
        setTimeout(function() {
            $('.js-subcategory-select.no-children .nav-item')._rnd().click();
        }, 500);
    }, 500);

    $('.js-upload-sizes .options-list__item')._rnd().click();
    $('.js-color-selector .options-list__item')._rnd().click();

    $('.js-acquiring-time-select').click();
    $('.js-acquiring-place-select').click();
    $('.js-status .nav-item')._rnd().click();

    $("input[id='price']").click(function() {
        $("input[id='real_value']").attr('value', rnd(20, 30)).trigger('change');
    });
    $("input[id='price']").attr('value', rnd(10, 20)).trigger('change').click();

    $('.package-selection .selection-box-item').eq(0).click();

    $("input[id='Filedata']").focus();
}
