
import { Icon, generic } from "../../index";

/**
 * A component that renders the `globe-pointer` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/globe-pointer?s=sharp-duotone-solid globe-pointer}
 * @preview ![globe-pointer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/globe-pointer.svg)
 */
const GlobePointer: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 10.2 .6 20.2 1.8 30.1L128.1 249c.4-19.6 2.4-38.7 5.5-57L8.1 192C2.8 212.5 0 233.9 0 256zm18.6-96l122 0c17-65.6 48.3-120 74-156.7C125.4 17.8 51.6 78.5 18.6 160zm141.8 79.5L263 209.3 302.7 249l-20.9 71 64 0c3.9-20.5 6.1-41.9 6.1-64s-2.2-43.5-6.1-64l-179.7 0c-2.9 15.3-4.9 31.2-5.7 47.5zM173.7 160l164.6 0c-11.4-40.2-28.4-75.9-45.8-105.4c-13-21.9-25.9-40-36.5-53.5c-10.5 13.5-23.5 31.6-36.5 53.5c-17.4 29.4-34.5 65.1-45.8 105.4zm60.7 321.1c7.7 11.6 15.1 21.6 21.5 29.8c10.5-13.5 23.5-31.6 36.5-53.5c17.4-29.4 34.5-65.1 45.8-105.4l-65.9 0-38 129.1zm63-477.7c25.7 36.7 57 91 74 156.7l122 0c-33-81.5-106.7-142.2-196-156.7zm0 505.3c89.2-14.5 163-75.2 196-156.7l-122 0c-17 65.6-48.3 120-74 156.7zm81-316.7c3.6 20.5 5.6 41.9 5.6 64s-2 43.5-5.6 64l125.6 0c5.3-20.5 8.1-41.9 8.1-64s-2.8-43.5-8.1-64l-125.6 0z" />
        <path d="M254.5 245.1L0 320l96 48 1.4 1.4-96 96 45.3 45.3 96-96L144 416l48 96 74.9-254.5-12.3-12.3z" />
    </Icon>
);

export default GlobePointer;