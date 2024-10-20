
import { Icon } from "../../index";

/**
 * A component that renders the `blinds-open` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blinds-open?s=sharp-light blinds-open}
 * @preview ![blinds-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/blinds-open.svg)
 */
const BlindsOpen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 0L0 0 0 16 0 80 0 96l16 0 112 0 0 162.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3L160 96l336 0 16 0 0-16 0-64 0-16L496 0 16 0zM32 64l0-32 448 0 0 32L32 64zm96 240a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM16 160L0 160l0 32 16 0 80 0 0-32-80 0zm176 32l304 0 16 0 0-32-16 0-304 0 0 32zM0 480l0 32 16 0 480 0 16 0 0-32-16 0L16 480 0 480zM16 320L0 320l0 32 16 0 64 0c-7-9.3-12-20.2-14.4-32L16 320zm480 32l16 0 0-32-16 0-273.6 0c-2.4 11.8-7.4 22.7-14.4 32l288 0z" />
    </Icon>
);

export default BlindsOpen;