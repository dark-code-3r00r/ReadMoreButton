    function $(selector) {
      return document.querySelector(selector);
    }



    $('.read-more-btn').addEventListener('click', () => {
      $('.text').classList.toggle('show-more');
      if ($('.read-more-btn').innerHTML === 'Read More') {
        $('.read-more-btn').innerHTML = 'Read Less';
      } else {
        $('.read-more-btn').innerHTML = 'Read More';
      }
    });


    $('h3').style.color = 'red';
    $('.text').style.color = 'gray';
    $('.read-more-btn').style.color = 'green';
    $('.read-more-btn').style.border = '1px solid none';
    //readMore.remove();
