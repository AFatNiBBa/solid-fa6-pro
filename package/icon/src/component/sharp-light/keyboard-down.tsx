
import { Icon } from "../../index";

/**
 * A component that renders the `keyboard-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/keyboard-down?s=sharp-light keyboard-down}
 * @preview ![keyboard-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/keyboard-down.svg)
 */
const KeyboardDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 32l0 224 512 0 0-224L32 32zM0 0L32 0 544 0l32 0 0 32 0 224 0 32-32 0L32 288 0 288l0-32L0 32 0 0zM216 72l0 48-48 0 0-48 48 0zM72 168l48 0 0 48-48 0 0-48zm48-96l0 48-48 0 0-48 48 0zm144 0l48 0 0 48-48 0 0-48zm144 0l0 48-48 0 0-48 48 0zm48 0l48 0 0 48-48 0 0-48zm48 96l0 48-48 0 0-48 48 0zm-328 8l224 0 16 0 0 32-16 0-224 0-16 0 0-32 16 0zm-4.7 172.7L288 465.4 404.7 348.7 416 337.4 438.6 360l-11.3 11.3-128 128L288 510.6l-11.3-11.3-128-128L137.4 360 160 337.4l11.3 11.3z" />
    </Icon>
);

export default KeyboardDown;