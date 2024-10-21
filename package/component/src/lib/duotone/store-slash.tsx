
import { Icon, generic } from "../../index";

/**
 * A component that renders the `store-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/store-slash?s=duotone store-slash}
 * @preview ![store-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/store-slash.svg)
 */
const StoreSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M48 146.5c0-4 .3-8 .9-12l106.4 83.9c-9.6 3.6-20 5.6-31 5.6c-4.1 0-8.2-.3-12.1-.8C72.7 217.9 48 183 48 146.5zM94.9 49.1l22.7-36C122.8 5 131.9 0 141.6 0L498.4 0c9.7 0 18.8 5 23.9 13.1l57.3 90.7c29.7 46.9 3.4 112-52.1 119.4c-4 .5-7.9 .8-12.1 .8c-26.1 0-49.2-11.4-65.2-29c-15.9 17.6-39 29-65.2 29c-26.1 0-49.3-11.4-65.2-29c-5.5 6-11.8 11.3-18.8 15.7L94.9 49.1zM96 252.6c3.9 1 7.9 1.7 12.1 2.3c5.3 .7 10.7 1.1 16.3 1.1c12.5 0 24.4-1.9 35.6-5.4L160 384l205.5 0L514.9 501.7c-10 6.5-22 10.3-34.9 10.3l-320 0c-35.3 0-64-28.7-64-64l0-64 0-131.4zm384-2c11.2 3.5 23.1 5.3 35.4 5.3c5.6 0 10.9-.4 16.3-1.1c4.2-.6 8.3-1.3 12.3-2.3L544 384l0 17.1c-21.3-16.7-42.7-33.4-64-50.2l0-100.3z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default StoreSlash;