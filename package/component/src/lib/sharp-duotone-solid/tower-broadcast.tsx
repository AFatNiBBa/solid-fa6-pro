
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tower-broadcast` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tower-broadcast?s=sharp-duotone-solid tower-broadcast}
 * @preview ![tower-broadcast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tower-broadcast.svg)
 */
const TowerBroadcast: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128c0 45.8 10.7 89.1 29.7 127.5l57.4-28.3C72.3 197.3 64 163.6 64 128s8.3-69.3 23.1-99.2L29.7 .5C10.7 38.9 0 82.2 0 128zm102.5 49.7c3.3 12.4 7.8 24.2 13.3 35.3l57.4-28.3c-3.6-7.4-6.6-15.3-8.8-23.6c-8.4-31.3-4.4-62.9 8.9-89.8L115.8 43C95.9 83.3 90 130.8 102.5 177.7zM402.8 71.3c3.6 7.4 6.6 15.3 8.8 23.6c8.4 31.3 4.4 62.9-8.9 89.8L460.2 213c19.9-40.3 25.9-87.8 13.3-134.7c-3.3-12.4-7.8-24.2-13.3-35.3L402.8 71.3zm86.1-42.5C503.7 58.7 512 92.4 512 128s-8.3 69.3-23.1 99.2l57.4 28.3c19-38.4 29.7-81.7 29.7-127.5s-10.7-89.1-29.7-127.5L488.9 28.8z" />
        <path d="M320 183.4c19.1-11.1 32-31.7 32-55.4c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.4 32 55.4L256 480l0 32 64 0 0-32 0-296.6z" />
    </Icon>
);

export default TowerBroadcast;