// cookie -> save wrt url, expires after time
document.cookie="user=admin; expires=Wed, 13 Oct 2021 03:12:00 UTC, path=/"

// localstorage -> stays till we delete
localStorage.setItem('username','naga')     // sets item with given key
localStorage.getItem('username')            // get item wrt key

// session storage -> stays till we delete / until the session is open
sessionStorage.setItem('username','sandeep')
sessionStorage.getItem('username')

