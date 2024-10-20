
import { Icon } from "../../index";

/**
 * A component that renders the `hose` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hose?s=sharp-light hose}
 * @preview ![hose](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hose.svg)
 */
const Hose: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M288 112l0 16 32 0 0-16 0-1.9 96-12 0 13.9 32 0 0-16 0-1.9L448 80l0-32 0-14.1 0-1.9 0-16-32 0 0 13.9-96-12 0-1.9 0-16L288 0l0 16 0 48 0 48zm32-61.9l96 12 0 3.8-96 12L320 64l0-13.9zM32 416l0-32 384 0 0 32L32 416zm416 0l0-32 0-16 0-16 0-32 0-16 0-16 0-48 0-16-16 0-280 0c-30.9 0-56-25.1-56-56s25.1-56 56-56l104 0 0-32L152 80c-48.6 0-88 39.4-88 88s39.4 88 88 88l264 0 0 32-264 0C85.7 288 32 234.3 32 168S85.7 48 152 48l104 0 0-32L152 16C68.1 16 0 84.1 0 168c0 48.8 23 92.2 58.7 120L16 288 0 288l0 16 0 48 0 16 0 16 0 32 0 16 0 16 0 48 0 16 16 0 416 0 16 0 0-16 0-48 0-16 0-16zM152 320l264 0 0 32L32 352l0-32 120 0zM416 448l0 32L32 480l0-32 384 0z" />
    </Icon>
);

export default Hose;