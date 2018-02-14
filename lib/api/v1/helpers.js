const fs = require('fs')

const readJsonFileSync = (filepath, encoding) => {
    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    const file = fs.readFileSync(filepath, encoding);
    return file.length < 2 ? [] : JSON.parse(file);
}

const getPosts = () => readJsonFileSync('./data/posts.json') || [];

const savePost = (post) => {
    const posts = getPosts()
    const id = (posts[posts.length - 1] ? posts[posts.length - 1].id : 0) + 1
    posts.push({
        id: id,
        ...post
    });
    fs.writeFileSync('./data/posts.json', JSON.stringify(posts))
    return id;
};

const checkPost = (string) => {
    return string.length <= 450 && string.indexOf('http' < 0) && string.length > 20
}

module.exports = {
    readJsonFileSync,
    getPosts,
    savePost,
    checkPost
}