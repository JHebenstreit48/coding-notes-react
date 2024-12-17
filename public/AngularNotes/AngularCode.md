## Creating an Angular Application

### Step-by-Step Guide Using Angular CLI
---

1. **Install Angular CLI**

Run the following command to install Angular CLI globally:

```shell
npm install -g @angular/cli
```
2. **Generate a New Angular Project**

Create a new Angular project by running:

```shell
ng new my-angular-app
```

Follow the prompts to configure the project options.

3. **Navigate to the Project Folder**

Move into your project directory:

```shell
cd my-angular-app
```

4. **Serve the Application**

Run the development server:

```shell
ng serve
```

Access the application at http://localhost:4200.

### Example Angular Project Structure

```perl
my-angular-app/
├── src/                    # Main application source code
│   ├── app/                # Main application modules and components
│   ├── assets/             # Static assets
│   ├── environments/       # Environment configurations
│   ├── index.html          # Main HTML file
│   ├── main.ts             # Application entry point
│   ├── styles.css          # Global styles
├── angular.json            # Angular project configuration
├── package.json            # Project dependencies
└── README.md               # Project documentation
```
