
import { Icon } from "../../index";

/**
 * A component that renders the `square-w` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-w?s=solid square-w}
 * @preview ![square-w](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-w.svg)
 */
const SquareW: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm54.9 136.7L160 297.3l41.1-128.6c3.2-9.9 12.4-16.7 22.9-16.7s19.7 6.7 22.9 16.7L288 297.3l41.1-128.6c4-12.6 17.5-19.6 30.2-15.5s19.6 17.5 15.5 30.2l-64 200c-3.2 9.9-12.4 16.7-22.9 16.7s-19.7-6.7-22.9-16.7L224 254.7 182.9 383.3c-3.2 9.9-12.4 16.7-22.9 16.7s-19.7-6.7-22.9-16.7l-64-200c-4-12.6 2.9-26.1 15.5-30.2s26.1 2.9 30.2 15.5z" />
    </Icon>
);

export default SquareW;