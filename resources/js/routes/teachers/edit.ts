import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\TeacherController::edit
 * @see app\Http\Controllers\TeacherController.php:53
 * @route /teachers/{teacher}/edit
 */
export const edit = (args: { teacher: string | { id: string } } | [teacher: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '\/teachers\/{teacher}\/edit',
}

/**
 * @see \App\Http\Controllers\TeacherController::edit
 * @see app\Http\Controllers\TeacherController.php:53
 * @route /teachers/{teacher}/edit
 */
edit.url = (args: { teacher: string | { id: string } } | [teacher: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return edit.definition.url
            .replace('{teacher}', parsedArgs.teacher.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TeacherController::edit
 * @see app\Http\Controllers\TeacherController.php:53
 * @route /teachers/{teacher}/edit
 */
edit.get = (args: { teacher: string | { id: string } } | [teacher: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\TeacherController::edit
 * @see app\Http\Controllers\TeacherController.php:53
 * @route /teachers/{teacher}/edit
 */
edit.head = (args: { teacher: string | { id: string } } | [teacher: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})


export default edit