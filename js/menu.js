
var str = "<nav id='c-menu--slide-left' class='c-menu c-menu--slide-left'> \
<div class='list-group sidebar-search-wrap'> \
<div class='c-menu__close hidden'></div>\
<input type='text' class='form-control sidebar-search' placeholder='Search Obitopedia'> \
<a href='1_join.html' class='list-group-custom'>Join / Login</a> \
<a href='3_homepage.html' class='list-group-custom-padded sidebar-home'>Home</a> \
<a href='21_creatmemorial_form.html' class='list-group-custom-padded sidebar-create'>Create Memorial</a> \
<a href='28_notification_1.html' class='list-group-custom-padded sidebar-notifications'>Notifications</a> \
<a href='30_message_1.html' class='list-group-custom-padded sidebar-messages'>Obito Messages</a> \
<a href='10_curator page.html' class='list-group-custom-padded sidebar-curator last'>Curator's Page</a> \
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
<nav id='c-menu--slide-right' class='c-menu c-menu--slide-right'> \
<div class='list-group sidebar-search-wrap'> \
<div class='c-menu__close hidden'></div>\
<input type='text' class='form-control sidebar-search' placeholder='Search Obitopedia'> \
<a href='1_join.html' class='list-group-custom'>Join / Login</a> \
<a href='3_homepage.html' class='list-group-custom-padded sidebar-home'>Home</a> \
<a href='21_creatmemorial_form.html' class='list-group-custom-padded sidebar-create'>Create Memorial</a> \
<a href='28_notification_1.html' class='list-group-custom-padded sidebar-notifications'>Notifications</a> \
<a href='30_message_1.html' class='list-group-custom-padded sidebar-messages'>Obito Messages</a> \
<a href='10_curator page.html' class='list-group-custom-padded sidebar-curator last'>Curator's Page</a> \
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




  function initMenu(options){

    $('body').on('click','#c-mask',function(e){
      $(options.slider).removeClass('is-active')
      $('body').removeClass('has-active-menu')
      $('#c-mask').removeClass('is-active')
    })

    $(options.toggler).click(function(e){
      e.preventDefault();
      if($('body').hasClass('has-active-menu')){
        $(options.slider).removeClass('is-active')
        $('body').removeClass('has-active-menu')
        $('#c-mask').removeClass('is-active')
      } else{
        $(options.slider).addClass('is-active')
        $('body').addClass('has-active-menu')
        $('#c-mask').addClass('is-active')
      }
    });
  }

  // Left Menu
  initMenu({
    toggler: '#menu-left',
    slider:'#c-menu--slide-left'
  })

  // Right Menu
  initMenu({
    toggler: '#menu-right',
    slider:'#c-menu--slide-right'
  })

})

