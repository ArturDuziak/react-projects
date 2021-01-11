export const getToast = () => cy.get("[class*=toast-notifications__container]");

export const closeToast = () =>
  getToast().within(() =>
    cy.get("[class*=react-toast-notifications__toast__dismiss-button]").click()
  );
