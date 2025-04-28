import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\StudentController::edit
 * @see app\Http\Controllers\StudentController.php:53
 * @route /students/{student}/edit
 */
export const edit = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '\/students\/{student}\/edit',
}

/**
 * @see \App\Http\Controllers\StudentController::edit
 * @see app\Http\Controllers\StudentController.php:53
 * @route /students/{student}/edit
 */
edit.url = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { student: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { student: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            student: args[0],
        }
    }

    const parsedArgs = {
        student: typeof args.student === 'object'
            ? args.student.id
            : args.student,
    }

    return edit.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\StudentController::edit
 * @see app\Http\Controllers\StudentController.php:53
 * @route /students/{student}/edit
 */
edit.get = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\StudentController::edit
 * @see app\Http\Controllers\StudentController.php:53
 * @route /students/{student}/edit
 */
edit.head = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})


export default edit