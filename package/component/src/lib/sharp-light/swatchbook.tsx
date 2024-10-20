
import { Icon } from "../../index";

/**
 * A component that renders the `swatchbook` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swatchbook?s=sharp-light swatchbook}
 * @preview ![swatchbook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/swatchbook.svg)
 */
const Swatchbook: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 416c0 53 43 96 96 96l400 0 16 0 0-16 0-160 0-16-16 0-164.3 0L447.3 204.5l11.3-11.3-11.3-11.3L334.2 68.7 322.8 57.4 311.5 68.7 192 188.2 192 16l0-16L176 0 16 0 0 0 0 16 0 416zm480 64l-308.3 0 128-128L480 352l0 128zM413.4 193.1L192 414.5l0-181L322.8 102.6l90.5 90.5zM96 480c-35.3 0-64-28.7-64-64l0-128 128 0 0 128c0 35.3-28.7 64-64 64zM32 256l0-96 128 0 0 96L32 256zm0-128l0-96 128 0 0 96L32 128zM96 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Swatchbook;