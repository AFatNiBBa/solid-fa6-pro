
import { Icon } from "../../index";

/**
 * A component that renders the `bug` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bug?s=sharp-solid bug}
 * @preview ![bug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bug.svg)
 */
const Bug: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c-53 0-96 43-96 96l0 32 192 0 0-32c0-53-43-96-96-96zM86.6 105.4L64 82.7 18.7 128l22.6 22.6L96 205.3 96 256l-64 0L0 256l0 64 32 0 64 0c0 24.2 5.4 47.2 15 67.7L57.4 441.4 34.7 464 80 509.3l22.6-22.6 47.1-47.1c24.5 21.8 55.8 36.2 90.3 39.6L240 240l0-16 32 0 0 16 0 239.2c34.5-3.4 65.8-17.8 90.3-39.6l47.1 47.1L432 509.3 477.3 464l-22.6-22.6L401 387.7c9.6-20.6 15-43.5 15-67.7l64 0 32 0 0-64-32 0-64 0 0-50.7 54.6-54.6L493.3 128 448 82.7l-22.6 22.6L370.7 160l-229.5 0L86.6 105.4z" />
    </Icon>
);

export default Bug;