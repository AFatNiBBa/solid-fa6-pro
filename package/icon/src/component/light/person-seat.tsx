
import { Icon } from "../../index";

/**
 * A component that renders the `person-seat` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-seat?s=light person-seat}
 * @preview ![person-seat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/person-seat.svg)
 */
const PersonSeat: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M176 88a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM152 32a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM32 144c0-8.8-7.2-16-16-16s-16 7.2-16 16L0 336c0 61.9 50.1 112 112 112l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-44.2 0-80-35.8-80-80l0-192zm116 64c15.5 0 28 12.5 28 28l0 4 0 88-40 0c-8.8 0-16-7.2-16-16l0-76c0-15.5 12.5-28 28-28zm58.8 16c-5.6-27.4-29.8-48-58.8-48c-33.1 0-60 26.9-60 60l0 76c0 26.5 21.5 48 48 48l56 0 40.6 0c15.3 0 28.4 10.8 31.4 25.7l16.3 81.4c1.5 7.5 8.1 12.9 15.7 12.9l72 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-58.9 0-13.7-68.6c-6-29.9-32.2-51.4-62.8-51.4L208 328l0-72 64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-65.2 0z" />
    </Icon>
);

export default PersonSeat;