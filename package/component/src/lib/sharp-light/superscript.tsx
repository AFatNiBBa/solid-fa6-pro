
import { Icon } from "../../index";

/**
 * A component that renders the `superscript` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/superscript?s=sharp-light superscript}
 * @preview ![superscript](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/superscript.svg)
 */
const Superscript: typeof Icon = x => (
    <Icon {...x}>
        <path d="M400 0L384 0l0 32 16 0 32 0 0 128-32 0-16 0 0 32 16 0 48 0 48 0 16 0 0-32-16 0-32 0 0-144 0-16L448 0 400 0zM16 64L0 64 0 96l16 0 39.2 0L157 256 55.2 416 16 416 0 416l0 32 16 0 48 0 8.8 0 4.7-7.4L176 285.8l98.5 154.8 4.7 7.4 8.8 0 48 0 16 0 0-32-16 0-39.2 0L195 256 296.8 96 336 96l16 0 0-32-16 0-48 0-8.8 0-4.7 7.4L176 226.2 77.5 71.4 72.8 64 64 64 16 64z" />
    </Icon>
);

export default Superscript;