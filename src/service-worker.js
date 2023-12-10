const YOUTUBE_VIDEO_URL = "https://www.youtube.com/watch?v=";

const reloadPageIfYoutubeAds = (tab) => {
  if (!tab.active || !tab.url.includes(YOUTUBE_VIDEO_URL)) {
    return;
  }

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content-script.js"],
  });
};

chrome.tabs.onUpdated.addListener(function (_, changeInfo, tab) {
  if (!changeInfo.url) {
    return;
  }

  reloadPageIfYoutubeAds(tab);
});

chrome.tabs.onActivated.addListener(function (activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function (tab) {
    reloadPageIfYoutubeAds(tab);
  });
});
