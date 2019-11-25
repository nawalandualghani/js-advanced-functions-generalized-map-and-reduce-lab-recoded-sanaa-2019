function map(arr, cb) {
  let r = []

  for (let i = 0; i < arr.length; i++) {
    let e = arr[i]
    r.push(cb(e))
  }

  return r;
}

function reduce(arr, cb, starting){
  let r = (!!starting) ? starting : arr[0]
  for (let i = (!!starting) ? 0 : 1; i < arr.length; i++) {
    r = cb(arr[i], r)
  }

  return r;
}
