
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-rainbow` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-rainbow?s=solid cloud-rainbow}
 * @preview ![cloud-rainbow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/cloud-rainbow.svg)
 */
const CloudRainbow: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M560 64.4C466.8 69.5 385.4 119 336.5 192l-.5 0c-19.7 0-38.3 5.1-54.4 14.1c-5.5-6-11.5-11.4-18-16.4C319.9 81.4 430.9 6.1 560 .4c8.8-.4 16 6.8 16 15.6l0 32c0 8.8-7.2 16-16 16.4zM424 234.7c-13.3-16.9-31.5-29.9-52.3-36.9C415.4 139.9 483.1 101.2 560 96.5c8.8-.5 16 6.7 16 15.5l0 32c0 8.8-7.2 15.9-16 16.7c-55.3 4.6-104 32.6-136 74zm23.4 57.2c-1-9.1-3-17.9-6.1-26.2c25.7-40.1 68.9-67.9 118.8-72.9c8.8-.9 16 6.4 16 15.2l0 32c0 8.8-7.2 15.9-15.9 17.3c-31.4 5.2-57.7 25.8-70.9 53.7c-12.5-8.7-26.6-15.3-41.8-19.1zM96 512c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 318.1 64 311.1 64 304c0-61.9 50.1-112 112-112c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96L96 512z" />
    </Icon>
);

export default CloudRainbow;