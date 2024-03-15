function hideElements() {
  
    const recommendedVideos = document.querySelectorAll('ytd-watch-flexy ytd-watch-next-secondary-results-renderer');
    recommendedVideos.forEach(video => video.style.display = 'none');

    const relatedVideos = document.querySelectorAll('ytd-watch-flexy ytd-watch-next-secondary-results-renderer');
    relatedVideos.forEach(video => video.style.display = 'none');


    const commentsSection = document.querySelector('ytd-comments');
    if (commentsSection) {
        commentsSection.style.display = 'none';
    }

    const homepageRecommendations = document.querySelectorAll('ytd-rich-grid-renderer');
    homepageRecommendations.forEach(recommendation => recommendation.style.display = 'none');

}

window.addEventListener('load', hideElements);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "toggle") {
        hideElements();
    }
});
