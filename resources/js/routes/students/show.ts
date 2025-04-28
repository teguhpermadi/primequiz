import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\StudentController::show
 * @see app\Http\Controllers\StudentController.php:43
 * @route /students/{student}
 */
export const show = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '\/students\/{student}',
}

/**
 * @see \App\Http\Controllers\StudentController::show
 * @see app\Http\Controllers\StudentController.php:43
 * @route /students/{student}
 */
show.url = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return show.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\StudentController::show
 * @see app\Http\Controllers\StudentController.php:43
 * @route /students/{student}
 */
show.get = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\StudentController::show
 * @see app\Http\Controllers\StudentController.php:43
 * @route /students/{student}
 */
show.head = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})


export default show