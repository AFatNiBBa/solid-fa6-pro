
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bowling-pins` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowling-pins?s=sharp-duotone-solid bowling-pins}
 * @preview ![bowling-pins](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bowling-pins.svg)
 */
const BowlingPins: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M30.5 367.3l2.7 9.5 32 112L71.9 512 96 512l64 0 24.1 0 6.6-23.2 32-112 2.7-9.5-3.1-9.4L173 209.6c-1.9-5.7-3.3-11.6-4.1-17.6l-81.8 0c-.8 6-2.2 11.9-4.1 17.6L33.6 357.9l-3.1 9.4zM64 64l0 1.1c0 7.4 1 14.8 2.9 22l17.7 64.8c.7 2.7 1.3 5.4 1.8 8.1l83.2 0c.5-2.7 1.1-5.4 1.8-8.1L189.1 87c1.9-7.1 2.9-14.5 2.9-21.9l0-1.1c0-35.3-28.7-64-64-64S64 28.7 64 64zM286.5 367.3l2.7 9.5 32 112 6.6 23.2 24.1 0 64 0 24.1 0 6.6-23.2 32-112 2.7-9.5-3.1-9.4L429 209.6c-1.9-5.7-3.3-11.6-4.1-17.6l-81.8 0c-.8 6-2.2 11.9-4.1 17.6L289.6 357.9l-3.1 9.4zM320 64l0 1.1c0 7.4 1 14.8 3 22l17.7 64.8c.7 2.7 1.3 5.4 1.8 8.1l83.2 0c.5-2.7 1.1-5.4 1.8-8.1L445.1 87c1.9-7.1 2.9-14.5 2.9-21.9l0-1.1c0-35.3-28.7-64-64-64s-64 28.7-64 64z" />
        <path d="M86.5 160l83.2 0c-1 5.6-1.5 11.3-1.5 17.1l0 2.2c0 4.3 .3 8.5 .8 12.7l-81.8 0c.6-4.2 .9-8.5 .9-12.8l0-2.1c0-5.8-.5-11.5-1.5-17.1zm256 0l83.2 0c-1 5.6-1.5 11.3-1.5 17.1l0 2.2c0 4.3 .3 8.5 .8 12.7l-81.8 0c.6-4.2 .9-8.5 .9-12.8l0-2.1c0-5.8-.5-11.5-1.5-17.1z" />
    </Icon>
);

export default BowlingPins;