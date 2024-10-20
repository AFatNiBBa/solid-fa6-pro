
import { Icon, generic } from "../../index";

/**
 * A component that renders the `melon` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/melon?s=duotone melon}
 * @preview ![melon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/melon.svg)
 */
const Melon: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 38.5 8.5 75 23.7 107.7c5.8-67.1 48.2-149.8 119.2-220.8s153.8-113.4 220.8-119.2C331 8.5 294.5 0 256 0C114.6 0 0 114.6 0 256zm62.8 72.8c-14.8 51.9-7.2 88.3 11.8 107.9c.3 .3 .5 .5 .6 .6c19.4 19.1 55.8 26.8 108 11.9c51.2-14.6 110.2-49.6 163.3-102.7s88.1-112.1 102.7-163.3c15-52.4 7.1-88.9-12.2-108.2s-55.9-27.2-108.2-12.2c-51.2 14.6-110.2 49.6-163.3 102.7S77.4 277.6 62.8 328.8zm85.5 159.5C181 503.5 217.5 512 256 512c141.4 0 256-114.6 256-256c0-38.5-8.5-75-23.7-107.7c-5.8 67.1-48.2 149.8-119.2 220.8s-153.8 113.4-220.8 119.2z" />
        <path d="M363.7 23.7c54.8 25.5 99.2 69.8 124.6 124.6c-5.8 67.1-48.2 149.8-119.2 220.8s-153.8 113.4-220.8 119.2c-27.3-12.7-52-30-73.1-51c19.4 19.1 55.8 26.8 108 11.9c51.2-14.6 110.2-49.6 163.3-102.7s88.1-112.1 102.7-163.3c15-52.4 7.1-88.9-12.2-108.2s-55.9-27.2-108.2-12.2c-51.2 14.6-110.2 49.6-163.3 102.7S77.4 277.6 62.8 328.8c-14.9 52.1-7.2 88.6 11.9 108c-21-21.1-38.4-45.8-51-73.1c5.8-67.1 48.2-149.8 119.2-220.8s153.8-113.4 220.8-119.2z" />
    </Icon>
);

export default Melon;