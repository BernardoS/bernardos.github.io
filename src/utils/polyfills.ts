if (!Array.prototype.flat) {
  Array.prototype.flat = function() {
    let depth = arguments[0];
    depth = depth === undefined ? 1 : Math.floor(depth);
    if (depth < 1) return Array.prototype.slice.call(this);
    return (function flat(arr, depth) {
      const len = arr.length >>> 0;
      let flattened: any[] = [];
      let i = 0;
      while (i < len) {
        if (i in arr) {
          const el = arr[i];
          if (Array.isArray(el) && depth > 0)
            flattened = flattened.concat(flat(el, depth - 1));
          else flattened.push(el);
        }
        i++;
      }
      return flattened;
    })(this, depth);
  };
}

if (!Array.prototype.flatMap) {
  Array.prototype.flatMap = function(...args) {
    return Array.prototype.map.apply(this, args).flat(1);
  };
}

export default {}
