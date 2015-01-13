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
    $("input[id='title']").attr('value', words(3, 15)).trigger("change");
    $("textarea[id='description']").focus().text(words(5, 30)).trigger("change");

    $('.category-selection .selection-box-item').eq(0).click();
    $('.sizes-selection .selection-box-item').eq(0).click();
    $('.colors-selection .selection-box-item').eq(2).click();

    $("input[id='price']").click(function() {
        $("input[id='real_value']").attr('value', rnd(20, 30)).trigger('change');
    });
    $("input[id='price']").attr('value', rnd(10, 20)).trigger('change').click();

    $('.package-selection .selection-box-item').eq(0).click();

    $("input[id='Filedata']").focus();
}
