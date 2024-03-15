function hideElements() {
    // Hide recommended videos
    const recommendedVideos = document.querySelectorAll('ytd-watch-flexy ytd-watch-next-secondary-results-renderer');
    recommendedVideos.forEach(video => video.style.display = 'none');

    // Hide comments
    const comments = document.querySelectorAll('ytd-comments-header-renderer');
    comments.forEach(comment => comment.style.display = 'none');

    // Hide related videos at the end of the video
    const relatedVideos = document.querySelectorAll('ytd-watch-flexy ytd-watch-next-secondary-results-renderer');
    relatedVideos.forEach(video => video.style.display = 'none');

    // Hide grid of recommended videos on the homepage
    const homepageRecommendations = document.querySelectorAll('ytd-rich-grid-renderer');
    homepageRecommendations.forEach(recommendation => recommendation.style.display = 'none');

    // Add any other elements you want to hide
}

// Run the function when the page loads
window.addEventListener('load', hideElements);

// Listen for messages from the popup to toggle the distraction-free mode
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "toggle") {
        hideElements();
    }
});
