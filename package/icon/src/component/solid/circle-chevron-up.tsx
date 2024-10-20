
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-up` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-up?s=solid circle-chevron-up}
 * @preview ![circle-chevron-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-chevron-up.svg)
 */
const CircleChevronUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z" />
    </Icon>
);

export default CircleChevronUp;