'use strict'

const CommentController = require("../app/Controllers/Http/CommentController")
const PostController = require("../app/Controllers/Http/PostController")

const Route = use('Route')

Route.post('/login', 'AuthController.login')
Route.resource('users', 'UserController').apiOnly().validator(new Map([
    [['users.store'], ['StoreUser']]
  ]))
  Route.resource('posts', 'PostController').apiOnly()

  //Route.post('/post', 'PostController.store' )
  Route.post('/comment', 'CommentController.store' )

  Route.get('/comment/get/:id', 'CommentController.getComments')
  
  Route.post('/user/get', 'AuthController.getUser')

  Route.delete('/post/delete/:id', 'PostController.delete')

  Route.delete('/comm/delete/:id', 'CommentController.delete')
