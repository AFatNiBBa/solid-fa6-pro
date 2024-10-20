
import { Icon } from "../../index";

/**
 * A component that renders the `clapperboard-play` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clapperboard-play?s=regular clapperboard-play}
 * @preview ![clapperboard-play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/clapperboard-play.svg)
 */
const ClapperboardPlay: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 416c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-208L48 208l0 208zM336 160l64 0 64-64c0-8.8-7.2-16-16-16l-32 0-80 80zm-96 0l80-80-64 0-80 80 64 0zM80 160l80-80L96 80 48 128l0 32 32 0zM512 96l0 64 0 24 0 24 0 208c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 208l0-24 0-24L0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64zM216.5 241.9c5.2-2.8 11.5-2.5 16.4 .8l96 64c4.4 3 7.1 8 7.1 13.3s-2.7 10.3-7.1 13.3l-96 64c-4.9 3.3-11.2 3.6-16.4 .8s-8.5-8.2-8.5-14.1l0-128c0-5.9 3.2-11.3 8.5-14.1z" />
    </Icon>
);

export default ClapperboardPlay;