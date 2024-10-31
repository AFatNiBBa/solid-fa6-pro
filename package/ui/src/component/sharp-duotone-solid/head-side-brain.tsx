
import { Icon, generic } from "../../index";

/**
 * A component that renders the `head-side-brain` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/head-side-brain?s=sharp-duotone-solid head-side-brain}
 * @preview ![head-side-brain](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/head-side-brain.svg)
 */
const HeadSideBrain: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224.2C0 100.6 100.2 0 224 0l32 0C358.1 0 441.6 79.7 447.7 180.3L505 252l7 8.8 0 11.2 0 16 0 32-32 0-32 0 0 96 0 32-32 0-96 0 0 32 0 32-32 0L96 512l-32 0 0-32 0-98.8c-41-41.9-64-98.3-64-157zM64 176c0 20.9 13.4 38.7 32.1 45.3c0 .9-.1 1.8-.1 2.7c0 26.5 21.5 48 48 48l16 0 0 48 64 0 0-48 16 0c26.5 0 48-21.5 48-48l0-16 48 0c26.5 0 48-21.5 48-48s-21.5-48-48-48c-.9 0-1.8 0-2.7 .1C326.7 93.4 308.9 80 288 80c-8.6 0-16.6 2.2-23.5 6.2C255.9 72.8 241 64 224 64s-31.9 8.8-40.5 22.2c-7-3.9-15-6.2-23.5-6.2c-26.5 0-48 21.5-48 48c-26.5 0-48 21.5-48 48z" />
        <path d="M336 208l-48 0 0 16c0 26.5-21.5 48-48 48l-16 0 0 48-64 0 0-48-16 0c-26.5 0-48-21.5-48-48c0-.9 0-1.8 .1-2.7C77.4 214.7 64 196.9 64 176c0-26.5 21.5-48 48-48c0-26.5 21.5-48 48-48c8.6 0 16.6 2.2 23.5 6.2C192.1 72.8 207 64 224 64s31.9 8.8 40.5 22.2c7-3.9 15-6.2 23.5-6.2c20.9 0 38.7 13.4 45.3 32.1c.9 0 1.8-.1 2.7-.1c26.5 0 48 21.5 48 48s-21.5 48-48 48zM159.9 178.7c0 0 0 0 .1 0l0-2.7c0 .9 0 1.8-.1 2.7z" />
    </Icon>
);

export default HeadSideBrain;