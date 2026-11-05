import { useState, useEffect } from "react";
import { format } from "date-fns";
import "./App.css";

function App() {
  // Store the current date and time
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the timer
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <div className="clock-card">
        <h1>🌈 Dynamic Color Clock</h1>

        <h2>{format(currentTime, "EEEE, MMMM dd, yyyy")}</h2>

        <p>{format(currentTime, "hh:mm:ss a")}</p>
      </div>
    </div>
  );
}

export default App;