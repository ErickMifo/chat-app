import React from 'react';
import './styles.css';



const TextContainer = ({ users }) => (



  <div className="textContainer">


    { users

        ? (

          <div>

            <h1>Pessoas na sala:</h1>

            <div className="activeContainer">

              <h2>

                {users.map(({name}) => (

                  <div key={name} className="activeItem">

                    {name}

                  </div>

                ))}

              </h2>

            </div>

          </div>

        )

        : null

    }

  </div>

);



export default TextContainer;