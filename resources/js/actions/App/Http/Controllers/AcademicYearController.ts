import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\AcademicYearController::index
 * @see app\Http\Controllers\AcademicYearController.php:16
 * @route /academic-years
 */
export const index = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ['get','head'],
    url: '\/academic-years',
}

/**
 * @see \App\Http\Controllers\AcademicYearController::index
 * @see app\Http\Controllers\AcademicYearController.php:16
 * @route /academic-years
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\AcademicYearController::index
 * @see app\Http\Controllers\AcademicYearController.php:16
 * @route /academic-years
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\AcademicYearController::index
 * @see app\Http\Controllers\AcademicYearController.php:16
 * @route /academic-years
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})


/**
 * @see \App\Http\Controllers\AcademicYearController::create
 * @see app\Http\Controllers\AcademicYearController.php:26
 * @route /academic-years/create
 */
export const create = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ['get','head'],
    url: '\/academic-years\/create',
}

/**
 * @see \App\Http\Controllers\AcademicYearController::create
 * @see app\Http\Controllers\AcademicYearController.php:26
 * @route /academic-years/create
 */
create.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return create.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\AcademicYearController::create
 * @see app\Http\Controllers\AcademicYearController.php:26
 * @route /academic-years/create
 */
create.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\AcademicYearController::create
 * @see app\Http\Controllers\AcademicYearController.php:26
 * @route /academic-years/create
 */
create.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(options),
    method: 'head',
})


/**
 * @see \App\Http\Controllers\AcademicYearController::store
 * @see app\Http\Controllers\AcademicYearController.php:41
 * @route /academic-years
 */
export const store = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ['post'],
    url: '\/academic-years',
}

/**
 * @see \App\Http\Controllers\AcademicYearController::store
 * @see app\Http\Controllers\AcademicYearController.php:41
 * @route /academic-years
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\AcademicYearController::store
 * @see app\Http\Controllers\AcademicYearController.php:41
 * @route /academic-years
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})


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


const AcademicYearController = { index, create, store, show, edit, update, destroy }

export default AcademicYearController