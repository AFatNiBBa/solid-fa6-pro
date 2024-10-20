
import { Icon } from "../../index";

/**
 * A component that renders the `turtle` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turtle?s=regular turtle}
 * @preview ![turtle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/turtle.svg)
 */
const Turtle: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M336 240l0-32c0-70.7-57.3-128-128-128S80 137.3 80 208l0 32 256 0zm48-32l0 41.2c0 21.4-17.4 38.8-38.8 38.8L70.8 288C49.4 288 32 270.6 32 249.2L32 208c0-97.2 78.8-176 176-176s176 78.8 176 176zm96 80c-8.3 0-16.3-1.6-23.6-4.5C440.3 328 400.4 361 352 367l0 1 0 72c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-72-32 0 0 72c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-72-40 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l40 0 48 0 32 0 48 0 32 0 48 0 32 0 32 0c44.2 0 80-35.8 80-80l0-16 0-32 0-16c0-35.3 28.7-64 64-64c53 0 96 43 96 96l0 16c0 35.3-28.7 64-64 64l-32 0zM272 368l0 64 32 0 0-64-32 0zm-160 0l0 64 32 0 0-64-32 0zM496 224a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Turtle;