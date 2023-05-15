import { Profile } from "./Profile/Profile";
import user from "./Profile/user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "./Statistics/data.json";
// import { FriendList } from "./Friend-list/FriendList";
// import friends from "./Friend-list/friends.json";
// import { TransactionHistory } from "./Transaction-History/TransactionHistory";
// import transactions from "./Transaction-History/transactions.json";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection:'column'
      }}
    >
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      
      <Statistics title="Upload stats" stats={data} />
      
      {/* <FriendList friends={friends}/>

      <TransactionHistory items={transactions} /> */}

    </div>
    
  );
};
