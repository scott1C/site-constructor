import { Site } from "./site"
import { Sidebar } from "./sidebar"
export class App {
    constructor(model) {
        this.model = model
        this.init()
    }

    init() {
        const site = new Site('#site')
        const updateCallBack = block => {
            this.model.push(block)
            site.render(this.model)
        }
        site.render(this.model)
        new Sidebar('#panel', updateCallBack)
    }
}