const Blog = require('../models/blog');


// Get All Blogs Acion
exports.blog_index = (req, res) => {

    Blog.find().sort({ createdAt: -1 })
        .then((blogs) => {
            res.render('index', { title: 'All Blogs', blogs: blogs });
        })
        .catch(err => console.log(err))
}

// Get Single Blog Acion
exports.blog_details = (req, res) => {

    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', {
                blog: result,
                title: 'Blog Details'
            })
        })
        .catch(err => { console.log(err) })
}

// Creating Blog Page Acion (GET)
exports.blog_create_get = (req, res) => {

    res.render('create', { title: 'Create a New Blog' });
}

// Creating Blog Page Acion (POST)
exports.blog_create_post = (req, res) => {

    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch(err => console.log(err))
}

// Delete Blog Action
exports.blog_delete = (req, res) => {

    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' })
        })
        .catch(err => console.log(err))
}