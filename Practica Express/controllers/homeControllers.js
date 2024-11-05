const leerUrls = async (req, res) => {
    const urls = [
        { origin: 'www.google.com/bluuweb1', shortURL: 'url1' },
        { origin: 'www.google.com/bluuweb2', shortURL: 'url2' },
        { origin: 'www.google.com/bluuweb3', shortURL: 'url3' },
        { origin: 'www.google.com/bluuweb4', shortURL: 'url4' }
    ];
    res.render('home', { urls: urls })
}

export const homeControllers = {
    leerUrls
} 