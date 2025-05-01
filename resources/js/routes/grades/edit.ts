import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\GradeController::edit
 * @see app\Http\Controllers\GradeController.php:64
 * @route /grades/{grade}/edit
 */
export const edit = (args: { grade: string | { id: string } } | [grade: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '\/grades\/{grade}\/edit',
}

/**
 * @see \App\Http\Controllers\GradeController::edit
 * @see app\Http\Controllers\GradeController.php:64
 * @route /grades/{grade}/edit
 */
edit.url = (args: { grade: string | { id: string } } | [grade: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return edit.definition.url
            .replace('{grade}', parsedArgs.grade.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\GradeController::edit
 * @see app\Http\Controllers\GradeController.php:64
 * @route /grades/{grade}/edit
 */
edit.get = (args: { grade: string | { id: string } } | [grade: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\GradeController::edit
 * @see app\Http\Controllers\GradeController.php:64
 * @route /grades/{grade}/edit
 */
edit.head = (args: { grade: string | { id: string } } | [grade: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})


export default edit