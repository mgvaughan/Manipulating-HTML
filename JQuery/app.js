$(document).ready(function () {
    // Adding Objective 1 Header
    $('<h2 id="1">Objective 1</h2>').appendTo('body');
    $('#1').insertBefore('#onj2Type');
    $('<input type="submit" id="obj1Input">').appendTo('body');
    $('#obj1Input').insertBefore('#onj2Type');
    // Adding Objective 1
    $('#obj1Input').on("click", function() {
        alert('Looking good my dude!');
    })

    // Adding Objective 2 Header
    $('<h2 id="2">Objective 2</h2>').appendTo('body');
    $('#2').insertBefore('#onj2Type');
    // Adding Objective 2
    $('#obj2Input').on("click", function() {
        let $alertText = $('input:text').val();
        alert($alertText);
    })

    // Adding Objective 3 Header
    $('<h2 id="3">Objective 3</h2>').appendTo('body')
    $('#3').insertBefore('.obj3');
    // Adding Objective 3
    $('.obj3').on("mouseover", function() {
        $('.obj3').css('background-color', 'blue');
    })
    $('.obj3').on("mouseout", function() {
        $('.obj3').css('background-color', 'white');
    })

    // Adding Objective 4 Header
    $('<h2 id="4">Objective 4</h2>').appendTo('body');
    $('#4').insertBefore('#obj6Input');
    // Adding Objective 4
    $('<p>This is the paragraph text for objective 4!!</p>').appendTo('body');
    $('p').insertBefore('#obj6Input');
    $('p').on("click", function () {
        // $('p').css('color', 'red');
        let rColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, 0);
        $('p').css('color', rColor);
    })

    // Adding Objective 5 Header
    $('<h2 id="5">Objective 5</h2>').appendTo('body');
    $('#5').insertBefore('#obj6Input');
    // Adding Objective 5
    $('<input type="submit" id="obj5Input">').appendTo('body');
    $('#obj5Input').insertBefore('#obj6Input');
    $('<div id="obj5div">').appendTo('body');
    $('#obj5div').insertBefore('#obj6Input');
    $('#obj5Input').on('click', function () {
        $('<span>Michael</span>').appendTo('#obj5div');
    })

    // Adding Objective 5 Header
    $('<h2 id="6">Objective 6</h2>').appendTo('body')
    $('#6').insertBefore('#obj6Input');
    // Adding Objective 6
    let friendarr = ['Nicole', 'David', 'Alyssa', 'Jared', 'John', 'Kevin', 'Tim', 'Jack', 'Harry', 'Will'];
    $('#obj6Input').on('click', function () {
        for(let i = 0; i < friendarr.length; i++) {
            $('<li>' + friendarr[i] + '</li>').appendTo('ul');
        }
    })
})