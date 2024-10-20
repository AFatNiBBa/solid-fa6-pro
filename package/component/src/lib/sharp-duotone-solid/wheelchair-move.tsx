
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wheelchair-move` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wheelchair-move?s=sharp-duotone-solid wheelchair-move}
 * @preview ![wheelchair-move](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wheelchair-move.svg)
 */
const WheelchairMove: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 352c0 88.4 71.6 160 160 160s160-71.6 160-160c0-22.8-4.8-44.4-13.3-64c-20.5-46.9-62.9-82.1-114.3-92.7C182 193.1 171.1 192 160 192C71.6 192 0 263.6 0 352zm256 0A96 96 0 1 1 64 352a96 96 0 1 1 192 0z" />
        <path d="M320 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM198.2 42.8l16.9 9 120 64 34 18.1L345 164l-48 60 111 0 37.2 0-5.5 36.7-24 160-4.7 31.6-63.3-9.5 4.7-31.6L370.8 288l-64.2 0c-20.5-46.9-62.9-82.1-114.3-92.7l54.2-54.2-44.8-23.9-56.1 37.4-26.6 17.8L83.6 119.1l26.6-17.8 72-48 15.9-10.6z" />
    </Icon>
);

export default WheelchairMove;