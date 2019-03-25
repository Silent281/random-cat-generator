//create a list of the cat images and text to randomise
const cat1 = {source: 'images/cat_1.jpeg', text: 'Captain Blue Eyes'};
const cat2 = {source: 'images/cat_2.jpeg', text: 'Mr Party Animal'};
const cat3 = {source: 'images/cat_3.jpeg', text: 'Crazy McGee'};
const cat4 = {source: 'images/cat_4.jpeg', text: 'Playful Lizzi'};

const catList = [cat1, cat2, cat3, cat4]

function randomiser() {
    return Math.floor(Math.random() * catList.length);
};

$(document).ready(function() {
    $('button').on('click', function() {
        var cat = catList[randomiser()]
        $('#catpic').attr('src', cat.source);
        $('#catname').text(cat.text);
    });
});