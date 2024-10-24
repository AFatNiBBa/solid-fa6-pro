
import { Icon } from "../../index";

/**
 * A component that renders the `blinds-raised` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blinds-raised?s=sharp-light blinds-raised}
 * @preview ![blinds-raised](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/blinds-raised.svg)
 */
const BlindsRaised: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 0L0 0 0 16 0 80 0 96l16 0 112 0 0 322.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3L160 96l336 0 16 0 0-16 0-64 0-16L496 0 16 0zM32 64l0-32 448 0 0 32L32 64zm96 400a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM41 160l8-32-33 0L8 160 0 192l33 0 63 0 0-32-55 0zm0 96l8-32-33 0L8 256 0 288l33 0 63 0 0-32-55 0zm151 0l0 32 287 0 33 0-8-32-8-32-33 0 8 32-279 0zm0-96l0 32 287 0 33 0-8-32-8-32-33 0 8 32-279 0z" />
    </Icon>
);

export default BlindsRaised;