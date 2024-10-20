
import { Icon, generic } from "../../index";

/**
 * A component that renders the `farm` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/farm?s=duotone farm}
 * @preview ![farm](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/farm.svg)
 */
const Farm: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M160 270.3c0-4.2 .8-8.3 2.4-12.2l48.9-118.7c3-7.4 8.7-13.3 15.9-16.7L354.3 62.5c4.3-2.1 9-3.1 13.7-3.1s9.4 1 13.7 3.1l127.1 60.2c7.2 3.4 12.9 9.4 15.9 16.7l48.9 118.7c1.6 3.9 2.4 8 2.4 12.2L576 480c0 17.7-14.3 32-32 32l-112 0 0-64c0-26.5-21.5-48-48-48l-32 0c-26.5 0-48 21.5-48 48l0 64-112 0c-17.7 0-32-14.3-32-32l0-209.7zM320 248l0 48c0 13.3 10.7 24 24 24c16 0 32 0 48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24c-16 0-32 0-48 0c-13.3 0-24 10.7-24 24z" />
        <path d="M0 96l192 0c0-53-43-96-96-96S0 43 0 96zm181.4 32L0 128 0 464c0 26.5 21.5 48 48 48l88.6 0c-5.4-9.4-8.6-20.3-8.6-32l0-209.7c0-8.4 1.6-16.6 4.8-24.4l48.6-118zM344 224c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z" />
    </Icon>
);

export default Farm;