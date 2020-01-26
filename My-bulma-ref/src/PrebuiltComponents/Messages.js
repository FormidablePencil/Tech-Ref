import React from 'react';

const Messages = () => {
  return (
    <div>
      <div className="container">

        <div className="section">
          <div className="columns">
            <div className="column is-half">
              <article className="message is-small">
                <div className="message-header">
                  <p>className="message-header"</p>
                  <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                  className="message-body" 
                  <br /> 
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et asperiores repellendus necessitatibus pariatur quod iusto possimus! Natus consequuntur alias incidunt in aut, voluptate tempora tenetur, ipsum consequatur sunt corporis nisi!
                </div>
              </article>
            </div>

            <div className="columns">
              <div className="section">

                <article className="message is-info">
                  <div className="message-body">
                    Just the body without the "message-header" div. 
                    <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati eius voluptatem illum necessitatibus veniam aut veritatis beatae quae, dicta quidem laborum praesentium quisquam? Laboriosam, fuga. Blanditiis itaque eius velit cumque!
                  </div>
                </article>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Messages;