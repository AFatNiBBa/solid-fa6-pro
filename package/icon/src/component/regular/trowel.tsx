
import { Icon } from "../../index";

/**
 * A component that renders the `trowel` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trowel?s=regular trowel}
 * @preview ![trowel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/trowel.svg)
 */
const Trowel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M340.4 142L370 171.6l87.9-87.9c8.2-8.2 8.2-21.4 0-29.6s-21.4-8.2-29.6 0L340.4 142zM491.8 20.2c26.9 26.9 26.9 70.5 0 97.5l-95.4 95.4c-14.6 14.6-38.2 14.6-52.8 0l-5.4-5.4L237.9 308l75 75c5.9 5.9 8.3 14.5 6.4 22.6s-8 14.6-15.9 17.2l-272 88c-8.6 2.8-18 .5-24.4-5.9s-8.6-15.8-5.9-24.4l88-272c2.6-7.9 9.1-14 17.2-15.9s16.7 .5 22.6 6.4l75 75L304.3 173.8l-5.4-5.4c-14.6-14.6-14.6-38.2 0-52.8l95.4-95.4c26.9-26.9 70.5-26.9 97.5 0zM251.3 389.2L122.8 260.7l-61.5 190 190-61.5z" />
    </Icon>
);

export default Trowel;