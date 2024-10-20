
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hockey-sticks` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-sticks?s=duotone hockey-sticks}
 * @preview ![hockey-sticks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hockey-sticks.svg)
 */
const HockeySticks: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 384l0 96c0 17.7 14.3 32 32 32l32 0 0-160-32 0c-17.7 0-32 14.3-32 32zm96-32l0 128 0 32 32 0 32 0 44.2 0c24.2 0 46.4-13.7 57.2-35.4L476.6 46.3c7.9-15.8 1.5-35-14.3-42.9C457.7 1.1 452.8 0 448 0c-11.7 0-23 6.5-28.6 17.7L252.2 352 96 352zm448 0l0 128c0 10.7 0 21.3 0 32l32 0c0-53.3 0-106.7 0-160l-32 0z" />
        <path d="M220.6 17.7l81.5 163-35.8 71.6L163.4 46.3c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3zM337.9 395.3l35.8-71.6L387.8 352 544 352l0 128 0 32-32 0-32 0-44.2 0c-24.2 0-46.4-13.7-57.2-35.4l-40.6-81.3zM608 352c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-32 0 0-160 32 0zM96 352l0 160-32 0 0-160 32 0z" />
    </Icon>
);

export default HockeySticks;