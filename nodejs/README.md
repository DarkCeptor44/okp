# Node.JS example

## Basics

1. Setup [Node.JS](https://nodejs.org/) (preferably v18 or above).
2. Clone this repository and `cd` to this folder.
3. Prepare everything with `npm ci`.
4. Copy `.env.template` and rename it to `.env`.
5. Use the provided `gethash.js` to make a SHA-256 hash of the password:

```shell
node gethash.js strongpass
```

Take the hash and put it in `.env` after `SECRET=`, you can replace the existing `strongpass`.

## Optionals

- In `.env` edit the `SECRET` variable to whatever you want, granted it's a SHA-256 hash.
- In `.env` add `PORT=` and a different port if you need to.
