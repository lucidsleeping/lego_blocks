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
        case 'help':
          typeText(`
            <div class="terminal-content">
              <p>Available commands:</p>
              <ul>
                <li>help - Display available commands</li>
                <li>date - Display current date and time</li>
                <li>about - Display information about this terminal</li>
                <!-- Add more commands as needed -->
              </ul>
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

        case 'about':
          typeText(`
            <div class="terminal-content">
              <p>This terminal is a simple demonstration.</p>
            </div>
          `);
          break;

        case 'clear' : 
            location.reload()
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
          setTimeout(type, 10); // Adjust typing speed here (in milliseconds)
        }
      }
  
      type();
    }
  
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
  