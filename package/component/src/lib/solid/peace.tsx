
import { Icon } from "../../index";

/**
 * A component that renders the `peace` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peace?s=solid peace}
 * @preview ![peace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/peace.svg)
 */
const Peace: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 445.3l0-121.8-94.3 77.1c26.1 22.8 58.5 38.7 94.3 44.7zM89.2 351.1L224 240.8l0-174.2C133.2 81.9 64 160.9 64 256c0 34.6 9.2 67.1 25.2 95.1zm293.1 49.5L288 323.5l0 121.8c35.7-6 68.1-21.9 94.3-44.7zm40.6-49.5c16-28 25.2-60.5 25.2-95.1c0-95.1-69.2-174.1-160-189.3l0 174.2L422.8 351.1zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default Peace;