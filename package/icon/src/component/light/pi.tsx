
import { Icon } from "../../index";

/**
 * A component that renders the `pi` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pi?s=light pi}
 * @preview ![pi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/pi.svg)
 */
const Pi: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 64C7.2 64 0 71.2 0 80s7.2 16 16 16l112 0 0 155c0 61.8-21 121.7-59.6 169.9l-.9 1.1c-5.5 6.9-4.4 17 2.5 22.5s17 4.4 22.5-2.5l.9-1.1C136.5 387 160 320 160 251l0-155 160 0 0 286.6c0 36.1 29.3 65.4 65.4 65.4c24.8 0 47.4-14 58.5-36.2l2.3-4.7c4-7.9 .7-17.5-7.2-21.5s-17.5-.7-21.5 7.2l-2.3 4.7c-5.7 11.3-17.2 18.5-29.9 18.5C367 416 352 401 352 382.6L352 96l80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 64z" />
    </Icon>
);

export default Pi;