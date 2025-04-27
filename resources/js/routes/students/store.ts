import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\StudentController::store
 * @see app\Http\Controllers\StudentController.php:33
 * @route /students
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
    url: '\/students',
}

/**
 * @see \App\Http\Controllers\StudentController::store
 * @see app\Http\Controllers\StudentController.php:33
 * @route /students
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\StudentController::store
 * @see app\Http\Controllers\StudentController.php:33
 * @route /students
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})


export default store