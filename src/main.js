import '@fontsource/actor'
import 'virtual:uno.css'

const view = document.getElementById('view')

document.getElementById('hat').addEventListener('click', () => {
	view.replaceChildren(document.getElementById('tpl-gasp').content.cloneNode(true))
})
