
import { Icon, generic } from "../../index";

/**
 * A component that renders the `moped` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moped?s=duotone moped}
 * @preview ![moped](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/moped.svg)
 */
const Moped: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 384c0 53 43 96 96 96s96-43 96-96l-48 0c0 26.5-21.5 48-48 48s-48-21.5-48-48l-48 0zM96 128c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32zM416 384a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zm144 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
        <path d="M328 56c0-13.3 10.7-24 24-24l41.3 0c23.8 0 45.1 15.1 52.9 37.6l8.1 23.3 51-25.5c4.4-2.2 9.3-3.4 14.3-3.4l8.4 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-8.4 0c-5 0-9.9-1.2-14.3-3.4l-34.9-17.5L500 224.4c4-.3 8-.4 12-.4c43.7 0 83.3 17.5 112.1 45.8c9.5 9.3 9.6 24.5 .3 33.9s-24.5 9.6-33.9 .3C570.2 284.2 542.6 272 512 272c-55.1 0-101 39.8-110.3 92.3c-2 11.5-12 19.8-23.6 19.8l-42.1 0c-.9 0-1.7 0-2.6-.1L32 384c-17.7 0-32-14.3-32-32l0-32c0-70.7 57.3-128 128-128l96 0c17.7 0 32 14.3 32 32l0 64c0 17.7 14.3 32 32 32l77.3 0c16.8-38.5 48.4-69.2 87.6-84.7L400.8 85.4c-1.1-3.2-4.2-5.4-7.6-5.4L352 80c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default Moped;