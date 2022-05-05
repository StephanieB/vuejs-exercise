export function getTotalPages (limit, totalItems) {
    if (limit === 0) {
        return 1
    }

    return Math.ceil(totalItems / limit)
}
export function getOffset (limit, page) {
    return (page - 1) * limit
}
