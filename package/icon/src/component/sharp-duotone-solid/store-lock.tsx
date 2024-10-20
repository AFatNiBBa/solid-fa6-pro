
import { Icon, generic } from "../../index";

/**
 * A component that renders the `store-lock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/store-lock?s=sharp-duotone-solid store-lock}
 * @preview ![store-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/store-lock.svg)
 */
const StoreLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M48 146.5c0 36.5 24.7 71.4 64.2 76.7c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c19.4 0 37.1-6.3 51.5-16.7C456.8 178.7 490.2 160 528 160c21.4 0 41.3 6 58.3 16.4c8.9-22.7 7.7-49.8-6.7-72.6L512 0 128 0 60.3 103.8C51.9 117.1 48 131.9 48 146.5zM96 252.6L96 384l0 128 288 0 0-128-224 0 0-133.4c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1c-4.2-.6-8.2-1.3-12.1-2.3z" />
        <path d="M496 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0z" />
    </Icon>
);

export default StoreLock;