document.addEventListener('DOMContentLoaded', function() {
    const terminalBody = document.getElementById('terminal-body');
    const commandInput = document.getElementById('command-input');
  
    // Function to handle the user's command
    function handleCommand(command) {
      const output = document.createElement('div');
      output.classList.add('terminal-content');
      output.innerHTML = `<span class="terminal-prompt">$</span><span class="terminal-command">${command}</span>`;
      terminalBody.appendChild(output);
      commandInput.value = '';
  
      // Handle different commands
      switch (command) {   
        case 'start':
          typeText(`
          <div class="terminal-prompt">
            <p>hello_wrld,</p> <br> 
            this is jyothin. <br> 
            use the following commands to get to know about me. <br> 
            </div>
            <div class="terminal-body">
            jyothin &emsp;  
            socials &emsp; 
            education &emsp; 
            lc (licenses&certifications) &emsp;  
            skills  &emsp; 
            projects  
                
            </div>
             <div class="terminal-prompt">
                or try these other commands 
            </div>

            <div class="terminal-body">
                help &emsp;
                clear &emsp;
                date  <br>  
            </div>
          `);
          break;
            
        case 'date':
          typeText(`
            <div class="terminal-content">
              <p>${new Date()}</p>
            </div>
          `);
          break;

        case 'jyothin':
          typeText(`
            <div class="terminal-prompt">
            | about me. <br> 
            </div>

            <div class="terminal-content">
            <p>A passionate student interested in emerging technologies. Pursing a computer science degree.
            Worked on multiple projects based on college curriculum which incorporates different
            concepts which includes Natural language processing, machine learning, data visualisation, data
            analysis, web development & hosting, GUI development. A commanding leader and a team-
            player who can meet deadlines.</p>
            </div>
          `);
          break;

        case 'socials':
          typeText(`
            <div class="terminal-prompt">
            | you can find me here. <br> 
            </div>
            <div class="terminal-content">
            <p>1. github - <a href="https://github.com/lucidsleeping">https://github.com/lucidsleeping</a></p>
            <p>2. linkedin - <a href="https://www.linkedin.com/in/lucidsleeparalysis/"> https://www.linkedin.com/in/lucidsleeparalysis/</a></p>
            <p>3. instagram - <a href="https://www.instagram.com/weirdpolariods/">https://www.instagram.com/weirdpolariods</a></p>
            </div>
          `);
          break;

        case 'education':
          typeText(`
            <div class="terminal-prompt">
            | heres my educational info. <br> 
            </div>
            <div class="terminal-content">
            <p>kl university (bachelor of technology, computer science)</p>
            <p>GPA: 9.38* (avg 7 of semesters)</p>
            </div>
          `);
          break;

        case 'lc':
          typeText(`
            <div class="terminal-prompt">
            | heres my licenses&certifications that i've worked on. <br> 
            </div>
            <div class="terminal-content">
            <p>1. tensorflow developer certificate (tensorflow) </p>
            <p>2. cloud digital leader (google) </p>
            </div>
          `);
          break;

        case 'skills':
          typeText(`
            <div class="terminal-prompt">
            | i'm always learning. But here are some of the skills i've got.<br> 
            </div>
            <div class="terminal-content">
            <p>1. natural language proccessing</p>
            <p>2. machine learning</p>
            <p>3. object oriented programming (oop)</p>
            </div>
          `);
          break;

        case 'projects':
          typeText(`
            <div class="terminal-prompt">
            | here are some of the recent projects. you can always find more on my github. :) <br> 
            </div>
            <div class="terminal-content">
            <p>1. Name-State Classification</p>
            <p><a href="https://github.com/lucidsleeping/Name-State-Classification">
                (https://github.com/lucidsleeping/Name-State-Classification)</a></p>

            <p>2. Terrain-Detection-Using-Machine-Learning </p>
                
            <p><a href="https://github.com/lucidsleeping/Terrain-Detection-Using-Machine-Learning">
            (https://github.com/lucidsleeping/Terrain-Detection-Using-Machine-Learning)</a></p>

            <p>3. Music-generation-using-Machine-learning </p>
                
            <p><a href="https://github.com/lucidsleeping/Music-generation-using-Machine-learning">
                (https://github.com/lucidsleeping/Music-generation-using-Machine-learning)</a></p>

            </div>
          `);
          break;

        case 'clear' : 
            location.reload()

        case 'help' : 
            typeText(`
            <div class="terminal-prompt">
                use the following commands to get to know about me. <br> 
            </div>

            <div class="terminal-body">
                jyothin &emsp;  
                socials &emsp; 
                education &emsp; 
                lc (licenses&certifications) &emsp;  
                skills  &emsp; 
                projects  <br> 
            </div>

            <div class="terminal-prompt">
                or try these other commands 
            </div>

            <div class="terminal-body">
                help &emsp;
                clear &emsp;
                date  <br>  
            </div>
            `);
            break;
        

        default:
          typeText(`
            <div class="terminal-content">
              <p>Command not found: ${command}</p>
            </div>
          `);
          break;
      }
  
      // Scroll to the bottom of the terminal
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  
    // Function to simulate typing effect
    function typeText(content) {
      const chars = content.split('');
      let index = 0;
      let output = '';
  
      function type() {
        if (index < chars.length) {
          output += chars[index++];
          terminalBody.lastChild.innerHTML = output;
          terminalBody.scrollTop = terminalBody.scrollHeight;
          setTimeout(type, 6.9); // Adjust typing speed here (in milliseconds)
        }
      }
  
      type();
    }
    

    setTimeout(function() {
      handleCommand('start');
    }, 1000);

    // Handle user input
    commandInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        const command = commandInput.value.trim();
        if (command) {
          handleCommand(command);
        }
      }
    });
  });
  
