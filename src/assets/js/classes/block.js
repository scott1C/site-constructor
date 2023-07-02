import { row, col, css } from "../components/utils"

export class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }

    toHTML() {
        throw new Error('You need to create this method above all')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const { tag = 'h1', styles } = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        return row(col(`<p>${this.value}</p>`))
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const html = this.value.map(col).join('')
        return row(html)
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const { imageStyles: is, alt = '' } = this.options
        return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}">`)
    }
}