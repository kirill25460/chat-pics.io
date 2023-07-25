import example from '../example.json';
import { GlobalStyle } from './GlobalStyles';
import { MessageArea } from './MessageArea/MessageArea';
// console.log(example.username)
  example.comments.map(ex => console.log(ex.user))

export const App = () => {
  return (
    <GlobalStyle>
       
      {example.comments.map(ex =>
       <MessageArea 
       postId={ex.postId}
       user={ex.user} 
       body={ex.body}/>
      )}
    
    </GlobalStyle>
  );
};
