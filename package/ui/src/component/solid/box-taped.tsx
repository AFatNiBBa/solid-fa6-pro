
import { Icon } from "../../index";

/**
 * A component that renders the `box-taped` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-taped?s=solid box-taped}
 * @preview ![box-taped](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/box-taped.svg)
 */
const BoxTaped: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M50.7 58.5L0 160l160 0L192 32 93.7 32C75.5 32 58.9 42.3 50.7 58.5zM288 160l160 0L397.3 58.5C389.1 42.3 372.5 32 354.3 32L256 32l32 128zM160 192L0 192 0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-224-160 0 0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64z" />
    </Icon>
);

export default BoxTaped;