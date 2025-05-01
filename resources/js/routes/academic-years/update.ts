import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\AcademicYearController::update
 * @see app\Http\Controllers\AcademicYearController.php:83
 * @route /academic-years/{academic_year}
 */
export const update = (args: { academic_year: string | number } | [academic_year: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '\/academic-years\/{academic_year}',
}

/**
 * @see \App\Http\Controllers\AcademicYearController::update
 * @see app\Http\Controllers\AcademicYearController.php:83
 * @route /academic-years/{academic_year}
 */
update.url = (args: { academic_year: string | number } | [academic_year: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return update.definition.url
            .replace('{academic_year}', parsedArgs.academic_year.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\AcademicYearController::update
 * @see app\Http\Controllers\AcademicYearController.php:83
 * @route /academic-years/{academic_year}
 */
update.put = (args: { academic_year: string | number } | [academic_year: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

/**
 * @see \App\Http\Controllers\AcademicYearController::update
 * @see app\Http\Controllers\AcademicYearController.php:83
 * @route /academic-years/{academic_year}
 */
update.patch = (args: { academic_year: string | number } | [academic_year: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})


export default update