var PATH_SRC = './src/';
var PATH_DIST = './dist/';
var PATH_FILES = PATH_DIST + '**';
var PATH_DIST_clear = './dist/*';

var PATH = {
    src: PATH_SRC,
    dist: PATH_DIST,
    dist_files: PATH_FILES,
    dist_clear: PATH_DIST_clear,
    html: {
        src: PATH_SRC + '/**/*.html',
        dist: PATH_DIST
    },
    css: {
        src: PATH_SRC + '/**/*.css',
        dist: PATH_DIST
    },
    js: {
        src: PATH_SRC + '/**/*.js',
        dist: PATH_DIST
    },
    img: {
        src: PATH_SRC + '/**/*.{png,jpg,gif,ico}',
        dist: PATH_DIST
    },
    jsMin: {
        src: PATH_SRC + '/frontPage/**/*.js',
        dist: PATH_DIST + '/frontPage/',
    },
    fonts: {
        src: PATH_SRC + '/**/*.{eot,svg,ttf,woff}',
        dist: PATH_DIST
    },
    other: {
        src: PATH_SRC + '/**/*.{swf,xap,json}',
        dist: PATH_DIST
    },
    baseJs: {
        src: PATH_SRC + '/base/**/*.js',
        dist: PATH_DIST + 'base'
    },
    frontPageJs: {
        src: PATH_SRC + '/frontPage/**/*.js',
        dist: PATH_DIST + 'frontPage'
    },
    templateJs: {
        src: PATH_SRC + '/template/**/*.js',
        dist: PATH_DIST + 'template'
    },

};
module.exports = PATH;