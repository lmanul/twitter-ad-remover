let counter = 0;

function findTweets() {
  // Get the time line.
  let list = document.getElementsByTagName('section')[0];

  if (list.length < 1) {
    // Maybe the content hasn't loaded yet, do some polling.
    window.setTimeout(findTweets, 2000);
    return;
  }

  // The first child is a 'h1'.
  if (!list || !list.childNodes || list.childNodes.length < 2) {
    return [];
  }

  let sectionSecondChild = list.childNodes[1];
  if (!sectionSecondChild || !sectionSecondChild.firstChild) {
    return [];
  }
  return sectionSecondChild.firstChild.childNodes;
}

function removeAds(changes) {
  let tweets = findTweets();
  for (let i = 0; i < tweets.length; i++) {
    if (tweets[i].innerHTML.indexOf('Promoted') != -1) {
      console.log('' + counter++ + ' ads have been hidden so far.');
      tweets[i].style.display = 'none';
    }
  }
}

var observer = new MutationObserver(function(changes) {
  removeAds();
});

let target = document.querySelector('div#react-root');

observer.observe(target, {
  subtree: true,
  childList: true
});
