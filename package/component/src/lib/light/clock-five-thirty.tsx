
import { Icon } from "../../index";

/**
 * A component that renders the `clock-five-thirty` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-five-thirty?s=light clock-five-thirty}
 * @preview ![clock-five-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/clock-five-thirty.svg)
 */
const ClockFiveThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256a224 224 0 1 1 448 0A224 224 0 1 1 32 256zm480 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM272 400l0-91.2 34.7 52c4.9 7.4 14.8 9.3 22.2 4.4s9.3-14.8 4.4-22.2l-64-96c-3.9-5.9-11.2-8.5-17.9-6.4s-11.4 8.3-11.4 15.3l0 144c0 8.8 7.2 16 16 16s16-7.2 16-16z" />
    </Icon>
);

export default ClockFiveThirty;