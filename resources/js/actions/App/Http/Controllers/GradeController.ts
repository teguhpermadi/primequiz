import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\GradeController::index
 * @see app\Http\Controllers\GradeController.php:16
 * @route /grades
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
    url: '\/grades',
}

/**
 * @see \App\Http\Controllers\GradeController::index
 * @see app\Http\Controllers\GradeController.php:16
 * @route /grades
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\GradeController::index
 * @see app\Http\Controllers\GradeController.php:16
 * @route /grades
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\GradeController::index
 * @see app\Http\Controllers\GradeController.php:16
 * @route /grades
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})


/**
 * @see \App\Http\Controllers\GradeController::create
 * @see app\Http\Controllers\GradeController.php:26
 * @route /grades/create
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
    url: '\/grades\/create',
}

/**
 * @see \App\Http\Controllers\GradeController::create
 * @see app\Http\Controllers\GradeController.php:26
 * @route /grades/create
 */
create.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return create.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\GradeController::create
 * @see app\Http\Controllers\GradeController.php:26
 * @route /grades/create
 */
create.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\GradeController::create
 * @see app\Http\Controllers\GradeController.php:26
 * @route /grades/create
 */
create.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(options),
    method: 'head',
})


/**
 * @see \App\Http\Controllers\GradeController::store
 * @see app\Http\Controllers\GradeController.php:42
 * @route /grades
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
    url: '\/grades',
}

/**
 * @see \App\Http\Controllers\GradeController::store
 * @see app\Http\Controllers\GradeController.php:42
 * @route /grades
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\GradeController::store
 * @see app\Http\Controllers\GradeController.php:42
 * @route /grades
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})


/**
 * @see \App\Http\Controllers\GradeController::show
 * @see app\Http\Controllers\GradeController.php:54
 * @route /grades/{grade}
 */
export const show = (args: { grade: string | { id: string } } | [grade: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '\/grades\/{grade}',
}

/**
 * @see \App\Http\Controllers\GradeController::show
 * @see app\Http\Controllers\GradeController.php:54
 * @route /grades/{grade}
 */
show.url = (args: { grade: string | { id: string } } | [grade: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { grade: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { grade: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            grade: args[0],
        }
    }

    const parsedArgs = {
        grade: typeof args.grade === 'object'
            ? args.grade.id
            : args.grade,
    }

    return show.definition.url
            .replace('{grade}', parsedArgs.grade.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\GradeController::show
 * @see app\Http\Controllers\GradeController.php:54
 * @route /grades/{grade}
 */
show.get = (args: { grade: string | { id: string } } | [grade: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\GradeController::show
 * @see app\Http\Controllers\GradeController.php:54
 * @route /grades/{grade}
 */
show.head = (args: { grade: string | { id: string } } | [grade: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})


/**
 * @see \App\Http\Controllers\GradeController::edit
 * @see app\Http\Controllers\GradeController.php:64
 * @route /grades/{grade}/edit
 */
export const edit = (args: { grade: string | { id: string } } | [grade: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '\/grades\/{grade}\/edit',
}

/**
 * @see \App\Http\Controllers\GradeController::edit
 * @see app\Http\Controllers\GradeController.php:64
 * @route /grades/{grade}/edit
 */
edit.url = (args: { grade: string | { id: string } } | [grade: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { grade: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { grade: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            grade: args[0],
        }
    }

    const parsedArgs = {
        grade: typeof args.grade === 'object'
            ? args.grade.id
            : args.grade,
    }

    return edit.definition.url
            .replace('{grade}', parsedArgs.grade.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\GradeController::edit
 * @see app\Http\Controllers\GradeController.php:64
 * @route /grades/{grade}/edit
 */
edit.get = (args: { grade: string | { id: string } } | [grade: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\GradeController::edit
 * @see app\Http\Controllers\GradeController.php:64
 * @route /grades/{grade}/edit
 */
edit.head = (args: { grade: string | { id: string } } | [grade: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})


/**
 * @see \App\Http\Controllers\GradeController::update
 * @see app\Http\Controllers\GradeController.php:80
 * @route /grades/{grade}
 */
export const update = (args: { grade: string | { id: string } } | [grade: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '\/grades\/{grade}',
}

/**
 * @see \App\Http\Controllers\GradeController::update
 * @see app\Http\Controllers\GradeController.php:80
 * @route /grades/{grade}
 */
update.url = (args: { grade: string | { id: string } } | [grade: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { grade: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { grade: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            grade: args[0],
        }
    }

    const parsedArgs = {
        grade: typeof args.grade === 'object'
            ? args.grade.id
            : args.grade,
    }

    return update.definition.url
            .replace('{grade}', parsedArgs.grade.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\GradeController::update
 * @see app\Http\Controllers\GradeController.php:80
 * @route /grades/{grade}
 */
update.put = (args: { grade: string | { id: string } } | [grade: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

/**
 * @see \App\Http\Controllers\GradeController::update
 * @see app\Http\Controllers\GradeController.php:80
 * @route /grades/{grade}
 */
update.patch = (args: { grade: string | { id: string } } | [grade: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})


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


const GradeController = { index, create, store, show, edit, update, destroy }

export default GradeController