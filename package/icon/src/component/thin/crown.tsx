
import { Icon } from "../../index";

/**
 * A component that renders the `crown` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crown?s=thin crown}
 * @preview ![crown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/crown.svg)
 */
const Crown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M264 72a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm29.9 39.6L352 227.8c13.7 27.3 49.1 35.1 72.9 16l91.3-73c1.1 .6 2.3 1.2 3.5 1.8L473.8 424.6c-4.2 22.8-24 39.4-47.2 39.4l-277.2 0c-23.2 0-43.1-16.6-47.2-39.4L56.4 172.5c1.2-.5 2.3-1.1 3.5-1.8l91.3 73c23.9 19.1 59.3 11.3 72.9-16l58.1-116.2c1.9 .3 3.9 .4 5.9 .4s4-.1 5.9-.4zM309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6l277.2 0c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106zM16 136a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm520-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Crown;