module.exports = (app) => {
    app.post('/api/questions/get-all', (req, res, next) => {
        res.status(200).send([{
            type: 'choice',
            title: 'What\'s your age?',
            options: [
                'Under 25',
                '25 to 40',
                '41 to 55',
                '56 to 70',
                '71 and Over'
            ],
            cssAttr: "xs"
        }])
    })
}