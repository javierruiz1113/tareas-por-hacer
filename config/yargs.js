//


const descripcion = {
    demand: true,
    alias: 'd',
    describe: 'descripcion tarea nueva'
};

const completado = {
    default: true,
    alias: 'c',
    describe: 'tarea completada o pendiente'
};

const argv = require('yargs')
    .command('crear', `crear una tarea por hacer`, {
        descripcion
    })
    .command('actualizar', `actualizar estado completado de tarea`, {
        descripcion,
        completado
    })

.command('borrar', `borrar tarea`, {
        descripcion

    })
    .help()
    .argv

module.exports = {
    argv
}