
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-signal` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-signal?s=sharp-thin mobile-signal}
 * @preview ![mobile-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mobile-signal.svg)
 */
const MobileSignal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 16l288 0 0 268c5.2-4 10.5-7.9 16-11.5L352 16l0-16L336 0 48 0 32 0l0 16 0 480 0 16 16 0 176 0c0-5.4 .1-10.7 .4-16L48 496 48 16zm96 416l-8 0 0 16 8 0 87.1 0c1.2-5.4 2.6-10.7 4.1-16L144 432zM512 272l0-16c-141.4 0-256 114.6-256 256l16 0c0-132.5 107.5-240 240-240zM496 480a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm-48 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-80 32c0-79.5 64.5-144 144-144l0-16c-88.4 0-160 71.6-160 160l16 0z" />
    </Icon>
);

export default MobileSignal;