const annihilateAds = () => {
  const reloadIfAds = () => {
    console.log("reading ads?");
    const isThereAds = !!document.querySelector(".video-ads *");
    console.log(`ads: ${isThereAds ? "true" : "false"}`);

    if (!isThereAds) {
      console.log("so, don't do anything");
      return;
    }

    console.log("so, reloading");
    document.location.reload();
  };

  const reloadIfAdsInterval = setInterval(reloadIfAds, 500);

  setTimeout(() => {
    clearInterval(reloadIfAdsInterval);
  }, 3000);
};

const YOUTUBE_VIDEO_URL = "https://www.youtube.com/watch?v=";

const reloadPageIfYoutubeAds = (tab) => {
  if (!tab.active || !tab.url.includes(YOUTUBE_VIDEO_URL)) {
    return;
  }

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: annihilateAds,
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
