import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    assetsInclude: ['**/*.md'],
    build: {
        rollupOptions: {
            plugins: [
                {
                    name: 'load-md-files',
                    transform(code, id) {
                        if (id.endsWith('.md')) {
                            return `export default ${JSON.stringify(code)}`;
                        }
                    },
                },
            ],
        },
    },
});
