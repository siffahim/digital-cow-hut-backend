### Application Routes:

#### User

- api/v1/auth/signup (Create User)POST
- api/v1/users (Collect User)GET
- api/v1/users/648e72cb52f6e52dae846e2b (Collect one User)SINGE GET
- api/v1/users/648f1fb139a52ef0cb1014b6 (User field update or data update)PATCH
- api/v1/users/64917f43065538a6f86a7812 (user DELETE)DELETE

#### Cows

- api/v1/cows (POST)
- api/v1/cows (GET)
- api/v1/cows/648e74fcbf37f06fb5e629c3 (Single GET)
- api/v1/cows/648f1fb139a52ef0cb1014b6 (PATCH)
- api/v1/cows/64918148065538a6f86a781c (DELETE)

### Pagination and filtering routes of cows

- api/v1/cows?page=1&limit=10
- api/v1/cows?sortBy=price&sortOrder=asc
- api/v1/cows?location=Chattogram
- api/v1/cows?searchTerm=Cha
- api/v1/cows?minPrice=20000&maxPrice=70000
