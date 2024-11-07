let is24HourFormat = false; // Initially, the clock is in 12-hour AM/PM format

        function updateClock() {
          const timeElement = document.getElementById('time');
          const currentTime = new Date();
        
          let hours = currentTime.getHours();
          let minutes = currentTime.getMinutes();
          let seconds = currentTime.getSeconds();
          let period = '';
        
          if (!is24HourFormat) {
            // Convert to 12-hour format and determine AM/PM
            period = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // If hours is 0, show 12 (midnight/noon)
          }
        
          // Format the time to always show two digits
          hours = hours < 10 ? '0' + hours : hours;
          minutes = minutes < 10 ? '0' + minutes : minutes;
          seconds = seconds < 10 ? '0' + seconds : seconds;
        
          timeElement.textContent = `${hours}:${minutes}:${seconds} ${!is24HourFormat ? period : ''}`;
        }
        
        function toggleFormat() {
          is24HourFormat = !is24HourFormat; // Toggle between 24-hour and 12-hour format
          updateClock(); // Immediately update the clock display after toggling
        }
        
        // Update the clock every second
        setInterval(updateClock, 1000);
        
        // Initial call to display the clock immediately
        updateClock();
        
        // Button event listener
        document.getElementById('toggleButton').addEventListener('click', toggleFormat);