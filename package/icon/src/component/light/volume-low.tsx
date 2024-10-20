
import { Icon } from "../../index";

/**
 * A component that renders the `volume-low` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-low?s=light volume-low}
 * @preview ![volume-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/volume-low.svg)
 */
const VolumeLow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M151.6 188L288 66.7l0 378.6L151.6 324c-2.9-2.6-6.7-4-10.6-4l-85 0c-13.3 0-24-10.7-24-24l0-80c0-13.3 10.7-24 24-24l85 0c3.9 0 7.7-1.4 10.6-4zM290.2 32c-7.3 0-14.3 2.7-19.8 7.5L134.9 160 56 160c-30.9 0-56 25.1-56 56l0 80c0 30.9 25.1 56 56 56l78.9 0L270.4 472.5l10.6-12-10.6 12c5.5 4.8 12.5 7.5 19.8 7.5c16.5 0 29.8-13.3 29.8-29.8l0-388.4C320 45.3 306.7 32 290.2 32zM409.6 179.2c-7.1-5.3-17.1-3.9-22.4 3.2s-3.9 17.1 3.2 22.4C406 216.5 416 235.1 416 256s-10 39.5-25.6 51.2c-7.1 5.3-8.5 15.3-3.2 22.4s15.3 8.5 22.4 3.2C432.9 315.3 448 287.4 448 256s-15.1-59.3-38.4-76.8z" />
    </Icon>
);

export default VolumeLow;