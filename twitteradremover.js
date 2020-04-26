
function findTweets() {
  // Get the time line.
  let list = document.querySelector('section[aria-labelledby="accessible-list-0"]');
  // The first child is a 'h1'.
  if (list.childNodes.length < 2) {
    return [];
  }
  return list.childNodes[1].firstChild.childNodes;
}

var observer = new MutationObserver(function(changes) {
  let tweets = findTweets();
  for (let i = 0; i < tweets.length; i++) {
    if (tweets[i].innerHTML.indexOf('Promoted') != -1) {
      tweets[i].style.backgroundColor = 'red';
    }
  }
});

let target = document.querySelector('body');
observer.observe(target, {
  subtree: true,
  childList: true
});
