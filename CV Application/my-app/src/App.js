import './App.css';

function App() {
  return (
    <div className="App">
             <h2>Create your resume below</h2>
        <h4>Use your first name and your last name to continue.</h4>
        
          <form action="file:///C:/Users/Minion-12/Documents/GitHub/mobileapp/CV%20Application/submitted.html">
            <div>Create a resume</div>
            
            <br></br>
            <label for="firstname">First Name:</label><br></br>
            <input type="text" name="fname"/><br></br>

            <label for="lastname">Last Name:</label><br></br>
            <input type="text" name="lname"/><br></br>

            <label for="workexperience">Work Experience:</label><br></br>
            <input type="text" name="work"/><br></br>

            <label for="education">Education:</label><br></br>
            <input type="text" id="educ" name="educ" /><br></br>

            <label for="skills">Skills:</label><br></br>
            <input type="text" id="skills" name="skills" /><br></br>

            <label for="workestablishment">Current Work Estabishment:</label><br></br>
            <input type="text" id="currw" name="currw" /><br></br>

            <label for="email">Email:</label><br></br>
            <input type="text" id="email" /><br></br><br></br>

            <input type="submit" value="Submit" />
          </form>
          
    </div>
    
  );
}

export default App;

<input type="button" value="Submit Resume" />