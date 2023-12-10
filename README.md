# A chromium extension to Bypass Youtube Ads...

...by reloading a video page until Youtube stops showing ads.

## Install

1. Download [latest release zip file](https://github.com/arthaud-proust-rd/bypass-youtube-ads/releases/latest/download/bypass-youtube-ads.zip) and unzip it
2. In Chrome (or any chromium-based navigator like Brave or Arc), go to "Manage extensions"
3. Enable "Developer mode"
4. Click on "Load unpacked" and select "bypass-youtube-ads" folder
5. That's it ! You can go to youtube.com to watch your video, the extension should now works. (You can check logs in the console).

[Read an external "install extension in developer mode" tutorial here](https://bashvlas.com/blog/install-chrome-extension-in-developer-mode/)

## How it works ?

### In resume

1. You go to a Youtube video page
2. The extension checks if there is an ad playing
3. If yes : reload the page
4. Do it until there is no more ads playing.

### The principle

Youtube will show you some ads (as of today its generally 2x 10-20s ads, with sometime a skip button) before a video. Then, it will let you watch some video (I believe it's more a timer) without ads.  
It's a cycle, watch an ad to get some free time.  
Based on that, I used to reload page manually each time I saw an ads. Now, it's automated.

### Some stats

- It takes ~ 4s to bypass ad when you begin your watching session, it's always fun to see how the algorithm is tricked by a simple reload.
- Then you'll have some free time
- Next ads bypass might be even shorter (~2s).

## Why the extension is not on the Chrome Web Store ?

- Project still in development (subject to big changes in function of users feedbacks)
- This adblocker idea could be invalidated quickly (I believe that this adblocking system is very simple but also very fragile)
- Maybe it's conterproductive to publish on a google service a tool to block another google service ?

## Possible improvements

- [x] Handle ads in the middle of video
- [ ] Auto mute ads
- [ ] Some ads can be skipped after 5s. If bypass by reload takes more than 5s, we could rather check if we can skip ads.
- [ ] Way to inform users that a new version is available (if a patch is deployed for example)
