
import { Icon } from "../../index";

/**
 * A component that renders the `bong` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bong?s=sharp-thin bong}
 * @preview ![bong](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bong.svg)
 */
const Bong: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M118.7 224c-41.3 19-74.1 53.5-90.7 96l328 0c-16.6-42.6-49.3-77.1-90.7-96l-9.3-4.3 0-10.3L256 16 128 16l0 193.4 0 10.3-9.3 4.3zM272 16l0 193.4c25.4 11.6 47.8 28.6 65.7 49.6l.6-.6L396.7 200l-26.3-26.3-5.7-5.7L376 156.7l5.7 5.7 32 32 32 32 5.7 5.7L440 243.3l-5.7-5.7L408 211.3l-58.3 58.3-2 2C370.5 303.2 384 342 384 384c0 49.2-18.5 94-48.9 128L48.9 512C18.5 478 0 433.2 0 384c0-77.5 45.9-144.3 112-174.6L112 16 88 16l-8 0L80 0l8 0 24 0 16 0L256 0l16 0 24 0 8 0 0 16-8 0-24 0zm88 320L24 336c-.5 0-.9 0-1.3-.1C18.3 351.2 16 367.3 16 384c0 42.6 15.1 81.6 40.2 112l271.5 0c25.1-30.4 40.2-69.4 40.2-112c0-16.7-2.3-32.8-6.7-48.1c-.4 .1-.9 .1-1.3 .1z" />
    </Icon>
);

export default Bong;