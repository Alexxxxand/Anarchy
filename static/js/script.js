window.onload = function () {
    document.querySelectorAll('.client-box').forEach(function (element) {
        element.querySelector('a').href = 'https://cdn.alexxxxand.site/cheats/' + element.getAttribute('file');
    });
}