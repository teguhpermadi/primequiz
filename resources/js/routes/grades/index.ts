import create from './create'
import store from './store'
import show from './show'
import edit from './edit'
import update from './update'
import destroy from './destroy'
import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\GradeController::index
 * @see app\Http\Controllers\GradeController.php:16
 * @route /grades
 */
export const index = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ['get','head'],
    url: '\/grades',
}

/**
 * @see \App\Http\Controllers\GradeController::index
 * @see app\Http\Controllers\GradeController.php:16
 * @route /grades
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\GradeController::index
 * @see app\Http\Controllers\GradeController.php:16
 * @route /grades
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\GradeController::index
 * @see app\Http\Controllers\GradeController.php:16
 * @route /grades
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})



const grades = {
    index, 
    create, 
    store, 
    show, 
    edit, 
    update, 
    destroy,
}

export default grades