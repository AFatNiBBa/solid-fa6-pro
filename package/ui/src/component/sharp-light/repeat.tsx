
import { Icon } from "../../index";

/**
 * A component that renders the `repeat` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/repeat?s=sharp-light repeat}
 * @preview ![repeat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/repeat.svg)
 */
const Repeat: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 32l0-32 32 0 73.4 73.4L448 96l-22.6 22.6L352 192l-32 0 0-32 0-48L32 112l0 144 0 16L0 272l0-16L0 96 0 80l16 0 304 0 0-48zm32 114.7L402.7 96 352 45.3 352 80l0 32 0 34.7zM512 256l0 160 0 16-16 0-304 0 0 48 0 32-32 0L86.6 438.6 64 416l22.6-22.6L160 320l32 0 0 32 0 48 288 0 0-144 0-16 32 0 0 16zM109.3 416L160 466.7l0-101.5L109.3 416z" />
    </Icon>
);

export default Repeat;