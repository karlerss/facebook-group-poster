var casper = require('casper').create();
casper.start('http://www.facebook.com/');

casper.then(function () {
    this.fill('#login_form', {
            'email': '###',
            'pass': '###'
        }, true
    );
});


casper.waitForUrl('https://www.facebook.com/', function () {
    this.capture('example.png', {
        left: 0,
        top: 0,
        width: 1000,
        height: 1000
    });
});

casper.then(function () {
    this.open('###');
})

casper.waitForUrl('###', function () {
    this.click('[label="Start Discussion"]');
});

casper.waitForSelector('[data-testid="status-attachment-mentions-input"]', function () {
    this.click('[data-testid="status-attachment-mentions-input"]');
    this.sendKeys('[data-testid="status-attachment-mentions-input"]', '###');
    this.sendKeys('[data-testid="status-attachment-mentions-input"]', 'https://###');
    this.capture('example3.png', {
        left: 0,
        top: 0,
        width: 1000,
        height: 1000
    });
});

casper.wait(1000, function () {
    this.sendKeys('[data-testid="status-attachment-mentions-input"]', ' ');
})

casper.waitForSelector('[data-testid="attachment-preview"] .scaledImageFitWidth', function () {
    this.capture('after-paste-link.png', {
        left: 0,
        top: 0,
        width: 1000,
        height: 1000
    });
    this.click('[data-testid="react-composer-post-button"]');
}, function () {
    console.log('timed out');
}, 30000)

casper.wait(4000, function () {
    this.capture('example4.png', {
        left: 0,
        top: 0,
        width: 1000,
        height: 1000
    });
})

casper.run();