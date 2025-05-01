import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\AcademicYearController::show
 * @see app\Http\Controllers\AcademicYearController.php:51
 * @route /academic-years/{academic_year}
 */
export const show = (args: { academic_year: string | number } | [academic_year: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '\/academic-years\/{academic_year}',
}

/**
 * @see \App\Http\Controllers\AcademicYearController::show
 * @see app\Http\Controllers\AcademicYearController.php:51
 * @route /academic-years/{academic_year}
 */
show.url = (args: { academic_year: string | number } | [academic_year: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return show.definition.url
            .replace('{academic_year}', parsedArgs.academic_year.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\AcademicYearController::show
 * @see app\Http\Controllers\AcademicYearController.php:51
 * @route /academic-years/{academic_year}
 */
show.get = (args: { academic_year: string | number } | [academic_year: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\AcademicYearController::show
 * @see app\Http\Controllers\AcademicYearController.php:51
 * @route /academic-years/{academic_year}
 */
show.head = (args: { academic_year: string | number } | [academic_year: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})


export default show