/**
 * Funciones para manejar las clases container de bootstrap
 * y para cambiar cuando se ven o no algunos elementos 
 * de la página, cambiando el estado utilizando el evento 
 * resize de window
 */

export const resize = (setWidth) => {
    const width = window.innerWidth;
    return setWidth(width)
}

export const container = (size) => {
    if (size < 992)
        return 'container-fluid'
    return 'container'
}

// export function removeEvent(methods) {
//     window.removeEventListener('resize', () => {
//         resize()
//     })
// }