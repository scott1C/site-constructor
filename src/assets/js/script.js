import { model } from "./components/model"
import '../scss/style.scss'

const $site = document.querySelector('#site')
model.forEach(block => {
    $site.insertAdjacentHTML('beforeend', block.toHTML())
})