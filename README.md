# One-Knowledge-Proof Authentication

## Concept

One-Knowledge-Proof is inspired by Zero-Knowledge-Proof, which is meant to be a more secure method of authentication where everyone in the party can prove they know the secret without actually telling it to anyone.

In this case the function is similar, imagine that the server already obtained the client's password through whatever means and saved it to a database, then upon sign in:

1. The server generates a random number from 100000 to 999999 when a client connects to it (in WebSocket this means when the page loads).
2. The server sends said number to the client.
3. The client receives the number and keeps it around (in a variable/constant or even a hidden form field).
4. Once the user enters their password, the client hashes the password in SHA-256, encrypts the number symmetrically with the hash and sends it to the server.
5. The server decrypts the encrypted text with the client's hashed key that it has and then verifies if the unencrypted number is the same as the number generated at step 1.

Despite not being 100% secure (which nothing is anyway) this way the only information sent between the server and client, besides username and etc, is the random number and the encrypted text containing the random number, both of which are irrelevant to an attacker intercepting traffic (realistically they're not gonna know how the number is used).

## Examples

In this repository the one-knowledge-proof authentication is implemented in the following languages:

- Node.JS
