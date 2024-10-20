
import { Icon } from "../../index";

/**
 * A component that renders the `tickets` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tickets?s=sharp-light tickets}
 * @preview ![tickets](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/tickets.svg)
 */
const Tickets: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 64l0-32 32 0 480 0 32 0 0 32 0 72 0 32c-22.1 0-40 17.9-40 40s17.9 40 40 40l0 32 0 72 0 32-32 0-480 0-32 0 0-32 0-72 0-32c22.1 0 40-17.9 40-40s-17.9-40-40-40l0-32 0-72zm32 79.5c23.7 11.8 40 36.2 40 64.5s-16.3 52.7-40 64.5l0 79.5 480 0 0-79.5c-23.7-11.8-40-36.2-40-64.5s16.3-52.7 40-64.5L608 64 128 64l0 79.5zM32 96l0 16 0 336 496 0 16 0 0 32-16 0L16 480 0 480l0-16L0 112 0 96l32 0zm224 64l0 96 224 0 0-96-224 0zm-32-32l32 0 224 0 32 0 0 32 0 96 0 32-32 0-224 0-32 0 0-32 0-96 0-32z" />
    </Icon>
);

export default Tickets;