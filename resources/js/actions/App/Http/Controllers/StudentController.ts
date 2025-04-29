import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\StudentController::index
 * @see app\Http\Controllers\StudentController.php:15
 * @route /students
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
    url: '\/students',
}

/**
 * @see \App\Http\Controllers\StudentController::index
 * @see app\Http\Controllers\StudentController.php:15
 * @route /students
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\StudentController::index
 * @see app\Http\Controllers\StudentController.php:15
 * @route /students
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\StudentController::index
 * @see app\Http\Controllers\StudentController.php:15
 * @route /students
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})


/**
 * @see \App\Http\Controllers\StudentController::create
 * @see app\Http\Controllers\StudentController.php:25
 * @route /students/create
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
    url: '\/students\/create',
}

/**
 * @see \App\Http\Controllers\StudentController::create
 * @see app\Http\Controllers\StudentController.php:25
 * @route /students/create
 */
create.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return create.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\StudentController::create
 * @see app\Http\Controllers\StudentController.php:25
 * @route /students/create
 */
create.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\StudentController::create
 * @see app\Http\Controllers\StudentController.php:25
 * @route /students/create
 */
create.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(options),
    method: 'head',
})


/**
 * @see \App\Http\Controllers\StudentController::store
 * @see app\Http\Controllers\StudentController.php:33
 * @route /students
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
    url: '\/students',
}

/**
 * @see \App\Http\Controllers\StudentController::store
 * @see app\Http\Controllers\StudentController.php:33
 * @route /students
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\StudentController::store
 * @see app\Http\Controllers\StudentController.php:33
 * @route /students
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})


/**
 * @see \App\Http\Controllers\StudentController::show
 * @see app\Http\Controllers\StudentController.php:43
 * @route /students/{student}
 */
export const show = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '\/students\/{student}',
}

/**
 * @see \App\Http\Controllers\StudentController::show
 * @see app\Http\Controllers\StudentController.php:43
 * @route /students/{student}
 */
show.url = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { student: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { student: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            student: args[0],
        }
    }

    const parsedArgs = {
        student: typeof args.student === 'object'
            ? args.student.id
            : args.student,
    }

    return show.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\StudentController::show
 * @see app\Http\Controllers\StudentController.php:43
 * @route /students/{student}
 */
show.get = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\StudentController::show
 * @see app\Http\Controllers\StudentController.php:43
 * @route /students/{student}
 */
show.head = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})


/**
 * @see \App\Http\Controllers\StudentController::edit
 * @see app\Http\Controllers\StudentController.php:53
 * @route /students/{student}/edit
 */
export const edit = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '\/students\/{student}\/edit',
}

/**
 * @see \App\Http\Controllers\StudentController::edit
 * @see app\Http\Controllers\StudentController.php:53
 * @route /students/{student}/edit
 */
edit.url = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { student: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { student: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            student: args[0],
        }
    }

    const parsedArgs = {
        student: typeof args.student === 'object'
            ? args.student.id
            : args.student,
    }

    return edit.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\StudentController::edit
 * @see app\Http\Controllers\StudentController.php:53
 * @route /students/{student}/edit
 */
edit.get = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\StudentController::edit
 * @see app\Http\Controllers\StudentController.php:53
 * @route /students/{student}/edit
 */
edit.head = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})


/**
 * @see \App\Http\Controllers\StudentController::update
 * @see app\Http\Controllers\StudentController.php:63
 * @route /students/{student}
 */
export const update = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '\/students\/{student}',
}

/**
 * @see \App\Http\Controllers\StudentController::update
 * @see app\Http\Controllers\StudentController.php:63
 * @route /students/{student}
 */
update.url = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { student: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { student: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            student: args[0],
        }
    }

    const parsedArgs = {
        student: typeof args.student === 'object'
            ? args.student.id
            : args.student,
    }

    return update.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\StudentController::update
 * @see app\Http\Controllers\StudentController.php:63
 * @route /students/{student}
 */
update.put = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

/**
 * @see \App\Http\Controllers\StudentController::update
 * @see app\Http\Controllers\StudentController.php:63
 * @route /students/{student}
 */
update.patch = (args: { student: string | { id: string } } | [student: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})


/**
 * @see \App\Http\Controllers\StudentController::destroy
 * @see app\Http\Controllers\StudentController.php:73
 * @route /students/{student}
 */
export const destroy = (args: { student: string | number } | [student: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '\/students\/{student}',
}

/**
 * @see \App\Http\Controllers\StudentController::destroy
 * @see app\Http\Controllers\StudentController.php:73
 * @route /students/{student}
 */
destroy.url = (args: { student: string | number } | [student: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { student: args }
    }

    if (Array.isArray(args)) {
        args = {
            student: args[0],
        }
    }

    const parsedArgs = {
        student: args.student,
    }

    return destroy.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\StudentController::destroy
 * @see app\Http\Controllers\StudentController.php:73
 * @route /students/{student}
 */
destroy.delete = (args: { student: string | number } | [student: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})


const StudentController = { index, create, store, show, edit, update, destroy }

export default StudentController