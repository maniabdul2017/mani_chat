// import { ChatEngine } from "react-chat-engine";
// import ChatFeed from "./components/ChatFeed";
// import LoginForm from "./components/LoginForm";
// import styled from "styled-components";
// import { NikeCard } from "./components/Icard";
// import "./App.css";

// const projectID = "c326410e-f2f6-4761-866b-33115da9b8e4";

// const AppContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-top: 200px;
// `;
// const App = () => {
//   if (!localStorage.getItem("username"))
//     return (
//       <AppContainer>
//         <NikeCard />
//       </AppContainer>
//     );

//   return (
//     <ChatEngine
//       height="100vh"
//       projectID={projectID}
//       userName={localStorage.getItem("username")}
//       userSecret={localStorage.getItem("password")}
//       renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
//       onNewMessage={() =>
//         new Audio(
//           "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
//         ).play()
//       }
//     />
//     // <ChatEngine
//     //   height="100vh" // bcoz this is gonna be the full project that why height is 100vh
//     //   projectID="c326410e-f2f6-4761-866b-33115da9b8e4"
//     //   userName="test"
//     //   userSecret="test"
//     //   renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
//     // />
//   );
// };

// export default App;

import { useState } from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import styled from "styled-components";
import { NikeCard } from "./components/Icard";
import "./App.css";

const projectID = "3fe43176-07c4-473b-b319-a14cd9c1ece4";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
`;

const LogoutButton = ({ handleLogout }) => {
  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("username"))
  );

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.reload();
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() =>
              new Audio(
                "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
              ).play()
            }
          />
          <LogoutButton handleLogout={handleLogout} />
        </div>
      ) : (
        <AppContainer>
          <NikeCard />
        </AppContainer>
      )}
    </div>
  );
};

export default App;
