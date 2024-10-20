
import { Icon, generic } from "../../index";

/**
 * A component that renders the `boxing-glove` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boxing-glove?s=duotone boxing-glove}
 * @preview ![boxing-glove](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/boxing-glove.svg)
 */
const BoxingGlove: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 400l0 48c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-48-131.2 0 28 18.7c7.4 4.9 9.3 14.8 4.4 22.2s-14.8 9.3-22.2 4.4L192 419.2l-39.1 26.1c-7.4 4.9-17.3 2.9-22.2-4.4s-2.9-17.3 4.4-22.2l28-18.7L32 400z" />
        <path d="M96 0C43 0 0 43 0 96L0 288c0 28.4 12.4 54 32 71.6L32 400l131.2 0-28-18.7c-7.4-4.9-9.3-14.8-4.4-22.2s14.8-9.3 22.2-4.4L192 380.8l39.1-26.1c7.4-4.9 17.3-2.9 22.2 4.4s2.9 17.3-4.4 22.2l-28 18.7 132 0c2.2-13.1 8.4-25.2 17.9-34.7l49.1-49.1c18-18 28.1-42.4 28.1-67.9l0-24.2c0-35.3-28.7-64-64-64l-32 0c-26.5 0-48 21.5-48 48c0 22.3 15.3 41.2 36 46.5c8.6 2.2 13.7 10.9 11.5 19.5s-10.9 13.7-19.5 11.5c-34.5-8.9-60-40.2-60-77.5c0-5.5 .6-10.8 1.6-16L144 192c-26.8 0-45.7-6.7-58.2-14.3c-6.2-3.7-10.7-7.6-13.8-10.7c-1.5-1.5-2.7-2.9-3.6-4c-.4-.5-.8-1-1.1-1.4l-.4-.5-.1-.2-.1-.1c0 0 0 0 0 0s0 0 0 0L80 152l-13.3 8.9c-4.9-7.4-2.9-17.3 4.4-22.2c7.3-4.8 17-3 22 4.2c0 0 0 0 0 0l.1 .1c.2 .2 .6 .8 1.3 1.5c1.4 1.4 3.9 3.6 7.7 5.8c7.4 4.5 20.6 9.7 41.8 9.7l144 0c14.6-19.4 37.8-32 64-32l32 0 0-32c0-53-43-96-96-96L96 0z" />
    </Icon>
);

export default BoxingGlove;