#  AdBlocker Script (IN MAINTENCE) 30/09/2024

This project is a lightweight JavaScript script built to function as a browser extension, designed to remove video ads and interactive ad interfaces, primarily targeting video players. It leverages DOM manipulation and the `MutationObserver` API to efficiently detect and remove ads in real-time.

# Features

-   Removes ads in video players (e.g., YouTube).
-   Closes ad overlays and banners.
-   Automatically skips video ads by advancing the player.
-   Eliminates interactive ads that appear during video playback.
-   Uses `MutationObserver` to track and respond to DOM changes instantly.

## Key Ad Selectors Monitored

-   `.ytp-ad-module`: Video player ad container.
-   `.ytp-ad-player-overlay`: Ad overlay in the video player.
-   `.ad-container`: General ad containers.
-   `.video-ads`: Video ad elements.
-   `.ytp-ad-skip-button`: Skip ad button.
-   `.ytp-ad-interrupting`: Ads interrupting the video playback.

## How It Works

The script, intended to be run within a browser extension such as **Tampermonkey** or **Greasemonkey**, monitors the DOM for known ad-related elements and removes them as they appear. When an ad starts playing, it automatically jumps to the end of the ad by adjusting the video’s current time. It also removes interactive ads and closes ad overlays.
