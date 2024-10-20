
import { Icon } from "../../index";

/**
 * A component that renders the `volume` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume?s=light volume}
 * @preview ![volume](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/volume.svg)
 */
const Volume: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 66.7L183.6 188c-2.9 2.6-6.7 4-10.6 4l-85 0c-13.3 0-24 10.7-24 24l0 80c0 13.3 10.7 24 24 24l85 0c3.9 0 7.7 1.4 10.6 4L320 445.3l0-378.6zM302.4 39.5c5.5-4.8 12.5-7.5 19.8-7.5C338.7 32 352 45.3 352 61.8l0 388.4c0 16.5-13.3 29.8-29.8 29.8c-7.3 0-14.3-2.7-19.8-7.5l10.6-12-10.6 12L166.9 352 88 352c-30.9 0-56-25.1-56-56l0-80c0-30.9 25.1-56 56-56l78.9 0L302.4 39.5zM419.2 182.4c5.3-7.1 15.3-8.5 22.4-3.2C464.9 196.7 480 224.6 480 256s-15.1 59.3-38.4 76.8c-7.1 5.3-17.1 3.9-22.4-3.2s-3.9-17.1 3.2-22.4C438 295.5 448 276.9 448 256s-10-39.5-25.6-51.2c-7.1-5.3-8.5-15.3-3.2-22.4zm87-74.5C548.8 143.1 576 196.4 576 256s-27.2 112.9-69.8 148.1c-6.8 5.6-16.9 4.7-22.5-2.1s-4.7-16.9 2.1-22.5C521.4 350.1 544 305.7 544 256s-22.6-94.1-58.2-123.4c-6.8-5.6-7.8-15.7-2.1-22.5s15.7-7.8 22.5-2.1z" />
    </Icon>
);

export default Volume;