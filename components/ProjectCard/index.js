import Image from "next/image";
import googlePlay from "../../public/logos/google-play-logo.svg"
import appStore from "../../public/logos/app-store-logo.svg"
import youtube from "../../public/logos/youtube-logo.svg"

export default function ProjectCard({ title, color, description, image, side, appStoreLink, googlePlayLink, youtubeLink, link }) {

    return (
        <>
            {side == "left" && <div className="main-container left">
                <div className="project-container">
                    <div className="project-image">
                        <Image src={image} className="img" />
                    </div>
                    <div className="info-section">
                        <div className={`title ${color}`}>
                            {title}
                        </div>
                        <div className="description">
                            {description}
                        </div>
                        <div className="download-links">
                            {link !== "" && <div className="link">
                                <a href={link} target="_blank">Link</a>
                            </div>}
                            {googlePlayLink !== "" && <div className="logo">
                                <a href={googlePlayLink} target="_blank"><Image src={googlePlay} /></a>
                            </div>}
                            {appStoreLink !== "" && <div className="logo">
                                <a href={appStoreLink} target="_blank"> <Image src={appStore} /></a>
                            </div>}
                            {youtubeLink !== "" && <div className="logo">
                                <a href={youtubeLink} target="_blank"> <Image src={youtube} /></a>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            }
            {side == "right" && <div className="main-container right">
                <div className="project-container">
                    <div className="info-section">
                        <div className={`title ${color}`}>
                            {title}
                        </div>
                        <div className="description">
                            {description}
                        </div>
                        <div className="download-links">
                            {link !== "" && <div className="link">
                                <a href={link} target="_blank">Link</a>
                            </div>}
                            {googlePlayLink !== "" && <div className="logo">
                                <a href={googlePlayLink} target="_blank"><Image src={googlePlay} /></a>
                            </div>}
                            {appStoreLink !== "" && <div className="logo">
                                <a href={appStoreLink} target="_blank"> <Image src={appStore} /></a>
                            </div>}
                            {youtubeLink !== "" && <div className="logo">
                                <a href={youtubeLink} target="_blank"> <Image src={youtube} /></a>
                            </div>}
                        </div>
                    </div>
                    <div className="project-image">
                        <Image src={image} className="img" />
                    </div>
                </div>
            </div>}
        </>
    )
}
