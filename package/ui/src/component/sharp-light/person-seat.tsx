
import { Icon } from "../../index";

/**
 * A component that renders the `person-seat` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-seat?s=sharp-light person-seat}
 * @preview ![person-seat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/person-seat.svg)
 */
const PersonSeat: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 88a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm24 56a56 56 0 1 1 0-112 56 56 0 1 1 0 112zM32 144l0 272 176 0 16 0 0 32-16 0L16 448 0 448l0-16L0 144l0-16 32 0 0 16zm56 32l16 0 88 0 16 0 0 16 0 32 64 0 16 0 0 32-16 0-64 0 0 72 64 0 13.1 0 2.6 12.9L309.1 448l58.9 0 16 0 0 32-16 0-72 0-13.1 0-2.6-12.9L258.9 360 208 360l-32 0-40 0c-26.5 0-48-21.5-48-48l0-120 0-16zm88 80l0-32 0-16-56 0 0 104c0 8.8 7.2 16 16 16l40 0 0-72z" />
    </Icon>
);

export default PersonSeat;