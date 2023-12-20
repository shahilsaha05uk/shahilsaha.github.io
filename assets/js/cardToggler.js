    function toggleCardContent(card) {
    var details = card.querySelector('.project-details');
    var arrow = card.querySelector('.expand-arrow');

    if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block";
    arrow.innerHTML = "&#9650;"; // Arrow pointing upwards
} else {
    details.style.display = "none";
    arrow.innerHTML = "&#9660;"; // Arrow pointing downwards
}
}
