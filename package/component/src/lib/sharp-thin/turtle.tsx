
import { Icon } from "../../index";

/**
 * A component that renders the `turtle` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turtle?s=sharp-thin turtle}
 * @preview ![turtle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/turtle.svg)
 */
const Turtle: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M208 48C119.6 48 48 119.6 48 208l0 56 0 8-16 0 0-8 0-56c0-97.2 78.8-176 176-176s176 78.8 176 176l0 56 0 8-16 0 0-8 0-56c0-88.4-71.6-160-160-160zm208 80l8 0 64 0c48.6 0 88 39.4 88 88l0 64 0 8-8 0-80 0 0 88 0 8-8 0-144 0 0 88 0 8-8 0-80 0-8 0 0-8 0-88-64 0 0 88 0 8-8 0-80 0-8 0 0-8 0-88L8 384l-8 0 0-8 0-64 0-8 8 0 408 0 0-168 0-8zM240 368l16 0 0 16 0 32 0 48 64 0 0-48 0-32 0-16 16 0 136 0 0-88 0-8 8 0 80 0 0-56c0-39.8-32.2-72-72-72l-56 0 0 168 0 8-8 0-104 0-64 0-96 0-64 0-80 0 0 48 64 0 16 0 0 16 0 32 0 48 64 0 0-48 0-32 0-16 16 0 64 0zM496 192a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Turtle;