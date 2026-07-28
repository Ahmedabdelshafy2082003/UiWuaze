self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // هنا ممكن تضيف كود عشان التطبيق يشتغل Off-line
});
