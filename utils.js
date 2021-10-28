import Vue from 'vue'

const render = (node) => {
    const CustomNode = Vue.extend(node.render)
    let vn = new CustomNode({ propsData: { node } })
    vn.$mount()
    return vn.$el
}

const diff = (news = [], olds = [], key = 'id') => {
    const created = []
    const deleted = []
    const updated = []

    for (let item of news) {
        if (!olds.map((item) => item[key]).includes(item[key])) {
            created.push(item)
        } else {
            updated.push(item)
        }
    }

    for (let item of olds) {
        if (!news.map((item) => item[key]).includes(item[key])) {
            deleted.push(item)
        }
    }

    return { created, deleted, updated }
}

export {
    render,
    diff
}