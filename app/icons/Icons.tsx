// Thin Icons

export const ThinInstagramIcon = () => {
    return (
        <a href="https://www.instagram.com/aka.jimena" target="_blank" rel="noopener noreferrer">
            <span className={`icon-[arcticons--instagram] text-xl`}></span>
        </a>
    );
}

export const ThinTikTokIcon = () => {
    return (
        <a href="https://www.tiktok.com/@aka.jimena" target="_blank" rel="noopener noreferrer">
            <span className={`icon-[arcticons--tiktok] text-xl`}></span>
        </a>
    );
}

export const ThinYoutubeIcon = ({ onClick }: { onClick?: () => void }) => {
    return (
        <span 
            className={`icon-[arcticons--youtube] text-xl cursor-pointer`} 
            onClick={onClick}
        ></span>
    );
}

export const ThinThreadsIcon = () => {
    return (
        <a href="https://www.threads.net/@aka.jimena" target="_blank" rel="noopener noreferrer">
            <span className={`icon-[arcticons--instagram-threads] text-xl`}></span>
        </a>
    );
}

export const ThinGitHubIcon = () => {
    return (
        <a href="https://github.com/samantha-jimenez" target="_blank" rel="noopener noreferrer">
            <span className={`icon-[arcticons--github] text-xl`}></span>
        </a>
    );
}

export const ThinLinkedInIcon = () => {
    return (
        <a href="https://www.linkedin.com/in/samanthabjimenez/" target="_blank" rel="noopener noreferrer">
            <span className={`icon-[arcticons--linkedin] text-xl`}></span>
        </a>
    );
}

export const ThinStravaIcon = () => {
    return (
        <a href="https://strava.app.link/lxN0E2NT0Ob" target="_blank" rel="noopener noreferrer">
            <span className={`icon-[arcticons--strava] text-xl`}></span>
        </a>
    );
}

export const ThinGoogleMailIcon = () => {
    return (
        <a href="mailto:SamanthaB.Jimenez@gmail.com" target="_blank" rel="noopener noreferrer">
            <span className={`icon-[arcticons--google-mail] text-xl`}></span>
        </a>
    );
}

export const ThinPorftolioIcon = () => {
    return (
        <a href="https://samantha-jimenez.netlify.app/" target="_blank" rel="noopener noreferrer">
            <span className={`icon-[arcticons--emoji-web] text-xl`}></span>
        </a>
    );
}

// Regular Icons

export const InstagramIcon = () => {
    return (
        <a href="https://www.instagram.com/aka.jimena" target="_blank" rel="noopener noreferrer">
            <span className={`icon-[line-md--instagram] text-xl`}></span>
        </a>
    );
}

export const GoodReadsIcon = () => {    
    return (
        <a href="https://www.goodreads.com/user/show/183397302-samantha" target="_blank" rel="noopener noreferrer">
            <span className={`icon-[mdi--goodreads] text-xl font-light opacity-70`}></span>
        </a>
    );
}   