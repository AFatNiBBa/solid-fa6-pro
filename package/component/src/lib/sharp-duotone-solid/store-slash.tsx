
import { Icon, generic } from "../../index";

/**
 * A component that renders the `store-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/store-slash?s=sharp-duotone-solid store-slash}
 * @preview ![store-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/store-slash.svg)
 */
const StoreSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M48.9 134.5c-6.1 40.6 19.5 82.8 63.3 88.7c4 .5 8.1 .8 12.1 .8c11 0 21.4-2 31-5.6L48.9 134.5zM94.8 50.9l206.1 160c7.1-4.4 13.5-9.7 19-15.8c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c39.7-5.3 64.5-40.1 64.5-76.7c0-14.5-3.9-29.4-12.4-42.7L512 0 128 0 94.8 50.9zM96 252.6L96 384l0 128 448 0-16 0L365.5 384 160 384l0-133.4c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1c-4.2-.6-8.2-1.3-12.1-2.3zm384-2l0 99.2c21.3 16.6 42.7 33.1 64 49.7l0-15.6 0-131.4c-4 1-8 1.8-12.3 2.3c-5.4 .7-10.7 1.1-16.3 1.1c-12.4 0-24.3-1.9-35.4-5.3z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default StoreSlash;