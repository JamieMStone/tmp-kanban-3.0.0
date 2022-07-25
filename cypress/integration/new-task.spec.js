describe('Adding Users', () => {
    it('has a modal opened by an add user button', () => {
        cy.visit('http://localhost:3001')
        cy.get('.user-list button').click()
        cy.get('#modal').contains('Add User')
    })
    it('you can add users with a name and avatar')
})

describe('Adding tasks', () => {
    it('has a modal opened by the add task button', () => {
        cy.visit('http://localhost:3001/boards/1')
        cy.get('button').click()
        cy.get('#modal').contains('assign user:')
    })
    it('you can add a task with a description and user')
})

describe('Drag from TODO -> DOING ', () => {
    it('can drag to different columns', () => {
        cy.visit('http://localhost:3001/boards/1')
        force: true
        const dataTransfer = new DataTransfer
        cy.get('.article #1').trigger('dragstart', {
            dataTransfer
        })

        cy.get('#1').trigger('drop', {
            dataTransfer
        });
    })
})

//COLUMN ID IS 0