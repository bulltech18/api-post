'use strict'
const Comment = use('App/Models/Comment')
class CommentController {
    async store({request, response, auth}){
        const data = request.only(['body', 'post_id'])
        const user = await auth.getUser()
        const comment = new Comment()
        comment.body = data['body']
        comment.post_id = data['post_id']
        comment.user_id = user['id']
        comment.save()

        return response.created({
            status: true,
            data: comment
        })
    }
    
}

module.exports = CommentController
