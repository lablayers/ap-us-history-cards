var page = require('webpage').create();

page.paperSize = {
  width: '3in',
  height: '5in',
  margin: {
    top: '50px',
    left: '20px',
    bottom: '50px',
    right: '20px'
  }
};

page.open('cards.html', function () {
  page.render('cards.pdf');
  phantom.exit();  
});
