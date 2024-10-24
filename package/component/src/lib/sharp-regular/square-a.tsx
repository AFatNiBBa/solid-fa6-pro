
import { Icon } from "../../index";

/**
 * A component that renders the `square-a` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-a?s=sharp-regular square-a}
 * @preview ![square-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-a.svg)
 */
const SquareA: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zm208.8 96l30.5 0 6.5 13.8L359.4 384l-53 0-22.5-48-119.7 0-22.5 48-53 0L202.3 141.8l6.5-13.8zM224 208.5L186.7 288l74.6 0L224 208.5z" />
    </Icon>
);

export default SquareA;