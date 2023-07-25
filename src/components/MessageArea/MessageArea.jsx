//  import example from '../example.json'
// console.log(example.comments)
  // example.comments.map(ex => console.log(ex.id))
  // example.comments.map(ex => console.log(ex.body))

import {Message} from './MessageArea.styles'

export const MessageArea = ({body,postId, user:{id, username}}) => {
return (
<Message>

<p> postId : {postId}</p>
<p> User Id : {id}</p>
<p> username : {username}</p>
<p> message : {body}</p>
   

</Message>
);
};
