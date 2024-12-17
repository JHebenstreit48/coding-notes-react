## PostgreSQL Basic Code Notes
---

_PostgreSQL_, also known as Postgres, is an open-source relational database management system (RDBMS). It emphasizes SQL compliance and extensibility.

### Logging into PostgreSQL

To login to PostgreSQL in the terminal enter the following command:

```shell
psql -U username
```

The default username is:

```shell
postgres
```

### Creating a Database  

After entering your password, enter the following command into the terminal:

```shell
CREATE DATABASE your_database_name;
```

## Running a Seed Script

You can use the following command to seed your database:

```shell
npm run seed
```

## Google Sheets Integration with PostgreSQL

### Setting Up Google Sheets API

To use Google Sheets data, first set up the API in Google Cloud. Share the spreadsheet with the service account email.

```javascript
const { google } = require('googleapis');
const auth = new google.auth.GoogleAuth({
  keyFile: 'path/to/service-account-key.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});
```

### Fetching Data from Google Sheets

Use the googleapis library to retrieve data from your spreadsheet.

```javascript
async function getSheetData(auth) {
  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: 'v4', auth: client });
  const response = await googleSheets.spreadsheets.values.get({
    spreadsheetId: 'your-spreadsheet-id',
    range: 'Sheet1!A1:Z1000',
  });
  return response.data.values;
}
```

### Storing Data in PostgreSQL

Set up an Express route to insert Google Sheets data into PostgreSQL.

```javascript
const { Pool } = require('pg');
const pool = new Pool({
  user: 'your_user',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

app.get('/import-data', async (req, res) => {
  try {
    const rows = await getSheetData(auth);
    for (const row of rows) {
      await pool.query('INSERT INTO your_table (column1, column2) VALUES ($1, $2)', row);
    }
    res.send('Data imported successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error importing data');
  }
});
```

### SQL Commands

### Example Table Creation

```sql
CREATE TABLE your_table_name (
  id SERIAL PRIMARY KEY,
  column1 TEXT,
  column2 TEXT
);
```

This table structure can be modified based on your data from Google Sheets.
