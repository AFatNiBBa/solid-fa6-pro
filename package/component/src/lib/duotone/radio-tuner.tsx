
import { Icon, generic } from "../../index";

/**
 * A component that renders the `radio-tuner` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/radio-tuner?s=duotone radio-tuner}
 * @preview ![radio-tuner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/radio-tuner.svg)
 */
const RadioTuner: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192c0-21.4 10.5-40.3 26.7-52c10.5-7.6 23.4-12 37.3-12c51.5 0 103 0 154.5 0c76.5 0 153 0 229.5 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192zm64.2 28.7c-.1 .6-.1 1.1-.1 1.6c0 .5 0 1.1 0 1.6c0 .8 0 1.3 0 1.8c0 0 0 .8 .1 1.6c.1 1.1 .3 2.1 .5 3.2c.4 2.1 1.1 4.1 1.9 6c1.6 3.8 4 7.3 6.9 10.2c5.8 5.8 13.8 9.4 22.6 9.4c106.7 0 213.3 0 320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32c-106.7 0-213.3 0-320 0c-8.8 0-16.8 3.6-22.6 9.4c-2.9 2.9-5.2 6.3-6.9 10.2c-.8 1.9-1.4 3.9-1.9 6c-.2 1-.4 2.1-.5 3.2zM64 352c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 336c-8.8 0-16 7.2-16 16zm16 64c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16zm240-32a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M511 17.3c3.7 12.7-3.6 26.1-16.3 29.8L218.5 128 64 128c-13.9 0-26.9 4.5-37.4 12c7.3-5.9 15.7-10.4 25.1-13.2L481.3 1C494-2.8 507.3 4.5 511 17.3zM64 224c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 256c-17.7 0-32-14.3-32-32zM320 384a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default RadioTuner;