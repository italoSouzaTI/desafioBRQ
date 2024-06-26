export function useMatchNumber(url: string) {
  if (url.length) {
    return url.match(/\/(\d+)\/$/);
  }
  return "";
}
