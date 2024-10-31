
import { Icon } from "../../index";

/**
 * A component that renders the `mars-and-venus` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-and-venus?s=regular mars-and-venus}
 * @preview ![mars-and-venus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/mars-and-venus.svg)
 */
const MarsAndVenus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 24c0 13.3 10.7 24 24 24l38.1 0L371.2 90.9C340.3 64.2 300 48 256 48C158.8 48 80 126.8 80 224c0 89.1 66.2 162.7 152 174.4l0 17.6-24 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l24 0 0 24c0 13.3 10.7 24 24 24s24-10.7 24-24l0-24 24 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-24 0 0-17.6c85.8-11.7 152-85.3 152-174.4c0-35.8-10.7-69.2-29.1-97L448 81.9l0 38.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-96c0-13.3-10.7-24-24-24L376 0c-13.3 0-24 10.7-24 24zM256 96a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
    </Icon>
);

export default MarsAndVenus;