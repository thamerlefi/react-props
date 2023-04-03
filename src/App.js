
import Profile from "./profile/Profile";
import me from './profile/me.jpg'

function App() {
  function handleName(msg) {
    alert("my name is " + msg);
  }
  const bio = ` Thamer Lefi is a driven and passionate individual with a solid educational background in automation. 
              With a fundamental license in automation, Thamer has honed his skills in the field and is now pursuing his passion for 
              web development. He is currently enrolled in GOMYCODE's Full-Stack JavaScript bootcamp, 
              where he is gaining valuable experience and knowledge in web development.`;
  return (
    <div className="App">
      <Profile fullName="Thamer lefi" bio={bio} profession="mern stack" handle={handleName}>
        <img src={me} alt="" style={{ width: "200px", objectFit: "cover",
                            borderRadius:'50%', border:'3px solid yellow',}} />
      </Profile>
    </div>
  );
 }

// Thamer is a quick learner and a team player, who is committed to delivering high-quality work. 
// He has a strong work ethic and is always eager to take on new challenges to expand his skillset. 
// With his dedication and passion for technology, Thamer is poised to become a successful Full-Stack Developer in the future.

export default App;
