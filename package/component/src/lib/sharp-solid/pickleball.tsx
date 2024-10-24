
import { Icon } from "../../index";

/**
 * A component that renders the `pickleball` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pickleball?s=sharp-solid pickleball}
 * @preview ![pickleball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pickleball.svg)
 */
const Pickleball: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 0L528 240l-9 9c-24.8-15.7-54.3-24.8-85.9-24.8c-72 0-133 47.3-153.3 112.5L155.7 212.8l-11.3-11.3-22.6 22.7 11.3 11.3L273 374.9c-.2 3-.3 6.1-.3 9.1c0 31.7 9.2 61.2 25.2 86L288 480 160 432 80 512 16 448l80-80L48 240 288 0zm16 384a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zm32-16a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm80 80a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm0-64a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm96 0a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm-80-80a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
    </Icon>
);

export default Pickleball;