
import { Icon } from "../../index";

/**
 * A component that renders the `transporter` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/transporter?s=regular transporter}
 * @preview ![transporter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/transporter.svg)
 */
const Transporter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M472.7 6.6L480 32l25.4 7.3c3.9 1.1 6.6 4.7 6.6 8.7s-2.7 7.6-6.6 8.7L480 64l-7.3 25.4c-1.1 3.9-4.7 6.6-8.7 6.6s-7.6-2.7-8.7-6.6L448 64l-25.4-7.3c-3.9-1.1-6.6-4.7-6.6-8.7s2.7-7.6 6.6-8.7L448 32l7.3-25.4C456.4 2.7 459.9 0 464 0s7.6 2.7 8.7 6.6zm-416 64L64 96l25.4 7.3c3.9 1.1 6.6 4.7 6.6 8.7s-2.7 7.6-6.6 8.7L64 128l-7.3 25.4c-1.1 3.9-4.7 6.6-8.7 6.6s-7.6-2.7-8.7-6.6L32 128 6.6 120.7C2.7 119.6 0 116.1 0 112s2.7-7.6 6.6-8.7L32 96l7.3-25.4C40.4 66.7 43.9 64 48 64s7.6 2.7 8.7 6.6zM96 488c0-13.3 10.7-24 24-24l272 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-272 0c-13.3 0-24-10.7-24-24zM208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm32 272l0 112-48 0 0-223.2-52.9 69.7c-8 10.6-23.1 12.6-33.6 4.6s-12.6-23.1-4.6-33.6l65.7-86.7c16.6-21.9 42.6-34.8 70.1-34.8l38.6 0c27.5 0 53.5 12.9 70.1 34.8l65.7 86.7c8 10.6 5.9 25.6-4.6 33.6s-25.6 5.9-33.6-4.6L320 208.8 320 432l-48 0 0-112-32 0zm0-48l32 0 0-96-32 0 0 96z" />
    </Icon>
);

export default Transporter;