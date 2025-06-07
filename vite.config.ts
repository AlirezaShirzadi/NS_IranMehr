import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    base: './', // Use relative paths instead of absolute paths
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                'english-department': resolve(__dirname, 'english-department.html'),
                'online-course': resolve(__dirname, 'online-course.html'),
                'blog': resolve(__dirname, 'blog.html'),
                'blog-post': resolve(__dirname, 'blog-post.html'),
                'tech-department': resolve(__dirname, 'tech-department.html'),
            },
        },
    },
})
