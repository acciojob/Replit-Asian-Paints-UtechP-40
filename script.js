describe('Basic Rendering', () => {
    it('Checking text', () => {
        // Log the button text to verify it's correct
        cy.get('#change_button').invoke('text').then((text) => {
            console.log('Change button text:', text);
        });

        // Check if the button text matches the expected value
        cy.get('#change_button').should('have.text', 'Change Color');
    });
});
