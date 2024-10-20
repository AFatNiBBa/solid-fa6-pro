
import { Icon } from "../../index";

/**
 * A component that renders the `trophy` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trophy?s=sharp-light trophy}
 * @preview ![trophy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/trophy.svg)
 */
const Trophy: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M271.6 381c.1 0 .3 .1 .4 .1l0 98.9-96 0-16 0 0 32 16 0 112 0 112 0 16 0 0-32-16 0-96 0 0-98.9c.1 0 .3-.1 .4-.1l2.3-.4c34-6 100.6-27.8 159.1-74.4C524.8 259.2 576 186.5 576 80l0-16-16 0L446.4 64c.5-10.3 .9-21 1.2-32c.3-10.4 .4-21 .4-32L416 0 160 0 128 0c0 11 .1 21.6 .4 32c.3 11 .7 21.7 1.2 32L16 64 0 64 0 80C0 186.5 51.2 259.2 110.2 306.1c58.5 46.6 125.1 68.5 159.1 74.4l2.3 .4zm25.3-31.2l-8.9 1.6-8.9-1.6c-1.3-.4-2.7-.9-4.2-1.5c-10.2-4.1-25.8-13-42.3-32.8C201.3 278 164.6 198.4 160.4 32l255.2 0c-4.2 166.4-40.9 246-72.2 283.5c-16.5 19.8-32.1 28.7-42.3 32.8c-1.5 .6-2.9 1.1-4.2 1.5zm80.9-26.6C407 281.9 434.5 212.5 444.2 96l99.3 0c-4.8 85.9-47.6 145.2-97.7 185.1c-22.3 17.8-46 31.6-68.1 42.1zm-179.6 0c-22.2-10.5-45.8-24.3-68.1-42.1C80 241.2 37.2 181.9 32.4 96l99.3 0c9.8 116.5 37.2 185.9 66.4 227.2z" />
    </Icon>
);

export default Trophy;