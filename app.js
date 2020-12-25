var button_ref = document.querySelector('#button_id')
var textarea_ref = document.querySelector('textarea')
var output_ref = document.querySelector('#outputHere')
var mock_url = 'https://api.funtranslations.com/translate/mandalorian.json'

var query = 'text'

// textarea_ref.addEventListener('change', handleText)
button_ref.addEventListener('click', clickHandler)

function urlGenerator(mock_url, query, text) {
    return mock_url + '?' + query + '=' + text
}

function clickHandler() {
    var text = textarea_ref.value
    const url = urlGenerator(mock_url, query, text)
    console.log(url)
    doFetch(url)
}

function doFetch(url) {
    fetch(url)
        .then(res => res.json())
        .then(result => output_ref.innerText = result.contents.translated)
        .catch(error => output_ref.innerText = "Ew Something Went Wrong\n" + error)
}