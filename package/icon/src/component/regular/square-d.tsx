
import { Icon } from "../../index";

/**
 * A component that renders the `square-d` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-d?s=regular square-d}
 * @preview ![square-d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-d.svg)
 */
const SquareD: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm152 32l72 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-72 0c-13.3 0-24-10.7-24-24l0-208c0-13.3 10.7-24 24-24zm24 208l48 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-48 0 0 160z" />
    </Icon>
);

export default SquareD;