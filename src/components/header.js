import React from 'react';

const Header = () => {
    return (
        <div className="d-grid row mb-2 mt-4">
            <div className="col-12">
                <p className="text-center mb-2">Let's add what you have to do!</p>
            </div>
            <div className="col-12">
                <p className="text-center mx-auto">
                    Fill the input and click button or "Enter" to add a new task 
                    <br/>
                    into the list.
                <br/>
                    To mark as completed, just click directly to the task
                </p>
            </div>
            
        </div>
    );
}

export default Header;
