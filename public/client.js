// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
        
    var title = $('#inputTitle').val();
  
    var link = $('#inputLink').val();
  
    var a = document.createElement('a');
  
    $('#saveBtn').on('click', function(){
    if(title === '' || link === ''){
      console.log('hello world :o');
      } else {
          console.log('it worked') 
      }
    });
  
  $.get('/links', function(titles){
    titles.forEach(function(title){
      $('<li></li>').text(title).appendTo('ul#links').addClass('titleLi');
    });
  });
  
  $.get('/links', function(links){
    links.forEach(function(link){   
      $('<li></li>').text(link).appendTo('ul#links').addClass('linkLi');
    });
  });

$('form').submit(function(event) {
    event.preventDefault();
    var title = $('#inputTitle').val();
    var link = $('#inputLink').val();
    $.post('/links?' + $.param({link: link}), function() {
      $('<li></li>').text(title).appendTo('ul#links').addClass('titleLi');
      $('<li></li>').text(link).appendTo('ul#links').addClass('linkLi');
      $('#inputTitle').val('');
      $('#inputLink').val('');
      $('#inputTitle').focus();
    });
  });

});
