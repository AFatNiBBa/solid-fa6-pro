
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flag-checkered` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag-checkered?s=sharp-duotone-solid flag-checkered}
 * @preview ![flag-checkered](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/flag-checkered.svg)
 */
const FlagCheckered: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 150.2l69-17.2c19.4-4.9 39.4-6.1 59-3.8l0 96c-19.6-2.3-39.6-1.1-59 3.8L64 246.2l0-96zM192 27c18.8 2.2 37.2 7.7 54.4 16.3c23.2 11.6 48.4 17.4 73.6 17.4l0 102.2c-25.2 0-50.4-5.8-73.6-17.4c-17.2-8.6-35.6-14-54.4-16.3L192 27zm0 198.2c18.8 2.2 37.2 7.7 54.4 16.3c23.2 11.6 48.4 17.4 73.6 17.4l0 109.1c-23.9-1.4-47.4-7.5-69.3-18.5c-18.6-9.3-38.5-15.2-58.7-17.5l0-106.7zm128-62.4c25.2 0 50.4-5.8 73.6-17.4c18.1-9.1 36.3-18.1 54.4-27.2l0 96c-18.1 9.1-36.3 18.1-54.4 27.2c-23.2 11.6-48.4 17.4-73.6 17.4l0-96z" />
        <path d="M64 32L64 0 0 0 0 32 0 480l0 32 64 0 0-32 0-128 64.3-16.1c21-5.2 42.6-6.6 63.7-4.1l0-106.7c-19.6-2.3-39.6-1.1-59 3.8L64 246.2l0-96 69-17.2c19.4-4.9 39.4-6.1 59-3.8l0 96c18.8 2.2 37.2 7.7 54.4 16.3c23.2 11.6 48.4 17.4 73.6 17.4l0 109.1c24.4 1.4 49.1-2.2 72.5-11L448 336l0-121.8-54.4 27.2c-23.2 11.6-48.4 17.4-73.6 17.4l0-96c25.2 0 50.4-5.8 73.6-17.4L448 118.2 448 16 393.6 43.2C370.4 54.8 345.2 60.6 320 60.6l0 102.2c-25.2 0-50.4-5.8-73.6-17.4c-17.2-8.6-35.6-14-54.4-16.3L192 27c-19.6-2.3-39.6-1.1-59 3.8L64 48l0-16z" />
    </Icon>
);

export default FlagCheckered;