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
            cssAttr: 'xs'
        }, {
            type: 'choice',
            title: 'What is your main investment objective?',
            options: [
                'Build wealth',
                'Save for retirement',
                'General income',
                'Save for child\'s education or for a house',
                'Save in case of bad surprise'
            ],
            cssAttr: 'md'
        }, {
            type: 'choice',
            title: 'What is your investment horizon?',
            options: [
                'Less than 1 year',
                '1 to 3 years',
                '3 to 5 years',
                '5 to 10 years',
                'More than 10 years'
            ],
            cssAttr: 'xs'
        }, {
            type: 'choice',
            title: 'Do you have any debt that you need to pay off?',
            options: [
                'Yes',
                'No'
            ],
            cssAttr: 'xs'
        }, {
            type: 'choice',
            title: 'What\'s kind of debt do you have?',
            options: [
                'Credit Card',
                'Line of credit',
                'Auto',
                'Student loans',
                'Mortgage'
            ],
            cssAttr: 'xs'
        }, {
            type: 'choice',
            title: 'How certain is your income',
            options: [
                'Very uncertain',
                'Uncertain',
                'Somewhat certain',
                'Certain',
                'Very certain'
            ],
            cssAttr: 'xs'
        }, {
            type: 'choice',
            title: 'If your portfolio is down 10% after a market decline, what you will do?',
            options: [
                'Sell everything',
                'Sell some',
                'Buy more',
                'Hold steady (do nothing)'
            ],
            cssAttr: 'xs'
        }, {
            type: 'choice',
            title: 'Do you have any previous experience investing in mutual funds, stocks, bonds or different type of securities?',
            options: [
                'I don\'t have any experience',
                '1 to 5 years of experience',
                '6 to 10 years of experience',
                'More than 10 years of experience'
            ],
            cssAttr: 'xs'
        }, {
            type: 'choice',
            title: 'What type of investments have you purchased in the past?',
            options: [
                'Bonds',
                'Fixed income ETFs or mutual funds',
                'Equity ETFs or mutual funds',
                'Individual funds'
            ],
            cssAttr: 'xs'
        }, {
            type: 'choice',
            title: 'If you decided to invest on your own and manage your portfolio, how do you think you\'d do it?',
            options: [
                'Invest in multiple stocks',
                'Invest in different type of bonds',
                'Invest only in one stock or bond',
                'Invest in multiple stocks or bonds'
            ],
            description: 'This helps us better understand your performances and experiences',
            cssAttr: 'xs'
        }, {
            type: 'choice',
            title: 'If you were to invest $50,000 which scenario whould you choose?',
            options: [
                'I can take some losses ($10,000) to earn more long term ($17,500)',
                'I\'m willing to take small losses ($5,000) to earn little long term ($7,500)',
                'I\'m willing to lose ($15,000) to maximize what I earn long term ($30,000)'
            ],
            description: 'Investing come with risk, there\'s no light or good answer.\nChoose the answer you are comfortable with.',
            cssAttr: 'lg'
        }])
    })
}