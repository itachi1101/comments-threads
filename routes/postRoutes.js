import express from 'express'
const postRouter = express.Router()
import {getPosts} from '../controllers/postController.js'
postRouter.get('/all',getPosts)

export default postRouter