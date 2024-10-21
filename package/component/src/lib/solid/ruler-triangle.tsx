
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-triangle` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-triangle?s=solid ruler-triangle}
 * @preview ![ruler-triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/ruler-triangle.svg)
 */
const RulerTriangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32L0 448c0 35.3 28.7 64 64 64l416 0c17.7 0 32-14.3 32-32l0-2.7c0-8.5-3.4-16.6-9.4-22.6l-51.3-51.3-24 24c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l24-24-57.4-57.4-24 24c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l24-24-57.4-57.4-24 24c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l24-24-57.4-57.4-24 24c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l24-24L131.3 83.3l-24 24c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l24-24L57.4 9.4C51.4 3.4 43.2 0 34.7 0L32 0C14.3 0 0 14.3 0 32zM128 256L256 384l-128 0 0-128z" />
    </Icon>
);

export default RulerTriangle;