function toggleDetails(element) {
    var moreDetails = element.querySelector('.more-details');
    if (moreDetails.style.display === 'none' || !moreDetails.style.display) {
        moreDetails.style.display = 'block';
    } else {
        moreDetails.style.display = 'none';
    }
}
