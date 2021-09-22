import React, { useState, useEffect } from "react";

const LeftNav = () => {
    const [today, setDate] = useState(new Date().toString()); // Save the current date to be able to trigger an update

    useEffect(() => {
        const timer = setInterval(() => {
            // Creates an interval which will update the current data every minute
            // This will trigger a rerender every component that uses the useDate hook.
            setDate(new Date());
        }, 60 * 1000);
        return () => {
            clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
        };
    }, []);

    return (
        <div className="left-nav">
            <div className="date-container">
                {today}
            </div>
        </div>
    );
};

export default LeftNav;
