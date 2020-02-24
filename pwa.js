if ('serviceWorker' in navigator) {
  console.log('added');
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('service worker registered'))
      .catch(err => console.log('service worker not registered', err));
  } else {
    console.log('not added')
  }