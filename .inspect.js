async function findImages() {
  const res = await fetch('https://qadeersaleman.vercel.app/static/js/main.56256a2f.js');
  const text = await res.text();
  const imgs = Array.from(new Set(text.match(/"([^"]+\.(?:png|jpg|jpeg|svg|webp|mp4))"/gi) || []));
  console.log('Images found:', imgs);
}
findImages().catch(console.error);
