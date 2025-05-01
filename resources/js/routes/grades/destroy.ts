import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\GradeController::destroy
 * @see app\Http\Controllers\GradeController.php:92
 * @route /grades/{grade}
 */
export const destroy = (args: { grade: string | number } | [grade: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '\/grades\/{grade}',
}

/**
 * @see \App\Http\Controllers\GradeController::destroy
 * @see app\Http\Controllers\GradeController.php:92
 * @route /grades/{grade}
 */
destroy.url = (args: { grade: string | number } | [grade: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { grade: args }
    }

    if (Array.isArray(args)) {
        args = {
            grade: args[0],
        }
    }

    const parsedArgs = {
        grade: args.grade,
    }

    return destroy.definition.url
            .replace('{grade}', parsedArgs.grade.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\GradeController::destroy
 * @see app\Http\Controllers\GradeController.php:92
 * @route /grades/{grade}
 */
destroy.delete = (args: { grade: string | number } | [grade: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})


export default destroy