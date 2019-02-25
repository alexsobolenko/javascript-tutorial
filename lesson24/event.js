var eventsObj = {

  addEvent: function(el, type, fn) {
    try {
      if (typeof addEventListener !== 'undefined') {
        el.addEventListener(type, fn, false);
      }
      else if (typeof attachEvent !== 'undefined') {
        el.attachEvent('on' + type, fn);
      }
      else {
        el['on' + type] = fn;
      }
    }
    catch(e) {
      this.catchError(e);
    }
  },

  removeEvent: function(el, type, fn) {
    try {
      if (typeof removeEventListener !== 'undefined') {
        el.removeEventListener(type, fn, false);
      }
      else if (typeof detachEvent !== 'undefined') {
        el.detachEvent('on' + type, fn);
      }
      else {
        el['on' + type] = null;
      }
    }
    catch(e) {
      this.catchError(e);
    }
  },

  getTarget: function(event) {
    var returnValue = null;
    try {
      if (typeof event.target !== 'undefined') returnValue = event.target;
      else returnValue = event.srcElement;
    }
    catch(e) {
      this.catchError(e);
    }
    return returnValue;
  },

  preventDefault: function(event) {
    try {
      if (typeof event.preventDefault !== 'undefined') event.preventDefault();
      else event.returnValue = false;
    }
    catch(e) {
      this.catchError(e);
    }
  },

  catchError(error) {
    console.log(error);
  }

};
