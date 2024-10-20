
import { Icon } from "../../index";

/**
 * A component that renders the `screencast` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screencast?s=sharp-light screencast}
 * @preview ![screencast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/screencast.svg)
 */
const Screencast: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 64L32 64l0 129.8C21.5 192.6 10.8 192 0 192L0 64 0 32l32 0 512 0 32 0 0 32 0 384 0 32-32 0-256 0c0-10.8-.6-21.5-1.8-32L544 448l0-384zM0 256l0-32c141.4 0 256 114.6 256 256l-32 0C224 356.3 123.7 256 0 256zM32 416a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 64c0-70.7-57.3-128-128-128l0-32c88.4 0 160 71.6 160 160l-32 0z" />
    </Icon>
);

export default Screencast;