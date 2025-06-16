const DDC_dynamicClicked = [
  	[],
  	[
    	"https://github.com/NiccoloSegato/unverse-assets/raw/refs/heads/main/assets/moods/calma/colibri.webm",
        "https://github.com/NiccoloSegato/unverse-assets/raw/refs/heads/main/assets/moods/calma/relaxing-water.webm",
        "https://github.com/NiccoloSegato/unverse-assets/raw/refs/heads/main/assets/moods/calma/rana.webp",
        "https://github.com/NiccoloSegato/unverse-assets/raw/refs/heads/main/assets/moods/calma/tabacco.webp",
        "https://github.com/NiccoloSegato/unverse-assets/raw/refs/heads/main/assets/moods/calma/studio.webm",
        "https://github.com/NiccoloSegato/unverse-assets/raw/refs/heads/main/assets/moods/calma/slang.webm",
        "https://github.com/NiccoloSegato/unverse-assets/raw/refs/heads/main/assets/moods/calma/pinta.webp",
        "https://github.com/NiccoloSegato/unverse-assets/raw/refs/heads/main/assets/moods/calma/rospo.webm"
    ]
];

// The gallery element that will contain the dynamic content
let DDC_galleryMaster = null;

/**
 * Function to check if the user is on a mobile device.
 * It checks for touch capabilities and hover support, as well as user agent strings.
 * @returns {boolean} - Returns true if the user is on a mobile device, false otherwise.
 */
function isMobile() {
    // Check for touch capability and hover support
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const hasHover = window.matchMedia('(hover: hover)').matches;
    
    // Additional check for mobile user agents
    const isMobileUA = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    return hasTouch && !hasHover || isMobileUA;
}

/**
 * Function to render the gallery elements inside the gallery master element.
 * @param {number} DDC_galleryMood - The mood index to determine which set of videos to display.
 */
function DDC_renderGallery(DDC_galleryMood = 1) {
    // Create an empty gallery item container to leave space on the left and center the gallery items
    const galleryItemContainer = document.createElement("div");
    galleryItemContainer.id = "gallery-item-starter";
    DDC_galleryMaster.appendChild(galleryItemContainer);
    for( let i = 0; i < DDC_dynamicClicked[DDC_galleryMood].length; i++) {
        // Create a new div element for each gallery item
        const galleryItem = document.createElement("div");
        galleryItem.className = "gallery-item";

        // Create a new video element for the video content
        const videoElement = document.createElement("video");
        videoElement.src = DDC_dynamicClicked[1][i];
        videoElement.controls = true;
        videoElement.autoplay = false;
        videoElement.loop = true;

        // Append the video element to the gallery item
        galleryItem.appendChild(videoElement);

        // Append the gallery item to the gallery master element
        DDC_galleryMaster.appendChild(galleryItem);
    }
}

/**
 * Funtion called when the DOM is fully loaded.
 * It initializes the gallery master element and calls the render function.
 */
document.addEventListener("DOMContentLoaded", function() {
    // Get the gallery master element
    DDC_galleryMaster = document.getElementById("gallery-master");

    // If the gallery master element is not found, log an error
    if (!DDC_galleryMaster) {
        console.error("Gallery master element not found.");
        return;
    }

    // Call the render function to populate the gallery
    DDC_renderGallery();
    
    // TODO: Implementare lo scroll laterale
});