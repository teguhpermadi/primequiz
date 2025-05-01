import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\GradeController::create
 * @see app\Http\Controllers\GradeController.php:26
 * @route /grades/create
 */
export const create = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ['get','head'],
    url: '\/grades\/create',
}

/**
 * @see \App\Http\Controllers\GradeController::create
 * @see app\Http\Controllers\GradeController.php:26
 * @route /grades/create
 */
create.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return create.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\GradeController::create
 * @see app\Http\Controllers\GradeController.php:26
 * @route /grades/create
 */
create.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\GradeController::create
 * @see app\Http\Controllers\GradeController.php:26
 * @route /grades/create
 */
create.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(options),
    method: 'head',
})


export default create