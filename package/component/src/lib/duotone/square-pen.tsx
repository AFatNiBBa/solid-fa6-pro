
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-pen` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-pen?s=duotone square-pen}
 * @preview ![square-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-pen.svg)
 */
const SquarePen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM96.5 364l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9L225.1 183.8l71 71L190.9 359.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2zM247.8 161.1l21.4-21.4c7.8-7.8 18-11.7 28.3-11.7s20.5 3.9 28.3 11.7l14.4 14.4c7.8 7.8 11.7 18 11.7 28.3s-3.9 20.5-11.7 28.3l-21.4 21.4-71-71z" />
        <path d="M269.2 139.7l-21.4 21.4 71 71 21.4-21.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4c-15.6-15.6-40.9-15.6-56.6 0zm-44 44L119.9 289c-4.1 4.1-7 9.2-8.4 14.9L96.5 364c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L296.1 254.7l-71-71z" />
    </Icon>
);

export default SquarePen;