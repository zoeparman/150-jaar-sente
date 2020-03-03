const knooppunten = require('./pages/wandeling/knooppunten.json');
const withCSS = require('@zeit/next-css');


module.exports = withCSS({
    exportTrailingSlash: true,
    exportPathMap: function() {
        const paths = {
            '/': { page: '/' },
            '/kermis': { page: '/kermis' },
            '/parochie': { page: '/parochie' },
            '/vlag': { page: '/vlag' },
            '/wandeling': { page: '/wandeling' }
        };

        knooppunten.forEach((loop, _) => {
            loop.nodes.forEach((node, _) => {
                paths[`/${node.location}`] = { page: `/${node.location}`}
            })
        });

        return paths;
    }
});