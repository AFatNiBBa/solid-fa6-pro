
import { Icon } from "../../index";

/**
 * A component that renders the `stars` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stars?s=sharp-light stars}
 * @preview ![stars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/stars.svg)
 */
const Stars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 0l0 16 0 64 64 0 16 0 0 32-16 0-64 0 0 64 0 16-32 0 0-16 0-64-64 0-16 0 0-32 16 0 64 0 0-64 0-16 32 0zM464 160l0 16 0 32 32 0 16 0 0 32-16 0-32 0 0 32 0 16-32 0 0-16 0-32-32 0-16 0 0-32 16 0 32 0 0-32 0-16 32 0zM211.3 180.2l41.9 85L347 278.8l39.9 5.8-28.9 28.1-67.9 66.2 16 93.4L313 512l-35.7-18.8-83.9-44.1-83.9 44.1L73.9 512l6.8-39.7 16-93.4L28.9 312.7 0 284.6l39.9-5.8 93.8-13.6 41.9-85L193.5 144l17.8 36.2zm37.3 116.7L232 294.4l-7.4-15.1-31.1-63-31.1 63-7.4 15.1-16.6 2.4L68.8 306.9l50.3 49 12 11.7-2.8 16.6-11.9 69.2 62.2-32.7 14.9-7.8 14.9 7.8 62.2 32.7-11.9-69.2-2.8-16.6 12-11.7 50.3-49-69.5-10.1z" />
    </Icon>
);

export default Stars;