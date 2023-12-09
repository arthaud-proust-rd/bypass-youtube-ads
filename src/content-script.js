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
