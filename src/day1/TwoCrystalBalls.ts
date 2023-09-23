export default function two_crystal_balls(breaks: boolean[]): number {
  const jumpSqrt = Math.floor(Math.sqrt(breaks.length));

  let i = jumpSqrt;
  for (; i < breaks.length; i += jumpSqrt) {
    if (breaks[i]) break;
  }

  i -= jumpSqrt;

  for (let j = 0; j < jumpSqrt && j < breaks.length; j++, i++) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}
