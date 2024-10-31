
import { Icon } from "../../index";

/**
 * A component that renders the `helmet-safety` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helmet-safety?s=sharp-light helmet-safety}
 * @preview ![helmet-safety](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/helmet-safety.svg)
 */
const HelmetSafety: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M224 32l-16 0 0 16 0 224 0 16 32 0 0-16 0-208 96 0 0 208 0 16 32 0 0-16 0-224 0-16-16 0L224 32zM176 78.7C91.8 110.9 32 192.5 32 288l0 32 32 0 0-32c0-77.5 45.9-144.3 112-174.6l0-34.7zm224 34.7c65.5 30 111.1 95.8 112 172.3l0 34.3 32 0 0-32 0-2.4c-1-94.5-60.5-174.9-144-206.9l0 34.7zM32 391.7l0-7.7 512 0 0 7.7-.8 .5c-9.1 5.7-23.8 13.8-44.9 22.1C456.2 430.7 388.2 448 288 448s-168.2-17.3-210.3-33.8c-21.1-8.2-35.8-16.3-44.9-22.1l-.8-.5zM576 408l0-24 0-32-32 0L32 352 0 352l0 32 0 24s80 72 288 72s288-72 288-72z" />
    </Icon>
);

export default HelmetSafety;