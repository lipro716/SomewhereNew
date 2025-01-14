const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const berkeleyRouter = require('./berkeley.js')
const oaklandRouter = require('./oakland.js')
const sanFranciscoRouter = require('./sanfrancisco.js')
const sanJoseRouter = require('./sanjose.js')
const spotRouter = require('./singleSpot.js')
const createListing = require('./createlisting')
const editListing = require('./editlisting')
const deleteListing = require('./deletelisting')
const createReview = require('./createreview')
const allSpots = require('./allSpots')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/berkeley', berkeleyRouter);

router.use('/oakland', oaklandRouter);

router.use('/sanfrancisco', sanFranciscoRouter);

router.use('/sanjose', sanJoseRouter);

router.use('/spot', spotRouter)

router.use('/createlisting', createListing)

router.use('/editlisting', editListing)

router.use('/deletelisting', deleteListing)

router.use('/createreview', createReview)

router.use('/allspots', allSpots)


// router.post('/test', (req, res) => {
//     res.json({ requestBody: req.body });
// });

module.exports = router;
// // GET /api/set-token-cookie
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'Demo-lition'
//         },
//     })
//     setTokenCookie(res, user);
//     return res.json({ user });
// }));

// // GET /api/restore-user
// const { restoreUser } = require('../../utils/auth.js');
// router.get(
//     '/restore-user',
//     restoreUser,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );

// // GET /api/require-auth
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//     '/require-auth',
//     requireAuth,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );