
import { Icon, generic } from "../../index";

/**
 * A component that renders the `route-highway` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/route-highway?s=sharp-duotone-solid route-highway}
 * @preview ![route-highway](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/route-highway.svg)
 */
const RouteHighway: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 322.5c0 50 29.1 95.4 74.6 116.3l136.1 62.4 13.3 6.1 13.3-6.1 136.1-62.4c45.5-20.8 74.6-66.3 74.6-116.3c0-16.3-3.1-32.4-9.1-47.5l-15.8-39.5c-4.7-11.7-7.1-24.1-7.1-36.6c0-2.3 .1-4.6 .2-6.8L31.8 192c.2 2.3 .2 4.6 .2 6.8c0 12.5-2.4 25-7.1 36.6L9.1 275C3.1 290.1 0 306.2 0 322.5z" />
        <path d="M224 2.7l16.5 9.9 4.7 2.8c37.5 22.5 84 24.3 123.1 4.7l1.4-.7L396.8 5.8l15 26.3 32 56 8.5 14.9-7.7 15.3-18.2 36.4c-5.8 11.7-9.3 24.3-10.2 37.3L31.8 192c-.9-13-4.4-25.6-10.2-37.3L3.4 118.3-4.3 103 4.2 88.1l32-56 15-26.3L78.3 19.4l1.4 .7c39.1 19.6 85.6 17.8 123.1-4.7l4.7-2.8L224 2.7z" />
    </Icon>
);

export default RouteHighway;