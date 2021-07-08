const requestList = [];

app.deferredPackageUrls.polyfills.forEach(item => {
  if (item.require) {
    requestList.push(apressImport(item.url));
  }
});

app.config.polyfillsLoaded = Promise.all(requestList);
