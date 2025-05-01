import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\AcademicYearController::edit
 * @see app\Http\Controllers\AcademicYearController.php:67
 * @route /academic-years/{academic_year}/edit
 */
export const edit = (args: { academic_year: string | number } | [academic_year: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '\/academic-years\/{academic_year}\/edit',
}

/**
 * @see \App\Http\Controllers\AcademicYearController::edit
 * @see app\Http\Controllers\AcademicYearController.php:67
 * @route /academic-years/{academic_year}/edit
 */
edit.url = (args: { academic_year: string | number } | [academic_year: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return edit.definition.url
            .replace('{academic_year}', parsedArgs.academic_year.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\AcademicYearController::edit
 * @see app\Http\Controllers\AcademicYearController.php:67
 * @route /academic-years/{academic_year}/edit
 */
edit.get = (args: { academic_year: string | number } | [academic_year: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\AcademicYearController::edit
 * @see app\Http\Controllers\AcademicYearController.php:67
 * @route /academic-years/{academic_year}/edit
 */
edit.head = (args: { academic_year: string | number } | [academic_year: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})


export default edit