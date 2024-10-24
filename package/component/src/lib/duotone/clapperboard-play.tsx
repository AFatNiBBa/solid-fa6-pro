
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clapperboard-play` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clapperboard-play?s=duotone clapperboard-play}
 * @preview ![clapperboard-play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clapperboard-play.svg)
 */
const ClapperboardPlay: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160l6.1 0 67.9 0 92.1 0 67.9 0 92.1 0 67.9 0L512 160l0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 160zm208 96l0 128c0 5.9 3.2 11.3 8.5 14.1s11.5 2.5 16.4-.8l96-64c4.4-3 7.1-8 7.1-13.3s-2.7-10.3-7.1-13.3l-96-64c-4.9-3.3-11.2-3.6-16.4-.8s-8.5 8.2-8.5 14.1z" />
        <path d="M448 32l-86.1 0-1 1-127 127 92.1 0 1-1L453.8 32.3c-1.9-.2-3.8-.3-5.8-.3zm64 128l0-64c0-15.1-5.3-29.1-14-40l-104 104L512 160zM294.1 32l-92.1 0-1 1L73.9 160l92.1 0 1-1 127-127zM64 32C28.7 32 0 60.7 0 96l0 64 6.1 0 1-1 127-127L64 32zM216.5 241.9c-5.2 2.8-8.5 8.2-8.5 14.1l0 128c0 5.9 3.2 11.3 8.5 14.1s11.5 2.5 16.4-.8l96-64c4.4-3 7.1-8 7.1-13.3s-2.7-10.3-7.1-13.3l-96-64c-4.9-3.3-11.2-3.6-16.4-.8z" />
    </Icon>
);

export default ClapperboardPlay;