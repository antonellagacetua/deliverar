describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get('#user').clear('te');
    cy.get('#user').type('test@test.com');
    cy.get('[type="password"]').clear();
    cy.get('[type="password"]').type('test');
    cy.get('button').click();
    /* ==== End Cypress Studio ==== */
  })
})