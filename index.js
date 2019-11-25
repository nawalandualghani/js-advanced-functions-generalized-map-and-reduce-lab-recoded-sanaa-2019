function map(src, cb) {
  let r = []

  for (let i = 0; i < src.length; i++) {
    let e = src[i]
    r.push(cb(e))
  }

  return r;
}

function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  for (let i = (!!starting) ? 0 : 1; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}
