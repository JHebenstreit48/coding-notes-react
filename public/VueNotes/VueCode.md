## Creating Vue App with Vite  
---

1. Install Vite:

```shell
npm create vite@latest . -- --template vue
```

2. Install Dependencies

```shell
npm i
```
or

```shell
npm install
```

3. Start the Development Server

```shell
npm run dev
```

## Creating Vue App with Vue CLI  
---

1. Install Vue CLI

```shell
npm install -g @vue/cli
```

2. Initialize the Project

```shell
vue create .
```

3. Start the Development Server

```shell
npm run serve
```

### Example Vue Project file Structure

```perl
my-vue-app/
├── public/                 # Static files
├── src/                    # Main application source code
│   ├── components/         # Vue components
│   ├── App.vue             # Root Vue component
│   ├── main.js             # Entry point
├── package.json            # Project metadata
├── vite.config.js          # Configuration file (for Vite)
└── README.md               # Project documentation
````
