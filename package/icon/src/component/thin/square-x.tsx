
import { Icon } from "../../index";

/**
 * A component that renders the `square-x` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-x?s=thin square-x}
 * @preview ![square-x](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-x.svg)
 */
const SquareX: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm126 34.8l98 113 98-113c2.9-3.3 7.9-3.7 11.3-.8s3.7 7.9 .8 11.3L234.6 256 334 370.8c2.9 3.3 2.5 8.4-.8 11.3s-8.4 2.5-11.3-.8l-98-113-98 113c-2.9 3.3-7.9 3.7-11.3 .8s-3.7-7.9-.8-11.3L213.4 256 114 141.2c-2.9-3.3-2.5-8.4 .8-11.3s8.4-2.5 11.3 .8z" />
    </Icon>
);

export default SquareX;