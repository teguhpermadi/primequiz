import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\StudentController::destroy
 * @see app\Http\Controllers\StudentController.php:73
 * @route /students/{student}
 */
export const destroy = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '\/students\/{student}',
}

/**
 * @see \App\Http\Controllers\StudentController::destroy
 * @see app\Http\Controllers\StudentController.php:73
 * @route /students/{student}
 */
destroy.url = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return destroy.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\StudentController::destroy
 * @see app\Http\Controllers\StudentController.php:73
 * @route /students/{student}
 */
destroy.delete = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})


export default destroy