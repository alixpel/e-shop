// Ouverture du menu bonus

    document.querySelector('.bonus-minus').style.display = "none";
    document.querySelector('.bonus-text').style.display = 'none';


document.querySelector('.bonus-plus').addEventListener('mouseover', function(){
    document.querySelector('.bonus-plus').style.display = "none";
    document.querySelector('.bonus-minus').style.display = "block";
    document.querySelector('bonus-text').style.display = 'block';
});

// Fermeture du menu bonus

document.querySelector('.bonus-minus').addEventListener('mouseout', function(){
    document.querySelector('.bonus-plus').style.display = "block";
    document.querySelector('.bonus-minus').style.display = "none";
    document.querySelector('bonus-text').style.display = 'none';
});
