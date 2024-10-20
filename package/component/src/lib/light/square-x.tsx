
import { Icon } from "../../index";

/**
 * A component that renders the `square-x` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-x?s=light square-x}
 * @preview ![square-x](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-x.svg)
 */
const SquareX: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm140.1 37.6L224 231.4l83.9-97.8c5.8-6.7 15.9-7.5 22.6-1.7s7.5 15.9 1.7 22.6L245.1 256l87.1 101.6c5.8 6.7 5 16.8-1.7 22.6s-16.8 5-22.6-1.7L224 280.6l-83.9 97.8c-5.8 6.7-15.9 7.5-22.6 1.7s-7.5-15.8-1.7-22.6L202.9 256 115.9 154.4c-5.8-6.7-5-16.8 1.7-22.6s16.8-5 22.6 1.7z" />
    </Icon>
);

export default SquareX;