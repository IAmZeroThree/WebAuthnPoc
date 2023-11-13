import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'smartpass';

  visitorId = 'Press "Identify" button to get visitorId jhjh';

  isHome: boolean = false;
  isSignUp: boolean = false;

  ngOnInit(): void {
    // try {
    //   window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable().then((event) => {
    //     if (!event) {
    //       alert("No biometric available");
    //     } else {
    //       alert("Biometric is available");
    //       // Now, you can proceed with the authentication

    //       const publicKeyCredentialCreationOptions: PublicKeyCredentialCreationOptions = {
    //         challenge: new Uint8Array(32),
    //         rp: {
    //           name: 'localhost:4200', // This can be a friendly name for your relying party
    //         },
    //         user: {
    //           name: "Zeros Merlin",
    //           id: new Uint8Array(16),
    //           displayName: "zerosmerlin@example.com"
    //         },
    //         pubKeyCredParams: [{ alg: -7, type: 'public-key' }],
    //         authenticatorSelection: {
    //           authenticatorAttachment: 'platform',
    //         },
    //         timeout: 60000,
    //         attestation: 'direct',
    //       };

    //       navigator.credentials.create({
    //         publicKey: publicKeyCredentialCreationOptions
    //       })
    //         .then((newCredential) => {
    //           alert("Authentication successful");
    //           // Handle the successful authentication and the new credential
    //         })
    //         .catch((error) => {
    //           alert("Authentication failed: " + error);
    //           // Handle any errors, e.g., user canceled the authentication
    //         });
    //     }
    //   });
    // } catch (error) {
    //   alert("Error: " + error);
    // }
  }

  showSignUp(event: boolean) {
    console.log(event);
    this.isSignUp = !this.isSignUp;
  }
}