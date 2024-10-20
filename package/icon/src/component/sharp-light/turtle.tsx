
import { Icon } from "../../index";

/**
 * A component that renders the `turtle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turtle?s=sharp-light turtle}
 * @preview ![turtle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/turtle.svg)
 */
const Turtle: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M200 64C124.9 64 64 124.9 64 200l0 40 0 16-32 0 0-16 0-40c0-92.8 75.2-168 168-168s168 75.2 168 168l0 40 0 16-32 0 0-16 0-40c0-75.1-60.9-136-136-136zm200 48l16 0 56 0c57.4 0 104 46.6 104 104l0 56 0 16-16 0-64 0 0 80 0 16-16 0-128 0 0 80 0 16-16 0-96 0-16 0 0-16 0-80-32 0 0 80 0 16-16 0-96 0-16 0 0-16 0-80-48 0L0 384l0-16 0-64 0-16 16 0 384 0 0-160 0-16zM256 448l64 0 0-32 0-32 0-32 144 0 0-80 0-16 16 0 64 0 0-40c0-39.8-32.2-72-72-72l-40 0 0 160 0 16-16 0-96 0-64 0-96 0-64 0-64 0 0 32 64 0 0 32 0 32 0 32 64 0 0-32 0-32 0-32 96 0 0 32 0 32 0 32zM480 192a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Turtle;