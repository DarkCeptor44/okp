# One-Knowledge-Proof Authentication

## Concept

One-Knowledge-Proof is inspired by Zero-Knowledge-Proof, which is meant to be a more secure method of authentication where everyone in the party can prove they know the secret without actually telling it to anyone.

In this case the function is similar, imagine that the server already obtained the client's password through whatever means and saved it to a database, then upon sign in:

1. the server generates a random number from 100000 to 999999 when a client connects to it (in WebSocket this means when the page loads)
2. the server sends said number to the client
3. the client receives the number and keeps it around (in a variable/constant or even a hidden form field)
4. once the user enters their password, the client encrypts the number symmetrically with the password and sends it to the server
5. the server decrypts the encrypted text with the client's key that they have and then verify if the unencrypted number is the same as the number generated at step 1

Despite not being 100% secure (which nothing is anyway) this way the only information sent between the server and client, besides username and etc, is the random number and the encrypted text containing the random number, both of which are irrelevant to an attacker intercepting traffic.

## Examples

In this repository the one-knowledge-proof authentication is implemented in the following languages:

- Node.JS
