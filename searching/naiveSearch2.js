function stringSearch(s, p) {
  let n = s.length;
  let m = p.length;
  let matched = false;
  let l = 0;
  let r = 0;

  while (l <= n - m && !matched) {
    r = 0;
    matched = true;
    while (r < m && matched) {
      matched = p[r] === s[l + r];
      r++;
    }
    l++;
  }
  return matched
    ? console.log("일치하는 인덱스 : " + l)
    : console.log("일치하는 인덱스 없음");
}

stringSearch("lolie roled", "lol");
