
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rabbit-running` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rabbit-running?s=sharp-duotone-solid rabbit-running}
 * @preview ![rabbit-running](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/rabbit-running.svg)
 */
const RabbitRunning: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M78.6 254.9c4.9 17.2 14.5 33.1 28.4 45.9L258.4 439.6l9.2 8.4 12.4 0 128 0 32 0 0-64-32 0-64 0-16.8 0L312 384l0-43.5c0-42.9-28.4-80.5-69.6-92.3l-30.8-8.8 8.8-30.8 30.8 8.8c55 15.7 92.8 65.9 92.8 123.1l0 15.7 56-32.4 6.4-3.7L568 320l0-88.9-71-57.9c8-48.9-7.6-99.1-42.8-135L448 32l-24 0-4.7 16.5c-3.2 11.2-5 22.5-5.6 33.8c23.5 20.8 41.5 47.4 51.9 77.7l-25.6 0c-18-44.5-55.4-79-102.1-93L328 64 296 80l7.1 19.7c13.5 37.5 39.5 68.4 72.9 88.2l0 26.8L271.7 154.9C240.8 137.3 205.8 128 170.2 128c-32.3 0-62.2 16.8-78.9 44.4l-.3 .4c-.7 1.1-1.4 2.3-2.1 3.4c-14.6 24.3-17.7 52.8-10.3 78.6zm46.7 171l35 53.6L187.1 462l28.2-18.4-48.7-44.6-14.5 9.5-26.8 17.5zM504 240a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M48 152c17.4 0 33 7.9 43.2 20.4l-.3 .4-2.1 3.4c-14.6 24.3-17.7 52.8-10.3 78.6C69.8 260.7 59.3 264 48 264c-30.9 0-56-25.1-56-56s25.1-56 56-56zm440 72a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default RabbitRunning;