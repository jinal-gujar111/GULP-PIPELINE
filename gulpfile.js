// Gulpfile.js
const gulp = require('gulp');

// Define a sample synchronous task
gulp.task('sampleTaskSync', function(done) {
    console.log('Running sample synchronous task...');
    // Your synchronous task logic here
    done(); // Signal completion
});

// Define a sample asynchronous task
gulp.task('sampleTaskAsync', function() {
    console.log('Running sample asynchronous task...');
    // Your asynchronous task logic here
    return new Promise(resolve => {
        // Simulate asynchronous operation
        setTimeout(() => {
            console.log('Async task completed.');
            resolve();
        }, 2000); // Adjust the timeout as needed
    });
});

// Default task
gulp.task('default', gulp.series('sampleTaskSync', 'sampleTaskAsync'));
