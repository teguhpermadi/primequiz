import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\AcademicYearController::destroy
 * @see app\Http\Controllers\AcademicYearController.php:93
 * @route /academic-years/{academic_year}
 */
export const destroy = (args: { academic_year: string | number } | [academic_year: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '\/academic-years\/{academic_year}',
}

/**
 * @see \App\Http\Controllers\AcademicYearController::destroy
 * @see app\Http\Controllers\AcademicYearController.php:93
 * @route /academic-years/{academic_year}
 */
destroy.url = (args: { academic_year: string | number } | [academic_year: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { academic_year: args }
    }

    if (Array.isArray(args)) {
        args = {
            academic_year: args[0],
        }
    }

    const parsedArgs = {
        academic_year: args.academic_year,
    }

    return destroy.definition.url
            .replace('{academic_year}', parsedArgs.academic_year.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\AcademicYearController::destroy
 * @see app\Http\Controllers\AcademicYearController.php:93
 * @route /academic-years/{academic_year}
 */
destroy.delete = (args: { academic_year: string | number } | [academic_year: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})


export default destroy