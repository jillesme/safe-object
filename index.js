module.exports = function (root, children) {
  var props = children.split('.');
  var tracker = root[props.shift()];

  return props.reduce(function (acc, prop) {
    return acc.hasOwnProperty(prop) ? acc[prop] : undefined;
  }, tracker);
};
