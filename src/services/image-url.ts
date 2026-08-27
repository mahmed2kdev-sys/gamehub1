export default function getCroppedImageUrl(url: string): string {
  if (!url) return "";
  const idx = url.indexOf("media/");
  if (idx === -1) return url;
  return url.slice(0, idx) + "media/crop/600/400/" + url.slice(idx + 6);
}
