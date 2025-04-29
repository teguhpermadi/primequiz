import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\TeacherController::show
 * @see app\Http\Controllers\TeacherController.php:43
 * @route /teachers/{teacher}
 */
export const show = (args: { teacher: string | { id: string } } | [teacher: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '\/teachers\/{teacher}',
}

/**
 * @see \App\Http\Controllers\TeacherController::show
 * @see app\Http\Controllers\TeacherController.php:43
 * @route /teachers/{teacher}
 */
show.url = (args: { teacher: string | { id: string } } | [teacher: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return show.definition.url
            .replace('{teacher}', parsedArgs.teacher.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TeacherController::show
 * @see app\Http\Controllers\TeacherController.php:43
 * @route /teachers/{teacher}
 */
show.get = (args: { teacher: string | { id: string } } | [teacher: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\TeacherController::show
 * @see app\Http\Controllers\TeacherController.php:43
 * @route /teachers/{teacher}
 */
show.head = (args: { teacher: string | { id: string } } | [teacher: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})


export default show