function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var arr = document.querySelectorAll('ul.ranked-list')
  for (var i in arr) {
    arr[i].innerHTML = (parseInt(arr[i].innerHTML,10)+n).toString();
  }
}

function deepestChild() {
  var first = document.getElementById('grand-node');
  var next = first;
  while (next[0] !== undefined) {
    next = next[0]
  }
  return next
}
