import React from "react";

import { Parallax } from "react-scroll-parallax";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import BookSectionBg from "../..//resources/background/reader-background.png";

function BookSection() {
    return (
        <Parallax y={[0, -100]}>
            <section className="books-section">
                <img
                    src={BookSectionBg}
                    className="books-background"
                    alt="reader-background"
                />
                <div className="books-content">
                    <h1>Stunning Books</h1>
                    <h3>A huge collection of popular books</h3>
                    <p>
                        The endless source of knowledge, information,
                        entertainment, and training are books. Before the age of
                        the internet, books were the most dominating source of
                        knowledge. But of course, with technology, the forms of
                        books have changed, and books have become more
                        accessible to everyone.
                    </p>
                    <div className="btn-1">More Books ...</div>
                </div>
                <div className="books-cards">
                    <div className="book-card">
                        <div className="card-wrapper">
                            <img
                                src="https://images.pexels.com/photos/4132936/pexels-photo-4132936.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="book cover"
                            />
                            <div className="card-header">
                                <div className="date">
                                    <span className="day">12</span>
                                    <span className="month">Aug</span>
                                    <span className="year">2016</span>
                                </div>
                                <ul className="menu-content">
                                    <li>
                                        <FavoriteBorderIcon className="menu-icon" />
                                    </li>
                                    <li>
                                        <BookmarkIcon className="menu-icon" />
                                    </li>
                                </ul>
                            </div>
                            <div className="card-data">
                                <div className="content">
                                    <span className="author">Jane Doe</span>
                                    <h1 className="title">
                                        <p>
                                            Stranger Things: The sound of the
                                            Upside Down
                                        </p>
                                    </h1>
                                    <p className="text">
                                        The antsy  of Netflix will
                                        eagerly anticipate the digital release
                                        of the Survive soundtrack, out today.
                                    </p>
                                    <a
                                        href="google.com"
                                        className="read-more-btn"
                                    >
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="book-card">
                        <div className="card-wrapper">
                            <img
                                src="https://images.pexels.com/photos/4132936/pexels-photo-4132936.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="book cover"
                            />
                            <div className="card-header">
                                <div className="date">
                                    <span className="day">12</span>
                                    <span className="month">Aug</span>
                                    <span className="year">2016</span>
                                </div>
                                <ul className="menu-content">
                                    <li>
                                        <FavoriteBorderIcon className="menu-icon" />
                                    </li>
                                    <li>
                                        <BookmarkIcon className="menu-icon" />
                                    </li>
                                </ul>
                            </div>
                            <div className="card-data">
                                <div className="content">
                                    <span className="author">Jane Doe</span>
                                    <h1 className="title">
                                        <p>
                                            Stranger Things: The sound of the
                                            Upside Down
                                        </p>
                                    </h1>
                                    <p className="text">
                                        The antsy of Netflix will
                                        eagerly anticipate the digital release
                                        of the Survive soundtrack, out today.
                                    </p>
                                    <a
                                        href="google.com"
                                        className="read-more-btn"
                                    >
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="book-card">
                        <div className="card-wrapper">
                            <img
                                src="https://images.pexels.com/photos/4132936/pexels-photo-4132936.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="book cover"
                            />
                            <div className="card-header">
                                <div className="date">
                                    <span className="day">12</span>
                                    <span className="month">Aug</span>
                                    <span className="year">2016</span>
                                </div>
                                <ul className="menu-content">
                                    <li>
                                        <FavoriteBorderIcon className="menu-icon" />
                                    </li>
                                    <li>
                                        <BookmarkIcon className="menu-icon" />
                                    </li>
                                </ul>
                            </div>
                            <div className="card-data">
                                <div className="content">
                                    <span className="author">Jane Doe</span>
                                    <h1 className="title">
                                        <p>
                                            Stranger Things: The sound of the
                                            Upside Down
                                        </p>
                                    </h1>
                                    <p className="text">
                                        The antsy  of Netflix will
                                        eagerly anticipate the digital release
                                        of the Survive soundtrack, out today.
                                    </p>
                                    <a
                                        href="google.com"
                                        className="read-more-btn"
                                    >
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="book-card">
                        <div className="card-wrapper">
                            <img
                                src="https://images.pexels.com/photos/4132936/pexels-photo-4132936.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="book cover"
                            />
                            <div className="card-header">
                                <div className="date">
                                    <span className="day">12</span>
                                    <span className="month">Aug</span>
                                    <span className="year">2016</span>
                                </div>
                                <ul className="menu-content">
                                    <li>
                                        <FavoriteBorderIcon className="menu-icon" />
                                    </li>
                                    <li>
                                        <BookmarkIcon className="menu-icon" />
                                    </li>
                                </ul>
                            </div>
                            <div className="card-data">
                                <div className="content">
                                    <span className="author">Jane Doe</span>
                                    <h1 className="title">
                                        <p>
                                            Stranger Things: The sound of the
                                            Upside Down
                                        </p>
                                    </h1>
                                    <p className="text">
                                        The antsy of Netflix will
                                        eagerly anticipate the digital release
                                        of the Survive soundtrack, out today.
                                    </p>
                                    <a
                                        href="google.com"
                                        className="read-more-btn"
                                    >
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Parallax>
    );
}

export default BookSection;
