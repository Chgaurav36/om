
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'disableScrolling' : true,
      })

      function toggleContent(buttonId) {
        var content1 = document.getElementById('content1');
        var content2 = document.getElementById('content2');
  
        if (buttonId === 'button1') {
          content1.classList.add('active');
          content2.classList.remove('active');
        } else if (buttonId === 'button2') {
          content1.classList.remove('active');
          content2.classList.add('active');
        }
      }
      









