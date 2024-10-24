
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-sun` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-sun?s=sharp-solid cloud-sun}
 * @preview ![cloud-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cloud-sun.svg)
 */
const CloudSun: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M121.3 0L104 104 0 121.3 60.7 208 0 294.7 104 312l17.3 104 42-29.4c8.8-37.6 34.2-68.7 68-85.4c-7.5 1.9-15.3 2.9-23.4 2.9c-53 0-96-43-96-96s43-96 96-96s96 43 96 96l0 1.1c18.4-10.7 39.8-16.8 62.5-17.1L416 121.3 312 104 294.7 0 208 60.7 121.3 0zM272 208a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM639.9 511.9l0-80c0-39.3-28.4-72.1-65.8-78.7c1.2-5.6 1.9-11.3 1.9-17.2c0-44.2-35.8-80-80-80c-17 0-32.8 5.3-45.8 14.4C433.3 242.6 402.8 224 368 224c-53 0-96 43-96 96l0 1.3c-45.4 7.6-80 47.1-80 94.6l0 96 96 0 271.9 0 80 0z" />
    </Icon>
);

export default CloudSun;