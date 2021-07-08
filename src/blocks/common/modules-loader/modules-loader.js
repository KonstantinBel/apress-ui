(function() {
  function _loadMainModules(eventName) {
    var moduleLoader = function () {
      for (var item in app.modules) {
        if (!app.modules[item][eventName]) { continue; }

        try {
          if (app.modules[item].initiated) { return; }
          app.modules[item][eventName]();
          app.modules[item].initiated = true;
        } catch(error) {
          console.trace(error);
        }
      }
    };

    setTimeout(moduleLoader, 10);
  }

  function _getWaitingList() {
    const waitingList = [];

    app.config.polyfillsLoaded && waitingList.push(app.config.polyfillsLoaded);
    app.config.authIsComplete && waitingList.push(app.config.authIsComplete);

    return waitingList;
  }

  function _onWindowLoad() {
    Promise.all(_getWaitingList())
      .then(_loadMainModules.bind(null, 'load'));
  }

  function _listener() {
    document.addEventListener('DOMContentLoaded', _loadMainModules.bind(null, 'ready'));
    window.addEventListener('load', _onWindowLoad);
  }

  app.modules && _listener();
})();
