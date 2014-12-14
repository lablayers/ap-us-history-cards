var page = require('webpage').create();

page.paperSize = {
  width: '380',
  height: '635',
  margin: '0px'
}

page.viewportSize = {
  width: 300,
  height: 500
};

// page.zoomFactor = 300.0/100.0;

page.open('http://localhost:4000/cards.html', function () {
  setTimeout(function() {
    page.render('cards.pdf');
    phantom.exit();  
  }, 5000);
});
