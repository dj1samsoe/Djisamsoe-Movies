export const getSmashystreamUrl = (tmdbID) => {
  const subtitleLang = "id";
  return `https://embed.smashystream.com/playere.php?tmdb=${tmdbID}&sub=${subtitleLang}`;
};
export const getSuperembedUrl = (tmdbID) => {
  const subtitleLang = "id";
  return `https://multiembed.mov/directstream.php?video_id=${tmdbID}&tmdb=1&sub=${subtitleLang}`;
};
export const get2embedUrl = (tmdbID) => {
  const subtitleLang = "id";
  return `https://www.2embed.cc/embed/${tmdbID}&sub=${subtitleLang}`;
};
