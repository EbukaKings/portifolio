import React from 'react';

function Accordian() {
  return (
    <div>
      <section id="questions" className="p-5">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion accordion-flush" id="questions">
            {/* Item 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-one">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-one"
                  aria-expanded="false"
                  aria-controls="question-one"
                >
                  Question 1: What is this?
                </button>
              </h2>
              <div
                id="question-one"
                className="accordion-collapse collapse"
                aria-labelledby="heading-one"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Placeholder content for this question. This is the body of the first FAQ item.
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-two">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-two"
                  aria-expanded="false"
                  aria-controls="question-two"
                >
                  How much does it cost to attend?
                </button>
              </h2>
              <div
                id="question-two"
                className="accordion-collapse collapse"
                aria-labelledby="heading-two"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa autem aliquam rerum, commodi vitae, in, sapiente tenetur temporibus magni facilis ex possimus vero dolorum incidunt minima quas dicta nobis ullam?
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-three">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-three"
                  aria-expanded="false"
                  aria-controls="question-three"
                >
                  What do I need to know?
                </button>
              </h2>
              <div
                id="question-three"
                className="accordion-collapse collapse"
                aria-labelledby="heading-three"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet totam quo vitae deserunt nobis aspernatur praesentium commodi impedit reprehenderit, odit sed aut officiis atque dicta quis veniam exercitationem nostrum modi!
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-four">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-four"
                  aria-expanded="false"
                  aria-controls="question-four"
                >
                  Can you work for free?
                </button>
              </h2>
              <div
                id="question-four"
                className="accordion-collapse collapse"
                aria-labelledby="heading-four"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet totam quo vitae deserunt nobis aspernatur praesentium commodi impedit reprehenderit, odit sed aut officiis atque dicta quis veniam exercitationem nostrum modi!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Accordian;
