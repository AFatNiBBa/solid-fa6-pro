
import { Icon } from "../../index";

/**
 * A component that renders the `baguette` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/baguette?s=solid baguette}
 * @preview ![baguette](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/baguette.svg)
 */
const Baguette: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M583 234.5c58.8-39.2 74.7-118.7 35.5-177.5S499.8-17.7 441 21.5L356.5 77.8l70.8 70.8c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L329.3 95.9l-88 58.7 74 74c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-78.6-78.6-88 58.7 77.2 77.2c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L98.9 249.5 57 277.5C-1.8 316.7-17.7 396.2 21.5 455s118.7 74.7 177.5 35.5l384-256z" />
    </Icon>
);

export default Baguette;