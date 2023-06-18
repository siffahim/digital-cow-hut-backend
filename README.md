### Application Routes:

#### User

- api/v1/auth/signup (Create User)POST
- api/v1/users (Collect User)GET
- api/v1/users/6177a5b87d32123f08d2f5d4 (Collect one User)SINGE GET
- api/v1/users/6177a5b87d32123f08d2f5d4 (User field update or data update)PATCH
- api/v1/users/6177a5b87d32123f08d2f5d4 (user DELETE)DELETE

#### Cows

- api/v1/cows (POST)
- api/v1/cows (GET)
- api/v1/cows/6177a5b87d32123f08d2f5d4 (Single GET)
- api/v1/cows/6177a5b87d32123f08d2f5d4 (PATCH)
- api/v1/cows/6177a5b87d32123f08d2f5d4 (DELETE)

### Pagination and filtering routes of cows

- api/v1/cows?page=1&limit=10
- api/v1/cows?sortBy=price&sortOrder=asc
- api/v1/cows?location=Chattogram
- api/v1/cows?searchTerm=Cha
