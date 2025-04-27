import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\StudentController::update
 * @see app\Http\Controllers\StudentController.php:57
 * @route /students/{student}
 */
export const update = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '\/students\/{student}',
}

/**
 * @see \App\Http\Controllers\StudentController::update
 * @see app\Http\Controllers\StudentController.php:57
 * @route /students/{student}
 */
update.url = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return update.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\StudentController::update
 * @see app\Http\Controllers\StudentController.php:57
 * @route /students/{student}
 */
update.put = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

/**
 * @see \App\Http\Controllers\StudentController::update
 * @see app\Http\Controllers\StudentController.php:57
 * @route /students/{student}
 */
update.patch = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})


export default update