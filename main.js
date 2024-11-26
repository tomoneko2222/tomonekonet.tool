(function() {
    let devToolsOpened = false;
    const redirectUrl = "https://ezstat.ru/tomoneko";
    const threshold = 160; // 開発者ツール検出値

    function checkDevTools() {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        
        if (widthThreshold || heightThreshold) {
            if (!devToolsOpened) {
                devToolsOpened = true;
                redirectToSafeUrl();
            }
        } else {
            devToolsOpened = false;
        }
    }

    function redirectToSafeUrl() {
        window.location.replace(redirectUrl);
    }

    const consoleLog = console.log;
    console.log = function() {
        checkDevTools();
        consoleLog.apply(console, arguments);
    };

    setInterval(checkDevTools, 100);


    window.addEventListener('resize', checkDevTools);


    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        checkDevTools();
    });


    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey && (e.key === 'u' || e.key === 'U')) || // Control+U
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))) {
            e.preventDefault();
            checkDevTools();
        }
    });


    document.addEventListener('copy', function(e) {
        e.preventDefault();
        checkDevTools();
    });


    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        checkDevTools();
    });
})();
