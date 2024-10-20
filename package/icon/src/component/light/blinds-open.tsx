
import { Icon } from "../../index";

/**
 * A component that renders the `blinds-open` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blinds-open?s=light blinds-open}
 * @preview ![blinds-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/blinds-open.svg)
 */
const BlindsOpen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 0C14.3 0 0 14.3 0 32L0 64C0 81.7 14.3 96 32 96l96 0 0 162.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3L160 96l320 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32L32 0zm0 32l448 0 0 32L32 64l0-32zm96 272a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM16 160c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0-32-80 0zm176 32l304 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-304 0 0 32zM0 496c0 8.8 7.2 16 16 16l480 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 480c-8.8 0-16 7.2-16 16zM16 320c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c-7-9.3-12-20.2-14.4-32L16 320zm480 32c8.8 0 16-7.2 16-16s-7.2-16-16-16l-273.6 0c-2.4 11.8-7.4 22.7-14.4 32l288 0z" />
    </Icon>
);

export default BlindsOpen;