// vite.config.ts
import { defineConfig } from "file:///W:/coding/projects/coding-notes-react/node_modules/vite/dist/node/index.js";
import react from "file:///W:/coding/projects/coding-notes-react/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.md"],
  build: {
    rollupOptions: {
      plugins: [
        {
          name: "load-md-files",
          transform(code, id) {
            if (id.endsWith(".md")) {
              return `export default ${JSON.stringify(code)}`;
            }
          }
        }
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJXOlxcXFxjb2RpbmdcXFxccHJvamVjdHNcXFxcY29kaW5nLW5vdGVzLXJlYWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJXOlxcXFxjb2RpbmdcXFxccHJvamVjdHNcXFxcY29kaW5nLW5vdGVzLXJlYWN0XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9XOi9jb2RpbmcvcHJvamVjdHMvY29kaW5nLW5vdGVzLXJlYWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgICBhc3NldHNJbmNsdWRlOiBbJyoqLyoubWQnXSxcbiAgICBidWlsZDoge1xuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbG9hZC1tZC1maWxlcycsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybShjb2RlLCBpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkLmVuZHNXaXRoKCcubWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgZXhwb3J0IGRlZmF1bHQgJHtKU09OLnN0cmluZ2lmeShjb2RlKX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVMsU0FBUyxvQkFBb0I7QUFDdFUsT0FBTyxXQUFXO0FBRWxCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixlQUFlLENBQUMsU0FBUztBQUFBLEVBQ3pCLE9BQU87QUFBQSxJQUNILGVBQWU7QUFBQSxNQUNYLFNBQVM7QUFBQSxRQUNMO0FBQUEsVUFDSSxNQUFNO0FBQUEsVUFDTixVQUFVLE1BQU0sSUFBSTtBQUNoQixnQkFBSSxHQUFHLFNBQVMsS0FBSyxHQUFHO0FBQ3BCLHFCQUFPLGtCQUFrQixLQUFLLFVBQVUsSUFBSSxDQUFDO0FBQUEsWUFDakQ7QUFBQSxVQUNKO0FBQUEsUUFDSjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
