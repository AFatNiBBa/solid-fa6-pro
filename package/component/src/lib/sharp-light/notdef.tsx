
import { Icon } from "../../index";

/**
 * A component that renders the `notdef` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notdef?s=sharp-light notdef}
 * @preview ![notdef](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/notdef.svg)
 */
const Notdef: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 0L16 0 368 0l16 0 0 16 0 480 0 16-16 0L16 512 0 512l0-16L0 16 0 0zM32 452.5L172.3 256 32 59.5l0 392.9zM51.7 480l280.7 0L192 283.5 51.7 480zm160-224L352 452.5l0-392.9L211.7 256zM332.3 32L51.7 32 192 228.5 332.3 32z" />
    </Icon>
);

export default Notdef;