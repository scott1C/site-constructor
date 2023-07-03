import { model } from "./components/model"
import { Site } from "./classes/site"
import { Sidebar } from "./classes/sidebar"
import '../scss/style.scss'


const site = new Site('#site')
const sidebar = new Sidebar('#panel')
site.render(model)