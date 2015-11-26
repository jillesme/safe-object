module.exports = function (root, children) {
  var props = children.split('.');
  var tracker = root[props.shift()];

  while (props.length) {
    if (tracker.hasOwnProperty(props[0])) {
      tracker = tracker[props.shift()];
    } else {
      return;
    }
  }
  return tracker;
}
