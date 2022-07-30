export interface categoryModel {
    name: String
}

export interface addCategoryModel extends categoryModel {
    token: string
}

export interface removeCategoryModel {
    token: string,
    _id: string
}
