
import { Icon } from "../../index";

/**
 * A component that renders the `clock-seven-thirty` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-seven-thirty?s=light clock-seven-thirty}
 * @preview ![clock-seven-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/clock-seven-thirty.svg)
 */
const ClockSevenThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256a224 224 0 1 0 448 0A224 224 0 1 0 32 256zm480 0A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM240 400l0-91.2-34.7 52c-4.9 7.4-14.8 9.3-22.2 4.4s-9.3-14.8-4.4-22.2l64-96c3.9-5.9 11.2-8.5 17.9-6.4s11.4 8.3 11.4 15.3l0 144c0 8.8-7.2 16-16 16s-16-7.2-16-16z" />
    </Icon>
);

export default ClockSevenThirty;