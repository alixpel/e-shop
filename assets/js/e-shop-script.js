
// Menu +/-

// affiliate
// Ouverture de la page
    document.querySelector('.bonus-minus-group-affiliate').style.display = "none";

// Ouverture du menu bonus
document.querySelector('.bonus-plus-affiliate').addEventListener('mouseover', function(){
    document.querySelector('.bonus-plus-affiliate').style.display = "none";
    document.querySelector('.bonus-minus-group-affiliate').style.display = "block";
});

// Fermeture du menu bonus
document.querySelector('.bonus-minus-group-affiliate').addEventListener('mouseout', function(){
    document.querySelector('.bonus-plus-affiliate').style.display = "flex";
    document.querySelector('.bonus-minus-group-affiliate').style.display = "none";
});

// voucher
// Ouverture de la page
    document.querySelector('.bonus-minus-group-voucher').style.display = "none";

// Ouverture du menu bonus
document.querySelector('.bonus-plus-voucher').addEventListener('mouseover', function(){
    document.querySelector('.bonus-plus-voucher').style.display = "none";
    document.querySelector('.bonus-minus-group-voucher').style.display = "block";
});

// Fermeture du menu bonus
document.querySelector('.bonus-minus-group-voucher').addEventListener('mouseout', function(){
    document.querySelector('.bonus-plus-voucher').style.display = "flex";
    document.querySelector('.bonus-minus-group-voucher').style.display = "none";
});

// cards
// Ouverture de la page
    document.querySelector('.bonus-minus-group-cards').style.display = "none";

// Ouverture du menu bonus
document.querySelector('.bonus-plus-cards').addEventListener('mouseover', function(){
    document.querySelector('.bonus-plus-cards').style.display = "none";
    document.querySelector('.bonus-minus-group-cards').style.display = "block";
});

// Fermeture du menu bonus
document.querySelector('.bonus-minus-group-cards').addEventListener('mouseout', function(){
    document.querySelector('.bonus-plus-cards').style.display = "flex";
    document.querySelector('.bonus-minus-group-cards').style.display = "none";
});
