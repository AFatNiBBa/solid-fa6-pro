
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wheelchair-move` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wheelchair-move?s=duotone wheelchair-move}
 * @preview ![wheelchair-move](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/wheelchair-move.svg)
 */
const WheelchairMove: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 352c0 88.4 71.6 160 160 160s160-71.6 160-160c0-22.8-4.8-44.4-13.3-64c-20.5-46.9-62.9-82.1-114.3-92.7C182 193.1 171.1 192 160 192C71.6 192 0 263.6 0 352zm256 0A96 96 0 1 1 64 352a96 96 0 1 1 192 0z" />
        <path d="M320 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM172.8 54.4c9.5-7.1 22.1-8.4 32.8-3.4l116.5 54.8c29.1 13.7 36.8 51.6 15.2 75.5L299.1 224l97.4 0c30.3 0 53 27.7 47.1 57.4L415.4 422.3c-3.5 17.3-20.3 28.6-37.7 25.1s-28.6-20.3-25.1-37.7L377 288l-70.3 0c-20.5-46.9-62.9-82.1-114.3-92.7l54.2-54.2-50.8-23.9-48.6 36.4c-14.1 10.6-34.2 7.7-44.8-6.4s-7.7-34.2 6.4-44.8l64-48z" />
    </Icon>
);

export default WheelchairMove;