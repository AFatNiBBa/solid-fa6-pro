
import { Icon } from "../../index";

/**
 * A component that renders the `square-v` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-v?s=thin square-v}
 * @preview ![square-v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-v.svg)
 */
const SquareV: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm111.2 52.4L224 374.1 336.8 148.4c2-4 6.8-5.6 10.7-3.6s5.6 6.8 3.6 10.7l-120 240c-1.4 2.7-4.1 4.4-7.2 4.4s-5.8-1.7-7.2-4.4l-120-240c-2-4-.4-8.8 3.6-10.7s8.8-.4 10.7 3.6z" />
    </Icon>
);

export default SquareV;