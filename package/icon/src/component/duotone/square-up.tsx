
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-up?s=duotone square-up}
 * @preview ![square-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-up.svg)
 */
const SquareUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM96 233.7c0-6.2 2.6-12.1 7.1-16.3l107.1-99.9c3.8-3.5 8.7-5.5 13.8-5.5s10.1 2 13.8 5.5c35.7 33.3 71.4 66.6 107.1 99.9c4.5 4.2 7.1 10.1 7.1 16.3c0 12.3-10 22.3-22.3 22.3L272 256l0 96c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-96-57.7 0C106 256 96 246 96 233.7z" />
        <path d="M210.2 117.5L103.1 217.4c-4.5 4.2-7.1 10.1-7.1 16.3C96 246 106 256 118.3 256l57.7 0 0 96c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-96 57.7 0c12.3 0 22.3-10 22.3-22.3c0-6.2-2.6-12.1-7.1-16.3L237.8 117.5c-3.8-3.5-8.7-5.5-13.8-5.5s-10.1 2-13.8 5.5z" />
    </Icon>
);

export default SquareUp;