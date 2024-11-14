To login to PostgreSQL you would use enter the following command into the terminal:

```bash
psql -U username
```
The default username for PostgreSQL is:

```bash
postgres
```

To create a database after entering your password you would enter the following command:

- You do not use the <>, but instead just insert your database name in that section using underscores between words

```bash
CREATE DATABASE your_database_name;
```


You can use the following command in both SQL and NoSQL to run a script that seeds data into a database:

```shell
npm run seed
```
