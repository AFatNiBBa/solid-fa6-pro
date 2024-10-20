
import { Icon, generic } from "../../index";

/**
 * A component that renders the `draw-circle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/draw-circle?s=sharp-duotone-solid draw-circle}
 * @preview ![draw-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/draw-circle.svg)
 */
const DrawCircle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M39.9 196.7c7.4-3 15.5-4.7 24.1-4.7c1.9 0 3.8 .1 5.6 .2s3.7 .4 5.5 .7c3.6 .6 7.1 1.6 10.5 2.8c6.7 2.4 12.9 5.9 18.4 10.3C119.8 158 157.7 120 205.7 104.1c.3-.1 .3-.1 .3-.1c-4.4-5.5-7.9-11.7-10.3-18.4c-1.2-3.4-2.1-6.9-2.8-10.5c-.3-1.8-.6-3.6-.7-5.5c-.1-.9-.1-1.9-.2-2.8s-.1-1.9-.1-2.8c0-1.2 0-2.2 .1-3.2c.1-1.1 .1-2.1 .2-3.1c.2-2.1 .5-4.1 .9-6.1c.8-4 2-7.9 3.5-11.6c-76 20.8-135.9 80.7-156.7 156.7zm0 118.6c20.8 76 80.7 135.9 156.7 156.7c-1.5-3.7-2.7-7.6-3.5-11.6c-.4-2-.7-4.1-.9-6.1c-.1-1-.2-2.1-.2-3.1s-.1-2.1-.1-3.2s0-2 .1-2.8c0-.9 .1-1.9 .2-2.8c.2-1.9 .4-3.7 .7-5.5c.6-3.6 1.6-7.1 2.8-10.5c2.4-6.7 5.9-12.9 10.3-18.4C158 392.2 120 354.3 104.1 306.3C93 314.8 79.1 320 64 320c-1.1 0-2.1 0-3.2-.1s-2.1-.1-3.1-.2c-2.1-.2-4.1-.5-6.1-.9c-4-.8-7.9-2-11.6-3.5zM306.3 104.1C354.3 120 392.2 158 408 206c11-8.8 24.8-14 40-14c2.2 0 4.3 .1 6.3 .3s4.1 .5 6.1 .9c4 .8 7.9 2 11.6 3.5c-20.8-76-80.7-135.9-156.7-156.7c3 7.4 4.7 15.5 4.7 24.1c0 .5 0 1 0 1.4l0 1.4c0 .9-.1 1.9-.2 2.8c-.2 1.8-.4 3.7-.7 5.5c-.6 3.6-1.6 7.1-2.8 10.5c-2.4 6.7-5.9 12.9-10 18.5zM306 408c8.7 10.9 14 24.7 14 40c0 .5 0 1.1 0 1.6l-.1 1.6c-.1 1-.1 2.1-.2 3.1c-.2 2.1-.5 4.1-.9 6.1c-.8 4-2 7.9-3.5 11.6c75.5-20.7 135.1-79.9 156.3-155.2l.4-1.5c-7.4 3-15.6 4.7-24.1 4.7c-.9 0-1.9 0-2.8-.1s-1.9-.1-2.8-.2c-1.8-.2-3.7-.4-5.5-.7c-3.6-.6-7.1-1.6-10.5-2.8c-6.7-2.4-12.9-5.9-18.5-10C392 354.3 354 392.2 306 408z" />
        <path d="M256 128A64 64 0 1 0 256 0a64 64 0 1 0 0 128zm0 384a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM128 256A64 64 0 1 0 0 256a64 64 0 1 0 128 0zm320 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default DrawCircle;