(() => {
  if (window.bypassingAds) {
    return;
  }

  const VIDEO_MIN_TIME_IN_S = 5;

  const getVideoTimeInS = () => {
    const [minStr, secondsStr] = document
      .querySelector(".ytp-time-current")
      .innerText.split(":");

    return Number.parseInt(minStr) * 60 + Number.parseInt(secondsStr);
  };

  const reloadToTime = (timeInS) => {
    if (timeInS < VIDEO_MIN_TIME_IN_S) {
      window.location.reload();
      return;
    }

    if (!("URLSearchParams" in window)) {
      return;
    }

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("t", `${timeInS}s`);
    window.location.search = searchParams.toString();
  };

  const reloadIfAds = () => {
    const isThereAds = !!document.querySelector(".video-ads *");

    if (!isThereAds) {
      return;
    }

    const time = getVideoTimeInS();
    reloadToTime(time);
  };

  setInterval(reloadIfAds, 500);
  window.bypassingAds = true;
})();
