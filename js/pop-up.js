(function() {
  
    // Set close and open variable
    var btn_close = document.querySelector('.dialog__button--close');
    var btn_open = document.querySelector('.dialog__button--open');
  
    if (typeof(btn_close) != 'undefined' && btn_close != null){
      // Click event to close dialog
      btn_close.addEventListener('click', function (event) {
        // btn.parentNode.parentNode.classList.add('dialog--close');
        btn_close.parentNode.parentNode.setAttribute('aria-hidden', 'true');
        if (typeof(btn_open) != 'undefined' && btn_open != null){
          btn_open.classList.add('dialog__button--toggle');
        }
      });
    }  
    
    if (typeof(btn_open) != 'undefined' && btn_open != null){
      // Click event to open dialog
      btn_open.addEventListener('click', function (event) {
        // btn.parentNode.parentNode.classList.add('dialog--close');
        btn_close.parentNode.parentNode.setAttribute('aria-hidden', 'false');
        if (typeof(btn_open) != 'undefined' && btn_open != null){
          btn_open.classList.remove('dialog__button--toggle');
        }
      });
    }
  }());