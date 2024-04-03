const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');


//http://localhost:3001/
router.get('/', async (req, res) => {
try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));
        console.log(posts)
        res.render('homepage', {
        posts,
        logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});






//http://localhost:3001/Post/5

router.get('/post/:id', async (req, res) => {
try {
    const postData = await Post.findByPk(req.params.id, {
        include: [
            {
                model: User,
                attributes: ['username'],
            },
        ],
    });

const post = postData.get({ plain: true });
console.log(post)
res.render('post', {
    ...post,
    logged_in: req.session.logged_in    
});
} catch (err) {
    res.status(500).json(err);
}
});

//http://localhost:3001/profile
// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.friendByPk(req.session.user_id, {
            attributes: { exclude: ['password']},
            include: [{ model: Post }],
        });

        const user = userData.get({ plain: true });
            console.log(user)
            res.render('profile', {
                ...user,
                logged_in: true
            });
    } catch (err) {
        res.status(500).json(err);
    }
});


//http://localhost:3001/login
router.get('/login', (req, res) => {
if (req.session.logged_in) {
    res.redirect('/profile');
    return;
}

res.render('login');
});

//http://localhost:3001/page1
router.get("/page1",async(req,res)=>{
    res.render("page1")
})

module.exports = router;