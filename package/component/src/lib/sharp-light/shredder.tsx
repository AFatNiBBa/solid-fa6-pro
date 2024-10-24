
import { Icon } from "../../index";

/**
 * A component that renders the `shredder` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shredder?s=sharp-light shredder}
 * @preview ![shredder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/shredder.svg)
 */
const Shredder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 32l0 160 320 0 0-114.7L370.7 32 96 32zM448 192l32 0 32 0 0 32 0 128 0 32-32 0L32 384 0 384l0-32L0 224l0-32 32 0 32 0L64 32 64 0 96 0 384 0l64 64 0 128zM32 224l0 128 448 0 0-128L32 224zm384 32l32 0 0 32-32 0 0-32zM96 496l0-80 32 0 0 80 0 16-32 0 0-16zm96 0l0-80 32 0 0 80 0 16-32 0 0-16zm96 0l0-80 32 0 0 80 0 16-32 0 0-16zm96 0l0-80 32 0 0 80 0 16-32 0 0-16z" />
    </Icon>
);

export default Shredder;