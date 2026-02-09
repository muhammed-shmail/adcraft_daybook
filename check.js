import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

console.log('tailwind type:', typeof tailwindcss);
console.log('autoprefixer type:', typeof autoprefixer);

try {
    console.log('tailwind call:', typeof tailwindcss());
} catch (e) {
    console.log('tailwind call error:', e.message);
}

try {
    console.log('autoprefixer call:', typeof autoprefixer());
} catch (e) {
    console.log('autoprefixer call error:', e.message);
}
