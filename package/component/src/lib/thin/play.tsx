
import { Icon } from "../../index";

/**
 * A component that renders the `play` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/play?s=thin play}
 * @preview ![play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/play.svg)
 */
const Play: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64.7 52.7c-9.9-6-22.2-6.3-32.3-.6S16 68.4 16 80l0 352c0 11.6 6.3 22.2 16.3 27.9s22.5 5.4 32.3-.6l288-176c9.5-5.8 15.3-16.2 15.3-27.3s-5.8-21.5-15.3-27.3l-288-176zM24.5 38.1C39.7 29.6 58.2 30 73 39L361 215c14.3 8.7 23 24.2 23 41s-8.7 32.2-23 41L73 473c-14.8 9.1-33.4 9.4-48.5 .9S0 449.4 0 432L0 80C0 62.6 9.4 46.6 24.5 38.1z" />
    </Icon>
);

export default Play;