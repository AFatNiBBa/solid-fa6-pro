
import { Icon, generic } from "../../index";

/**
 * A component that renders the `globe-wifi` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/globe-wifi?s=sharp-duotone-solid globe-wifi}
 * @preview ![globe-wifi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/globe-wifi.svg)
 */
const GlobeWifi: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256c0 22.1 2.8 43.5 8.1 64l125.6 0c-3.6-20.5-5.6-41.9-5.6-64s2-43.5 5.6-64L8.1 192C2.8 212.5 0 233.9 0 256zm18.6-96l122 0c17-65.6 48.3-120 74-156.7C125.4 17.8 51.6 78.5 18.6 160zm0 192c33 81.5 106.7 142.2 196 156.7c-25.7-36.7-57-91-74-156.7l-122 0zM160 256c0 22.1 2.2 43.5 6.1 64l160.5 0c5.4-19.2 14-37 25.2-53c.1-3.7 .2-7.3 .2-11c0-22.1-2.2-43.5-6.1-64l-179.7 0c-3.9 20.5-6.1 41.9-6.1 64zm13.7-96l164.6 0c-11.4-40.2-28.4-75.9-45.8-105.4c-13-21.9-25.9-40-36.5-53.5c-10.5 13.5-23.5 31.6-36.5 53.5c-17.4 29.4-34.5 65.1-45.8 105.4zm0 192c11.4 40.2 28.4 75.9 45.8 105.4c13 21.9 25.9 40 36.5 53.5c10.5-13.5 23.5-31.6 36.5-53.5c10.5-17.8 20.9-37.9 30-59.9c-1.6-9.6-2.5-19.4-2.5-29.5c0-5.4 .2-10.7 .7-16l-147 0zM297.4 3.3c25.7 36.7 57 91 74 156.7l122 0c-33-81.5-106.7-142.2-196-156.7zm0 505.3c24.3-4 47.5-11.3 69-21.6c-12-13-22-27.8-29.6-44c-12.9 25.6-26.8 47.7-39.3 65.6zm81-316.7c2.3 13.3 4 26.9 4.9 40.8C413.8 207.4 453 192 496 192l-117.6 0zM496 192c2.8 0 5.4 .1 8 .2c-2.6-.2-5.2-.2-8-.2z" />
        <path d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm86.9-145.2C564.3 338.6 532.3 320 496 320s-68.3 18.6-86.9 46.8l-25.6-19.2c24.5-36 65.7-59.6 112.5-59.6s88.1 23.6 112.5 59.6l-25.6 19.2zM560 384l-25.6 19.2C525.6 391.5 511.7 384 496 384s-29.6 7.5-38.4 19.2L432 384c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm-84 48a20 20 0 1 1 40 0 20 20 0 1 1 -40 0z" />
    </Icon>
);

export default GlobeWifi;