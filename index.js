const readXlsxFile = require('read-excel-file/node')

readXlsxFile('Alunos.xlsx').then((rows)=> {

    for (let i = 0; i < 4; i++) {
        console.log('Nome: ' + rows[i][0])
        console.log('E-mail: ' + rows[i][1])
        console.log('Idade: ' + rows[i][2])
        console.log('Matrícula: ' + rows[i][3])
        console.log('-----------------------')
    }
})
