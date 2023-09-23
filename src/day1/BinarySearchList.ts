export default function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;

  do {
    const middle = Math.floor(lo + (hi - lo) / 2);

    if (haystack[middle] === needle) {
      return true;
    }

    if (needle > haystack[middle]) {
      lo = middle + 1;
    } else {
      hi = middle;
    }
  } while (lo < hi);

  return false;
}
