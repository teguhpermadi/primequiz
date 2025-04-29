import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\TeacherController::destroy
 * @see app\Http\Controllers\TeacherController.php:73
 * @route /teachers/{teacher}
 */
export const destroy = (args: { teacher: string | number } | [teacher: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '\/teachers\/{teacher}',
}

/**
 * @see \App\Http\Controllers\TeacherController::destroy
 * @see app\Http\Controllers\TeacherController.php:73
 * @route /teachers/{teacher}
 */
destroy.url = (args: { teacher: string | number } | [teacher: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { teacher: args }
    }

    if (Array.isArray(args)) {
        args = {
            teacher: args[0],
        }
    }

    const parsedArgs = {
        teacher: args.teacher,
    }

    return destroy.definition.url
            .replace('{teacher}', parsedArgs.teacher.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TeacherController::destroy
 * @see app\Http\Controllers\TeacherController.php:73
 * @route /teachers/{teacher}
 */
destroy.delete = (args: { teacher: string | number } | [teacher: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})


export default destroy