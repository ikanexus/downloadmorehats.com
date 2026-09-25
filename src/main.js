import 'virtual:uno.css'

const view = document.getElementById('view')
const show = (tpl) => view.replaceChildren(tpl.content.cloneNode(true))

show(document.getElementById('tpl-idle'))

view.addEventListener('click', (e) => {
	if (e.target.closest('#hat')) show(document.getElementById('tpl-gasp'))
})
