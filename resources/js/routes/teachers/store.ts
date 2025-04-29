import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\TeacherController::store
 * @see app\Http\Controllers\TeacherController.php:33
 * @route /teachers
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
    url: '\/teachers',
}

/**
 * @see \App\Http\Controllers\TeacherController::store
 * @see app\Http\Controllers\TeacherController.php:33
 * @route /teachers
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TeacherController::store
 * @see app\Http\Controllers\TeacherController.php:33
 * @route /teachers
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})


export default store