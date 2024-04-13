import { KeycloakService } from 'keycloak-angular';

// Function to initialize Keycloak
export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak
      .init({
        config: {
          url: 'http://localhost:8080',
          realm: 'azure-devops',
          clientId: 'azure-devops-client',
        },
        initOptions: {
          onLoad: 'login-required',
          flow: 'standard',
        },
      })
      .then(() => {
        keycloak.getToken().then((token) => {
          console.log('Access Token:', token);
          // You can use the token for further requests
        });
        console.log('Keycloak initialized successfully');
      })
      .catch((error) => {
        console.error('Error initializing Keycloak', error);
      });
}
