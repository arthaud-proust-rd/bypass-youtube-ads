# A chromium extension to Bypass Youtube Ads...

...by reloading a video page until Youtube stops showing ads.

## How it works ?

1. You go to a Youtube video page
2. The extension checks if there is an ad playing
3. If yes : reload the page
4. Do it until the is no more ads playing.

## Install

1. Download [latest release zip file](https://github.com/arthaud-proust-rd/bypass-youtube-ads/releases/latest/download/bypass-youtube-ads.zip) and unzip it
2. In Chrome (or any chromium-based navigator like Brave or Arc), go to "Manage extensions"
3. Enable "Developer mode"
4. Click on "Load unpacked" and select "bypass-youtube-ads" folder
5. That's it ! You can go to youtube.com to watch your video, the extension should now works. (You can check logs in the console).

[Read an external "install extension in developer mode" tutorial here](https://bashvlas.com/blog/install-chrome-extension-in-developer-mode/)

## Why it is not on the Chrome Web Store ?

- Project still in development (subject to big changes in function of users feedbacks)
- This adblocker idea could be invalidated quickly (I believe that this adblocking system is very simple but also very fragile)
- Maybe it's conterproductive to publish on a google service a tool to block another google service ?

## Possible improvements

- [ ] Way to inform users that a new version is available (if a patch is deployed for example)
- [ ] Enable imports to avoid duplicated code (require a bundler, not needed actually)
