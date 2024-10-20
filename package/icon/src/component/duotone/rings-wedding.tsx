
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rings-wedding` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rings-wedding?s=duotone rings-wedding}
 * @preview ![rings-wedding](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/rings-wedding.svg)
 */
const RingsWedding: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 48c0-2.5 .6-4.9 1.7-7.2l16-32C116.4 3.4 121.9 0 128 0l96 0c6.1 0 11.6 3.4 14.3 8.8l16 32c2.3 4.5 2.3 9.8 0 14.3l-24.6 49.2c-8.5-2.7-17.2-4.8-26.2-6.2c-4.5-.7-9-1.2-13.6-1.6c-2.3-.2-4.6-.3-6.9-.4c-1.2 0-2.3-.1-3.5-.1s-2.3 0-3.5 0c-18.7 0-36.8 2.9-53.7 8.3L97.7 55.2C96.6 52.9 96 50.5 96 48zm64 288c0-64.4 34.5-120.7 86.1-151.3c16.8 13.5 29.7 31.8 36.5 52.9c-34.9 19-58.6 56-58.6 98.5c0 61.9 50.1 112 112 112s112-50.1 112-112c0-46.1-27.8-85.7-67.6-102.9c-5-26.2-14.8-50.7-28.6-72.4C441.6 168.7 512 244.1 512 336c0 97.2-78.8 176-176 176c-55.3 0-104.7-25.5-137-65.5c-14.8-18.3-26-39.6-32.5-62.9c-4.2-15.1-6.5-31.1-6.5-47.6z" />
        <path d="M176 160c-61.9 0-112 50.1-112 112c0 58.7 45.1 106.8 102.5 111.6c6.5 23.3 17.7 44.6 32.5 62.9c-7.5 1-15.2 1.5-23 1.5C78.8 448 0 369.2 0 272S78.8 96 176 96s176 78.8 176 176c0 52.3-22.8 99.2-59 131.5c-18.7-11.9-32.1-31.5-35.9-54.2C276.2 329.2 288 302 288 272c0-61.9-50.1-112-112-112z" />
    </Icon>
);

export default RingsWedding;