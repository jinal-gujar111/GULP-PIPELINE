// Gulpfile.js
const gulp = require('gulp');

// Define a sample task
gulp.task('sampleTask', function() {
    console.log('Running sample task...');
    // Your task logic here
});

// Define other tasks as needed

// Default task
gulp.task('default', gulp.series('sampleTask'));
