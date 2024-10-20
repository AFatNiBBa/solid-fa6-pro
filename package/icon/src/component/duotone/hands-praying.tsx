
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hands-praying` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hands-praying?s=duotone hands-praying}
 * @preview ![hands-praying](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hands-praying.svg)
 */
const HandsPraying: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M336 224l0 118.2c0 58 39 108.7 95 123.7l168.7 45c2.7 .7 5.5 1.1 8.2 1.1c7 0 13.8-2.3 19.5-6.6c7.9-6.1 12.5-15.4 12.5-25.4l0-96c0-13.8-8.8-26-21.9-30.4l-79.2-26.4c-6.5-2.2-10.9-8.3-10.9-15.2l0-73.5c0-15.8-4.7-31.2-13.4-44.4L394.8 14.5C390.1 7.4 383.1 2.7 375.4 .9c-2.4-.6-4.9-.9-7.4-.9c-2.3 0-4.5 .2-6.8 .7c-3.5 .8-6.9 2.1-10 4.1c-7.5 4.6-12.4 11.9-14.3 19.9c-1.1 4.6-1.2 9.4-.1 14.1c.7 3.2 1.9 6.3 3.6 9.3l86.4 151.2c3.5 6 5.3 12.9 5.3 19.8l0 84.9c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M278.8 .7c3.5 .8 6.9 2.1 10 4.1c7.5 4.6 12.4 11.9 14.3 19.9c1.1 4.6 1.2 9.4 .1 14.1c-.7 3.2-1.9 6.3-3.6 9.3L213.3 199.3c-3.5 6-5.3 12.9-5.3 19.8l0 84.9c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80c0-17.7 14.3-32 32-32s32 14.3 32 32l0 118.2c0 58-39 108.7-95 123.7l-168.7 45c-9.6 2.6-19.9 .5-27.7-5.5S0 489.9 0 480l0-96c0-13.8 8.8-26 21.9-30.4l79.2-26.4c6.5-2.2 10.9-8.3 10.9-15.2l0-73.5c0-15.8 4.7-31.2 13.4-44.4L245.2 14.5c4.6-7.1 11.7-11.8 19.4-13.6c4.6-1.1 9.4-1.2 14.1-.1z" />
    </Icon>
);

export default HandsPraying;