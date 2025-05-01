import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\GradeController::store
 * @see app\Http\Controllers\GradeController.php:42
 * @route /grades
 */
export const store = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ['post'],
    url: '\/grades',
}

/**
 * @see \App\Http\Controllers\GradeController::store
 * @see app\Http\Controllers\GradeController.php:42
 * @route /grades
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\GradeController::store
 * @see app\Http\Controllers\GradeController.php:42
 * @route /grades
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})


export default store