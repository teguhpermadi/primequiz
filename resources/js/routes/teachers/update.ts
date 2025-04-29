import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\TeacherController::update
 * @see app\Http\Controllers\TeacherController.php:63
 * @route /teachers/{teacher}
 */
export const update = (args: { teacher: string | { id: string } } | [teacher: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '\/teachers\/{teacher}',
}

/**
 * @see \App\Http\Controllers\TeacherController::update
 * @see app\Http\Controllers\TeacherController.php:63
 * @route /teachers/{teacher}
 */
update.url = (args: { teacher: string | { id: string } } | [teacher: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { teacher: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { teacher: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            teacher: args[0],
        }
    }

    const parsedArgs = {
        teacher: typeof args.teacher === 'object'
            ? args.teacher.id
            : args.teacher,
    }

    return update.definition.url
            .replace('{teacher}', parsedArgs.teacher.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TeacherController::update
 * @see app\Http\Controllers\TeacherController.php:63
 * @route /teachers/{teacher}
 */
update.put = (args: { teacher: string | { id: string } } | [teacher: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

/**
 * @see \App\Http\Controllers\TeacherController::update
 * @see app\Http\Controllers\TeacherController.php:63
 * @route /teachers/{teacher}
 */
update.patch = (args: { teacher: string | { id: string } } | [teacher: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})


export default update