
import { Icon } from "../../index";

/**
 * A component that renders the `radio` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/radio?s=sharp-light radio}
 * @preview ![radio](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/radio.svg)
 */
const Radio: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 160l0 80 0 240 448 0 0-320L32 160zM0 240l0-80 0-24 0-8 0-4.5 12.1-3 480-120 7.8 31L114 128l366 0 32 0 0 32 0 320 0 32-32 0L32 512 0 512l0-32L0 240zm96 0l96 0 16 0 0 32-16 0-96 0-16 0 0-32 16 0zM80 304l128 0 16 0 0 32-16 0L80 336l-16 0 0-32 16 0zm16 64l96 0 16 0 0 32-16 0-96 0-16 0 0-32 16 0zM352 256a64 64 0 1 0 0 128 64 64 0 1 0 0-128zm96 64a96 96 0 1 1 -192 0 96 96 0 1 1 192 0z" />
    </Icon>
);

export default Radio;