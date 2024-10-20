
import { Icon } from "../../index";

/**
 * A component that renders the `binary-slash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binary-slash?s=regular binary-slash}
 * @preview ![binary-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/binary-slash.svg)
 */
const BinarySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M456 24l0 152 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-56 0-56 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-118.7-16.4 5.5C379 67 365.4 60.2 361.2 47.6S363.8 21.4 376.4 17.2l48-16C431.7-1.2 439.8 0 446 4.5S456 16.3 456 24zM232 312l0 152 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-56 0-56 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-118.7-16.4 5.5c-12.6 4.2-26.2-2.6-30.4-15.2s2.6-26.2 15.2-30.4l48-16c7.3-2.4 15.4-1.2 21.6 3.3s10 11.8 10 19.5zM128 72c0-39.8 32.2-72 72-72l48 0c39.8 0 72 32.2 72 72l0 80c0 21.6-9.5 41-24.6 54.2L399.7 288l40.3 0c39.8 0 72 32.2 72 72l0 16 118.8 93.1c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2S28.4-3.1 38.8 5.1L128 75l0-3zm48 40.6l79.4 62.2C265 171.7 272 162.7 272 152l0-80c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 40.6zM320 360c0-3.8 .3-7.5 .9-11.2L368 385.9l0 54.1c0 13.3 10.7 24 24 24l48 0c6.9 0 13.1-2.9 17.5-7.6l37.8 29.7C482 502 462.2 512 440 512l-48 0c-39.8 0-72-32.2-72-72l0-80z" />
    </Icon>
);

export default BinarySlash;