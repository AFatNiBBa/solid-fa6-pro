
import { Icon } from "../../index";

/**
 * A component that renders the `helmet-safety` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helmet-safety?s=sharp-thin helmet-safety}
 * @preview ![helmet-safety](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/helmet-safety.svg)
 */
const HelmetSafety: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M224 32l-8 0 0 8 0 240 0 8 16 0 0-8 0-232 112 0 0 232 0 8 16 0 0-8 0-240 0-8-8 0L224 32zM192 73.3C99.5 100.8 32 186.5 32 288l0 32 16 0 0-32c0-92.5 60.4-171 144-198l0-16.8zM384 90c82.9 26.8 143 104.1 144 195.6l0 34.4 16 0 0-32 0-2.4c-1.1-100.4-68.2-185-160-212.3L384 90zM16 400.2L16 368l544 0 0 32.2c-2.1 1.5-4.8 3.4-8.3 5.5c-9.9 6.2-25.5 14.8-47.6 23.4C460.1 446.3 390.1 464 288 464s-172.1-17.7-216.2-34.9c-22-8.6-37.6-17.2-47.6-23.4c-3.4-2.1-6.2-4-8.3-5.5zM576 408l0-40 0-16-16 0L16 352 0 352l0 16 0 40s80 72 288 72s288-72 288-72z" />
    </Icon>
);

export default HelmetSafety;