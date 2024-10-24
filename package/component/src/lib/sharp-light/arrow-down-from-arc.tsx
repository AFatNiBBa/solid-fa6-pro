
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-from-arc` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-from-arc?s=sharp-light arrow-down-from-arc}
 * @preview ![arrow-down-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-down-from-arc.svg)
 */
const ArrowDownFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 31.9c-123.7 0-224 100.3-224 224l0 16-32 0 0-16C0 114.5 114.6-.1 256-.1s256 114.6 256 256l0 16-32 0 0-16c0-123.7-100.3-224-224-224zM116 354.5l-10.6-12 23.9-21.3 10.6 12L240 445.8l0-269.9 0-16 32 0 0 16 0 269.9L372 333.3l10.6-12 23.9 21.3-10.6 12-128 144L256 512l-12-13.5-128-144z" />
    </Icon>
);

export default ArrowDownFromArc;