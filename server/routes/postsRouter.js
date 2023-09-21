// const express = require('express');
// const { Post } = require('../db/models');

// const router = express.Router();

// router
//   .route('/')
//   .get(async (req, res) => {
//     const posts = await Post.findAll();
//     res.json(posts);
//   })
//   .post(async (req, res) => {
//     const newPost = await Post.create({ ...req.body, user_id: req.session?.user?.id || 1 });
//     res.json(newPost);
//   });

// router
//   .route('/:id')
//   .delete(async (req, res) => {
//     try {
//       await Post.destroy({ where: { id: req.params.id } });
//       res.sendStatus(200);
//     } catch (err) {
//       console.error(err);
//       res.sendStatus(500);
//     }
//   })
//   .patch(async (req, res) => {
//     try {
//       const { id } = req.params;
//       await Post.update({ ...req.body }, { where: { id } });
//       const updatedPost = await Post.findOne({ where: { id } });
//       return res.json(updatedPost);
//     } catch (err) {
//       console.error(err);
//       return res.sendStatus(500);
//     }
//   });

// module.exports = router;
