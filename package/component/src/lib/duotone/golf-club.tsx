
import { Icon, generic } from "../../index";

/**
 * A component that renders the `golf-club` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/golf-club?s=duotone golf-club}
 * @preview ![golf-club](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/golf-club.svg)
 */
const GolfClub: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 348.4L0 376c16 0 32 0 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16c-16 0-32 0-48 0l0 32c16 0 32 0 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16c-16 0-32 0-48 0l0 8c0 17.7 14.3 32 32 32l223.3 0c12 .3 23.6-6.3 29.3-17.7l224-448c2.3-4.6 3.4-9.5 3.4-14.3c0-11.7-6.5-23-17.7-28.6C489.7 1.1 484.8 0 480 0c-11.7 0-23 6.5-28.6 17.7L264 392.5l0-.5L42.1 318C21.4 311.1 0 326.6 0 348.4z" />
        <path d="M0 408l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L0 376l0 32zm0 64l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L0 440l0 32z" />
    </Icon>
);

export default GolfClub;