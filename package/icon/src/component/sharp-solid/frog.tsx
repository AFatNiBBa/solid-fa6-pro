
import { Icon } from "../../index";

/**
 * A component that renders the `frog` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/frog?s=sharp-solid frog}
 * @preview ![frog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/frog.svg)
 */
const Frog: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M368 32c41.7 0 75.9 31.8 79.7 72.5L576 144l0 80L400.8 323.5 493.3 416l50.7 0 32 0 0 64-32 0-64 0-13.3 0-9.4-9.4L346.9 360.2c11.7-36 3.2-77.1-25.4-105.7c-40.6-40.6-106.3-40.6-146.9-.1L101 324.4l-11.6 11 22.1 23.2 11.6-11 73.8-70.2 .1-.1 .1-.1c3.5-3.5 7.3-6.6 11.3-9.2c27.9-18.5 65.9-15.4 90.5 9.2c24.7 24.7 27.7 62.9 9 90.9c-2.6 3.8-5.6 7.5-9 10.9L261.8 416l58.2 0 32 0 0 64-32 0L32 480 0 480l0-32 0-32C0 249.6 127 112.9 289.3 97.5C296.2 60.2 328.8 32 368 32zm0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Frog;