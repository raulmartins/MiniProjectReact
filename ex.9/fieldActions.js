export function changeValue(e) {
    console.log('Ok Alterando.')
    return({
        type: 'VALUE_CHANGED',
        payload: e.target.value
    })

}