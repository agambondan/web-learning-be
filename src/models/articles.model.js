export default class articles {
    constructor(id, category, titles, content, creatAt, updateAt, user) {
        this.id = id
        this.category = category
        this.titles = titles
        this.content = content
        this.creatAt = creatAt
        this.updateAt = updateAt
        this.user = user
    }
}
