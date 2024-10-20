
import { Icon } from "../../index";

/**
 * A component that renders the `square-b` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-b?s=thin square-b}
 * @preview ![square-b](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-b.svg)
 */
const SquareB: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm128 56c0-13.3 10.7-24 24-24l84 0c37.6 0 68 30.4 68 68c0 22.1-10.6 41.8-26.9 54.2c29.3 7.6 50.9 34.2 50.9 65.8c0 37.6-30.4 68-68 68l-108 0c-13.3 0-24-10.7-24-24l0-104 0-104zm160 44c0-28.7-23.3-52-52-52l-84 0c-4.4 0-8 3.6-8 8l0 96 92 0c28.7 0 52-23.3 52-52zM144 360c0 4.4 3.6 8 8 8l108 0c28.7 0 52-23.3 52-52s-23.3-52-52-52l-24 0-92 0 0 96z" />
    </Icon>
);

export default SquareB;