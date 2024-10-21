
import { Icon } from "../../index";

/**
 * A component that renders the `turtle` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turtle?s=solid turtle}
 * @preview ![turtle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/turtle.svg)
 */
const Turtle: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M384 249.2c0 21.4-17.4 38.8-38.8 38.8L70.8 288C49.4 288 32 270.6 32 249.2L32 208c0-97.2 78.8-176 176-176s176 78.8 176 176l0 41.2zM480 288c-2 0-4-.1-5.9-.3c-16.3 53.3-64.3 92.7-122.1 96l0 56.2c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-56-32 0 0 56c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-56-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l72 0 48 0 112 0 48 0 32 0c39.8 0 72-32.2 72-72l0-24 0-32 0-16c0-35.3 28.7-64 64-64c53 0 96 43 96 96l0 16c0 35.3-28.7 64-64 64l-32 0zm16-64a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Turtle;