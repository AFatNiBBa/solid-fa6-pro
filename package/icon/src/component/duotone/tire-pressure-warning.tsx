
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tire-pressure-warning` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tire-pressure-warning?s=duotone tire-pressure-warning}
 * @preview ![tire-pressure-warning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tire-pressure-warning.svg)
 */
const TirePressureWarning: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M2 290.4c0 7.5 .4 15.1 1.3 22.9C8.6 361.9 31.3 412.3 80 462l0 34c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-8 32 0 0 8c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-8 32 0 0 8c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-8 32 0 0 8c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-34c48.7-49.7 71.4-100.1 76.8-148.7c.9-7.8 1.3-15.4 1.3-22.9c0-44.1-13.7-82.8-28.7-113.2c-7.8-15.8-14.5-30-19.3-44.4l-2.5-7.4C451.9 102.5 448 78.5 448 54.5L448 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 22.5c0 31 5 61.7 14.8 91.1l2.5 7.4c6.3 19 14.8 36.6 22.6 52.5c14.7 29.7 25.3 64 21.3 100.9c-3.7 34-20.4 74.1-65.7 117.7l-246.8 0c-45.3-43.6-62-83.7-65.7-117.7c-4.1-36.9 6.6-71.1 21.3-100.9c7.8-15.8 16.3-33.5 22.6-52.5l2.5-7.4C123 116.2 128 85.4 128 54.5L128 32c0-17.7-14.3-32-32-32S64 14.3 64 32l0 22.5c0 24.1-3.9 48-11.5 70.8L50 132.7c-4.8 14.4-11.5 28.6-19.3 44.4C15.7 207.6 2 246.3 2 290.4z" />
        <path d="M280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112zM256 352a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default TirePressureWarning;