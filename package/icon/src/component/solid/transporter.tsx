
import { Icon } from "../../index";

/**
 * A component that renders the `transporter` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/transporter?s=solid transporter}
 * @preview ![transporter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/transporter.svg)
 */
const Transporter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 272l0 96-64 0 0-178.7L153 276c-11.1 13.8-31.2 16-45 5s-16-31.2-5-45l57.7-72c18.2-22.7 45.8-36 74.9-36l40.7 0c29.1 0 56.7 13.2 74.9 36L409 236c11 13.8 8.8 33.9-5 45s-33.9 8.8-45-5l-31-38.7L328 416l-64 0 0-96-16 0zM216 512l-88 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-88 0-80 0zM64 96l25.4 7.3c3.9 1.1 6.6 4.7 6.6 8.7s-2.7 7.6-6.6 8.7L64 128l-7.3 25.4c-1.1 3.9-4.7 6.6-8.7 6.6s-7.6-2.7-8.7-6.6L32 128 6.6 120.7C2.7 119.6 0 116.1 0 112s2.7-7.6 6.6-8.7L32 96l7.3-25.4C40.4 66.7 43.9 64 48 64s7.6 2.7 8.7 6.6L64 96zM472.7 6.6L480 32l25.4 7.3c3.9 1.1 6.6 4.7 6.6 8.7s-2.7 7.6-6.6 8.7L480 64l-7.3 25.4c-1.1 3.9-4.7 6.6-8.7 6.6s-7.6-2.7-8.7-6.6L448 64l-25.4-7.3c-3.9-1.1-6.6-4.7-6.6-8.7s2.7-7.6 6.6-8.7L448 32l7.3-25.4C456.4 2.7 459.9 0 464 0s7.6 2.7 8.7 6.6z" />
    </Icon>
);

export default Transporter;