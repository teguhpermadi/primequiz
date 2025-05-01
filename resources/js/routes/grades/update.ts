import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\GradeController::update
 * @see app\Http\Controllers\GradeController.php:80
 * @route /grades/{grade}
 */
export const update = (args: { grade: string | { id: string } } | [grade: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '\/grades\/{grade}',
}

/**
 * @see \App\Http\Controllers\GradeController::update
 * @see app\Http\Controllers\GradeController.php:80
 * @route /grades/{grade}
 */
update.url = (args: { grade: string | { id: string } } | [grade: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { grade: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { grade: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            grade: args[0],
        }
    }

    const parsedArgs = {
        grade: typeof args.grade === 'object'
            ? args.grade.id
            : args.grade,
    }

    return update.definition.url
            .replace('{grade}', parsedArgs.grade.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\GradeController::update
 * @see app\Http\Controllers\GradeController.php:80
 * @route /grades/{grade}
 */
update.put = (args: { grade: string | { id: string } } | [grade: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

/**
 * @see \App\Http\Controllers\GradeController::update
 * @see app\Http\Controllers\GradeController.php:80
 * @route /grades/{grade}
 */
update.patch = (args: { grade: string | { id: string } } | [grade: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})


export default update