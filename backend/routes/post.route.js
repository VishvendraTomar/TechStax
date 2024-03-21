const { Router } = require("express");
const { PostModel } = require("../models/post.model");
const postRouter = Router();

postRouter.get('/posts', async (req, res) => {
  try {
    // Fetch all posts from the database
    const posts = await Post.find();

    // Respond with the fetched posts
    res.status(200).json(posts);
  } catch (error) {
    // Handle errors
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});




postRouter.post('/addpost', async (req, res) => {
  try {
    // Extract title and content from request body
    const { title, content } = req.body;

    // Create a new post object
    const newPost = new Post({
      title,
      content,
    });

    // Save the post to the database
    await newPost.save();

    // Respond with success message
    res.status(201).json({ message: 'Post added successfully' });
  } catch (error) {
    // Handle errors
    console.error('Error adding post:', error);
    res.status(500).json({ error: 'Failed to add post' });
  }
});



postRouter.delete("/delete/:postID", async (req, res) => {
  try {
    const { postID } = req.params;
    const { userID } = req.body;

    const post = await PostModel.findOneAndDelete({ _id: postID, userID });

    if (!post) {
      res.status(400).json({ msg: "Post not found" });
    } else {
      res.status(200).json({ msg: "Post deleted" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = { postRouter };
