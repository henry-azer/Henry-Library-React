import React, { useEffect, useState, useRef } from "react";

import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

import TabletFrameImg from "../..//resources/images/tablet-frame.png";
import ReadingRulesVid from "../..//resources/videos/reading-rules.mp4";

function TutorialSection() {
    const videoRef = useRef(null);
    const [isPlayingVideo, setPlayingVideo] = useState(true);
    const [isModalVideoOpen, setModalVideo] = useState(false);

    useEffect(() => {
        isPlayingVideo ? videoRef.current.play() : videoRef.current.pause();
    }, [isPlayingVideo]);

    return (
        <section className="tutorial-section">
            <h1
                className="tutorial-h1"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos="fade-up"
            >
                Be ready. to the journey!
            </h1>
            <div className="tutorial-wrapper">
                <div
                    className="tutorial-video"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos="fade-right"
                >
                    <img
                        className="tablet-frame"
                        src={TabletFrameImg}
                        alt="tablet"
                    />
                    <video
                        loop
                        muted
                        ref={videoRef}
                        src={ReadingRulesVid}
                        className="reading-video"
                    ></video>
                    {isPlayingVideo ? (
                        <PauseCircleIcon
                            className="play-icon"
                            onClick={() => setPlayingVideo(false)}
                        />
                    ) : (
                        <PlayCircleIcon
                            className="play-icon"
                            onClick={() => setPlayingVideo(true)}
                        />
                    )}
                </div>
                <div
                    className="tutorial-document"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos="fade-left"
                >
                    <div className="reading-rule">
                        <h1>- Find the reason you need to read:</h1>
                        <p>
                            &emsp;&emsp;Reading has a purpose even if it's just
                            for entertainment so fine to yours you have no idea
                            why you're angry in the morning read a book about it
                            you don't know how to handle stress at work read a
                            book about it.
                        </p>
                    </div>
                    <div className="reading-rule">
                        <h1>- Make it easy to read:</h1>
                        <p>
                            &emsp;&emsp;Read a couple of pages every time you
                            take a dump you can fish of looking like a month
                            okay you're turning shit and the knowledge here if
                            you're commuting to work keep a look and your back
                            this way you can make a habit of reading
                        </p>
                    </div>
                    <div className="reading-rule">
                        <h1>- Starts with good books:</h1>
                        <p>
                            &emsp;&emsp;There are millions of books out there
                            most of them are bad or recycled still that leaves
                            you with a ton of really good books on any kind of
                            topic whichever your interest is you can find the
                            top five books on that topic on line line
                        </p>
                    </div>
                </div>
            </div>
            <div
                className="full-tutorial"
                data-aos-delay="80"
                data-aos-duration="2000"
                data-aos="fade-up"
            >
                <PlayArrowIcon
                    className="watch-button"
                    onClick={() => setModalVideo(true)}
                />
                <h1 onClick={() => setModalVideo(true)}>
                    Watch the full video
                </h1>
            </div>
            <div className="popup-tutorial">
                <ModalVideo
                    autoplay
                    channel="youtube"
                    isOpen={isModalVideoOpen}
                    videoId="ndbXgQFhfn8"
                    onClose={() => setModalVideo(false)}
                />
            </div>
        </section>
    );
}

export default TutorialSection;
