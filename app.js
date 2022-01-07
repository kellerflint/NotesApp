const chalk = require('chalk')
const yargs = require('yargs')

const getNotes = require('./notes')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            require: true,
            type: 'string'
        },
        body: {
            describe: 'Note text',
            require: true,
            type: 'string'
        },
    },
    handler: (argv) => {
        console.log('Title:', argv.title, '\nBody:', argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: () => {
        console.log('Remove note...')
    }
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: () => {
        console.log('Listing notes...')
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: () => {
        console.log('Reading note...')
    }
})

yargs.parse()