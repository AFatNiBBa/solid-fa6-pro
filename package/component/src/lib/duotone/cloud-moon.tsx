
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-moon` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-moon?s=duotone cloud-moon}
 * @preview ![cloud-moon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cloud-moon.svg)
 */
const CloudMoon: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M304 192.2C304 86.1 389.8 0 495.8 0c5.5 0 10.9 .2 16.3 .7c7 .6 12.8 5.7 14.3 12.5s-1.6 13.9-7.7 17.3c-44.4 25.2-74.4 73-74.4 127.8c0 81 65.5 146.6 146.2 146.6c8.6 0 17-.7 25.1-2.1c6.9-1.2 13.8 2.2 17 8.5c1.2 2.3 1.8 4.8 1.8 7.3c0 4.2-1.7 8.4-4.8 11.5c-34.5 33.6-81.7 54.4-133.6 54.4c-3.5 0-7-.1-10.5-.3c-13.6-28.6-39-50.6-69.9-59.6c-5.7-55.6-52-99.1-108.8-100.4c-1.7-10.4-2.6-21-2.6-31.8z" />
        <path d="M383.9 511.9L96 511.9c-53 0-96-43-96-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16l1.6 0c44.2 0 80 35.8 80 80s-35.8 80-80 80z" />
    </Icon>
);

export default CloudMoon;