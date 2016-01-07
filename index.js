module.exports = function (root, children) {
  var props = children.split('.');
  var tracker = root[props.shift()];

  do {
    if (!tracker.hasOwnProperty(props[0])) break;
    tracker = tracker[props.shift()];
  } while(props.length);

  return tracker;
};
