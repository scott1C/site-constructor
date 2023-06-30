import { model } from "./components/model"
import { templates } from "./components/templates"
import '../scss/style.scss'

const $site = document.querySelector('#site')
model.forEach(block => {
    const toHTML = templates[block.type]
    if (toHTML) {
        $site.insertAdjacentHTML('beforeend', toHTML(block))
    }
})