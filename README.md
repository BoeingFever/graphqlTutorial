         ___        ______     ____ _                 _  ___  
        / \ \      / / ___|   / ___| | ___  _   _  __| |/ _ \ 
       / _ \ \ /\ / /\___ \  | |   | |/ _ \| | | |/ _` | (_) |
      / ___ \ V  V /  ___) | | |___| | (_) | |_| | (_| |\__, |
     /_/   \_\_/\_/  |____/   \____|_|\___/ \__,_|\__,_|  /_/ 
 ----------------------------------------------------------------- 

graphql-server contains backend codes, the backend assumes you already have an running postgre DB somewhere, you need to provide a working DB connection string 
in this file `graphql-server/.env`
replace the `<your-connection-string>` to your working postgre DB connection string

react-client contains frontend codes
in this file `react-client/src/main.tsx`
replace `YOUR_URL_TO_GRAPHQL_BACKEND` with your real url to a running backend, and the frontend call this url through browser, not via internal proxy
```
const client = createClient({
  url: import.meta.env.VITE_API_URL || 'YOUR_URL_TO_GRAPHQL_BACKEND',
});
```

the project builds upon this tutorial https://www.prisma.io/blog/e2e-type-safety-graphql-react-1-I2GxIfxkSZ, but with updated and acutally working codes
