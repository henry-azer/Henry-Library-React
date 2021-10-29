import React from "react";
 
function ServicesSection() {
    return (
        <section className="services-section">
            <div className="services-background">
                <div className="services-title">
                    <h1>Full Services</h1>
                </div>
                <div className="services-cards">
                    <figure
                        className="service-card"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos="slide-up"
                    >
                        <img
                            src="https://images.pexels.com/photos/6601770/pexels-photo-6601770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="book-service"
                        />
                        <figcaption>
                            <h3>E-Books</h3>
                            <p>
                                You can access a very large number of e-books
                                that you can read from smart devices such as
                                mobile phones, tablets and computers easily via
                                the Internet.
                            </p>
                        </figcaption>
                    </figure>
                    <figure
                        className="service-card"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        data-aos="slide-up"
                    >
                        <img
                            src="https://images.pexels.com/photos/3471028/pexels-photo-3471028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="book-service"
                        />
                        <figcaption>
                            <h3>Reading Club</h3>
                            <p>
                                You can join our reading club, as it offers many
                                advantages that give you all the opportunities
                                to organize, share your opinion, and borrow an
                                endless number of books.
                            </p>
                        </figcaption>
                    </figure>
                    <figure
                        className="service-card"
                        data-aos-delay="150"
                        data-aos-duration="1000"
                        data-aos="slide-up"
                    >
                        <img
                            src="https://images.pexels.com/photos/1848924/pexels-photo-1848924.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="book-service"
                        />
                        <figcaption>
                            <h3>Buy & Borrow</h3>
                            <p>
                                You can buy and order books, and there are
                                delivery services, and you can also borrow books
                                and return them during specific dates that are
                                agreed upon when borrowing.
                            </p>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <hr />
        </section>
    );
}

export default ServicesSection;
