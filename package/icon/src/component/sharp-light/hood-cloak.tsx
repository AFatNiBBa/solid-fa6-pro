
import { Icon } from "../../index";

/**
 * A component that renders the `hood-cloak` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hood-cloak?s=sharp-light hood-cloak}
 * @preview ![hood-cloak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hood-cloak.svg)
 */
const HoodCloak: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 464l64-80 0-96C64 128 160 0 288 0L434.7 0 480 0 448 32 430.2 49.8l-23 23c8.9 6 17.3 12.7 25.3 20C480.8 136.9 512 203.5 512 288l0 96 64 80 0 16 0 32-32 0L32 512 0 512l0-32 0-16zM288 32C185 32 96 137.4 96 288l0 96 0 11.2L89 404 32 475.2l0 4.8 128 0 0-160c0-70.7 57.3-128 128-128s128 57.3 128 128l0 160 128 0 0-4.8L487 404l-7-8.8 0-11.2 0-96c0-88.6-37.8-152.6-90.8-188.7L357.2 77.5l27.3-27.3L402.7 32 288 32zM192 480l192 0 0-160c0-53-43-96-96-96s-96 43-96 96l0 160z" />
    </Icon>
);

export default HoodCloak;