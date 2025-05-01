import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\AcademicYearController::store
 * @see app\Http\Controllers\AcademicYearController.php:41
 * @route /academic-years
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
    url: '\/academic-years',
}

/**
 * @see \App\Http\Controllers\AcademicYearController::store
 * @see app\Http\Controllers\AcademicYearController.php:41
 * @route /academic-years
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\AcademicYearController::store
 * @see app\Http\Controllers\AcademicYearController.php:41
 * @route /academic-years
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})


export default store