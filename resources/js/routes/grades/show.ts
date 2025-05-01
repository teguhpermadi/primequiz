import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\GradeController::show
 * @see app\Http\Controllers\GradeController.php:54
 * @route /grades/{grade}
 */
export const show = (args: { grade: string | { id: string } } | [grade: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '\/grades\/{grade}',
}

/**
 * @see \App\Http\Controllers\GradeController::show
 * @see app\Http\Controllers\GradeController.php:54
 * @route /grades/{grade}
 */
show.url = (args: { grade: string | { id: string } } | [grade: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return show.definition.url
            .replace('{grade}', parsedArgs.grade.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\GradeController::show
 * @see app\Http\Controllers\GradeController.php:54
 * @route /grades/{grade}
 */
show.get = (args: { grade: string | { id: string } } | [grade: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\GradeController::show
 * @see app\Http\Controllers\GradeController.php:54
 * @route /grades/{grade}
 */
show.head = (args: { grade: string | { id: string } } | [grade: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})


export default show