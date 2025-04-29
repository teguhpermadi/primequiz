import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\TeacherController::index
 * @see app\Http\Controllers\TeacherController.php:15
 * @route /teachers
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
    url: '\/teachers',
}

/**
 * @see \App\Http\Controllers\TeacherController::index
 * @see app\Http\Controllers\TeacherController.php:15
 * @route /teachers
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TeacherController::index
 * @see app\Http\Controllers\TeacherController.php:15
 * @route /teachers
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\TeacherController::index
 * @see app\Http\Controllers\TeacherController.php:15
 * @route /teachers
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})


/**
 * @see \App\Http\Controllers\TeacherController::create
 * @see app\Http\Controllers\TeacherController.php:25
 * @route /teachers/create
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
    url: '\/teachers\/create',
}

/**
 * @see \App\Http\Controllers\TeacherController::create
 * @see app\Http\Controllers\TeacherController.php:25
 * @route /teachers/create
 */
create.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return create.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TeacherController::create
 * @see app\Http\Controllers\TeacherController.php:25
 * @route /teachers/create
 */
create.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\TeacherController::create
 * @see app\Http\Controllers\TeacherController.php:25
 * @route /teachers/create
 */
create.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(options),
    method: 'head',
})


/**
 * @see \App\Http\Controllers\TeacherController::store
 * @see app\Http\Controllers\TeacherController.php:33
 * @route /teachers
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
    url: '\/teachers',
}

/**
 * @see \App\Http\Controllers\TeacherController::store
 * @see app\Http\Controllers\TeacherController.php:33
 * @route /teachers
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TeacherController::store
 * @see app\Http\Controllers\TeacherController.php:33
 * @route /teachers
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})


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


/**
 * @see \App\Http\Controllers\TeacherController::update
 * @see app\Http\Controllers\TeacherController.php:63
 * @route /teachers/{teacher}
 */
export const update = (args: { teacher: string | { id: string } } | [teacher: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '\/teachers\/{teacher}',
}

/**
 * @see \App\Http\Controllers\TeacherController::update
 * @see app\Http\Controllers\TeacherController.php:63
 * @route /teachers/{teacher}
 */
update.url = (args: { teacher: string | { id: string } } | [teacher: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return update.definition.url
            .replace('{teacher}', parsedArgs.teacher.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TeacherController::update
 * @see app\Http\Controllers\TeacherController.php:63
 * @route /teachers/{teacher}
 */
update.put = (args: { teacher: string | { id: string } } | [teacher: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

/**
 * @see \App\Http\Controllers\TeacherController::update
 * @see app\Http\Controllers\TeacherController.php:63
 * @route /teachers/{teacher}
 */
update.patch = (args: { teacher: string | { id: string } } | [teacher: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})


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


const TeacherController = { index, create, store, show, edit, update, destroy }

export default TeacherController