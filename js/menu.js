

(function(window) {

  'use strict';

  /**
   * Extend Object helper function.
   */
  function extend(a, b) {
    for(var key in b) { 
      if(b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }

  /**
   * Each helper function.
   */
  function each(collection, callback) {
    for (var i = 0; i < collection.length; i++) {
      var item = collection[i];
      callback(item);
    }
  }

  /**
   * Menu Constructor.
   */
  function Menu(options) {
    this.options = extend({}, this.options);
    extend(this.options, options);
    this._init();
  }

  /**
   * Menu Options.
   */
  Menu.prototype.options = {
    wrapper: '#o-wrapper',          // The content wrapper
    type: 'slide-left',             // The menu type
    menuOpenerClass: '.c-button',   // The menu opener class names (i.e. the buttons)
    maskId: '#c-mask'               // The ID of the mask
  };

  /**
   * Initialise Menu.
   */
  Menu.prototype._init = function() {
    this.body = document.body;
    this.wrapper = document.querySelector(this.options.wrapper);
    this.mask = document.querySelector(this.options.maskId);
    this.menu = document.querySelector('#c-menu--' + this.options.type);
    this.closeBtn = this.menu.querySelector('.c-menu__close');
    this.menuOpeners = document.querySelectorAll(this.options.menuOpenerClass);
    this._initEvents();
  };

  /**
   * Initialise Menu Events.
   */
  Menu.prototype._initEvents = function() {
    // Event for clicks on the close button inside the menu.
    this.closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      this.close();
    }.bind(this));

    // Event for clicks on the mask.
    this.mask.addEventListener('click', function(e) {
      e.preventDefault();
      this.close();
    }.bind(this));
  };

  /**
   * Open Menu.
   */
  Menu.prototype.open = function() {
    this.body.classList.add('has-active-menu');
    this.wrapper.classList.add('has-' + this.options.type);
    this.menu.classList.add('is-active');
    this.mask.classList.add('is-active');
    this.disableMenuOpeners();
  };

  /**
   * Close Menu.
   */
  Menu.prototype.close = function() {
    this.body.classList.remove('has-active-menu');
    this.wrapper.classList.remove('has-' + this.options.type);
    this.menu.classList.remove('is-active');
    this.mask.classList.remove('is-active');
    this.enableMenuOpeners();
  };

  /**
   * Disable Menu Openers.
   */
  Menu.prototype.disableMenuOpeners = function() {
    each(this.menuOpeners, function(item) {
      item.disabled = true;
    });
  };

  /**
   * Enable Menu Openers.
   */
  Menu.prototype.enableMenuOpeners = function() {
    each(this.menuOpeners, function(item) {
      item.disabled = false;
    });
  };

  /**
   * Add to global namespace.
   */
  window.Menu = Menu;

})(window);

/**
 * Slide left instantiation and action.
 *
 *
 *
 */
var str = "<nav id='c-menu--slide-left' class='c-menu c-menu--slide-left'> \
<button class='c-menu__close hidden'>&larr; Close Menu</button> \
<div class='list-group '> \
<input type='text' class='form-control sidebar-search' placeholder='Search Obitopedia'> \
<a href='1_join.html' class='list-group-custom'>Join / Login</a> \
<a href='3_homepage.html' class='list-group-custom-padded sidebar-home'>Home</a> \
<a href='21_creatmemorial_form.html' class='list-group-custom-padded sidebar-create'>Create Memorial</a> \
<a href='28_notification_1.html' class='list-group-custom-padded sidebar-notifications'>Notifications</a> \
<a href='30_message_1.html' class='list-group-custom-padded sidebar-messages'>Obito Messages</a> \
<a href='10_curator page.html' class='list-group-custom-padded sidebar-curator'>Curator's Page</a> \
<a href='16_aboutus.html' class='list-group-custom'>About</a> \
<a href='18_term of service.html' class='list-group-custom'>Terms</a> \
<a href='19_privacy policy.html' class='list-group-custom'>Privacy</a> \
<a href='20_feedback.html' class='list-group-custom'>Feedback</a> \
<a href='22_settingpage_1.html' class='list-group-custom'>Settings</a> \
<a href='22_settingpage_1.html' class='list-group-custom'>Logout</a> \
<ul class='list-unstyled list-inline social-button-sidebar'> \
<li><a href='http://facebook.com'><i class='fa fa-facebook'></i></a></li> \
<li><a href='http://twitter.com'><i class='fa fa-twitter'></i></a></li> \
<li><a href='http://plus.google.com'><i class='fa fa-google-plus'></i></a></li> \
<li><a href='#'><i class='fa fa-mobile'></i></a></li> \
</ul> \
</div> \
</nav> \
<div id='c-mask' class='c-mask'></div>";



$('document').ready(function(){
  $('body').prepend(str)
  var slideLeft = new Menu({
    wrapper: '.op-header',
    type: 'slide-left',
    menuOpenerClass: '.c-button',
    maskId: '#c-mask'
  });

  $('body').on('click','.menu',function(e){
    e.preventDefault();
    slideLeft.open();
  });


})

