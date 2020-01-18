# Speakers.devfesttoulouse.fr

Website to showcase the previous speakers we had, list all the benefits and answer all the questions a speaker could ask us before submitting into our CFP.

## Dev

```
hugo serve
```

## Deploy

Deployment is automated. All you need to provide are those Github Actions secrets:

- `BASE_URL` for us it is `https://speakers.devfesttoulouse.fr/`
- `FIREBASE_TOKEN` Run `firebase login:ci` locally to get the token
