
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-up-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up-left?s=duotone circle-up-left}
 * @preview ![circle-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-up-left.svg)
 */
const CircleUpLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm160-80c0-8.8 7.2-16 16-16l137.4 0c12.5 0 22.6 10.1 22.6 22.6c0 6-2.4 11.8-6.6 16L296 232l66.3 66.3c3.6 3.6 5.7 8.5 5.7 13.7s-2 10-5.7 13.7l-36.7 36.7C322 366 317.1 368 312 368s-10-2-13.7-5.7L232 296l-33.4 33.4c-4.2 4.2-10 6.6-16 6.6c-12.5 0-22.6-10.1-22.6-22.6L160 176z" />
        <path d="M160 176l0 137.4c0 12.5 10.1 22.6 22.6 22.6c6 0 11.8-2.4 16-6.6L232 296l66.3 66.3c3.6 3.6 8.5 5.7 13.7 5.7s10-2 13.7-5.7l36.7-36.7c3.6-3.6 5.7-8.5 5.7-13.7s-2-10-5.7-13.7L296 232l33.4-33.4c4.2-4.2 6.6-10 6.6-16c0-12.5-10.1-22.6-22.6-22.6L176 160c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default CircleUpLeft;