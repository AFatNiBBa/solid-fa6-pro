
import { Icon } from "../../index";

/**
 * A component that renders the `fire-extinguisher` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire-extinguisher?s=sharp-solid fire-extinguisher}
 * @preview ![fire-extinguisher](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/fire-extinguisher.svg)
 */
const FireExtinguisher: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0l96 0 0 56 64 0 0-24L512 0l0 160L288 128l0-24-64 0 0 34.8c37.8 18 64 56.5 64 101.2l0 144L64 384l0-144c0-44.7 26.2-83.2 64-101.2l0-28.8c-36.2 11.1-66 36.9-82.3 70.5l-43.1-21C26.7 109.8 72.7 72.6 128 60.4L128 0zM288 512L64 512l0-96 224 0 0 96zM176 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default FireExtinguisher;