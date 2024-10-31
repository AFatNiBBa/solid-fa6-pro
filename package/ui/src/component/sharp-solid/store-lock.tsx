
import { Icon } from "../../index";

/**
 * A component that renders the `store-lock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/store-lock?s=sharp-solid store-lock}
 * @preview ![store-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/store-lock.svg)
 */
const StoreLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M579.6 103.8L512 0 128 0 60.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c19.4 0 37.1-6.3 51.5-16.7C456.8 178.7 490.2 160 528 160c21.4 0 41.3 6 58.3 16.4c8.9-22.7 7.7-49.8-6.7-72.6zM160 384l0-133.4c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3L96 384l0 128 288 0 0-128-224 0zM528 240c17.7 0 32 14.3 32 32l0 48-64 0 0-48c0-17.7 14.3-32 32-32zm-80 32l0 48-32 0 0 192 224 0 0-192-32 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
    </Icon>
);

export default StoreLock;