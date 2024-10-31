
import { Icon, generic } from "../../index";

/**
 * A component that renders the `children` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/children?s=duotone children}
 * @preview ![children](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/children.svg)
 */
const Children: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M340.9 287c-9.4 15-4.9 34.7 10 44.1s34.7 4.9 44.1-10L408 300.5 408 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96 16 0 0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-179.5L564.9 321c9.4 15 29.2 19.4 44.1 10c9.7-6.1 15-16.5 15-27.1c0-5.8-1.6-11.7-4.9-17l-51.7-82.1c-17.6-27.9-48.3-44.9-81.2-44.9l-12.3 0c-33 0-63.7 16.9-81.2 44.9L340.9 287zM416 64a64 64 0 1 0 128 0A64 64 0 1 0 416 64z" />
        <path d="M224 64A64 64 0 1 0 96 64a64 64 0 1 0 128 0zM88 400l0 80c0 17.7 14.3 32 32 32s32-14.3 32-32l0-80 16 0 0 80c0 17.7 14.3 32 32 32s32-14.3 32-32l0-80 17.8 0c10.9 0 18.6-10.7 15.2-21.1l-31.1-93.4 28.6 37.8c10.7 14.1 30.8 16.8 44.8 6.2s16.8-30.7 6.2-44.8L254.6 207c-22.4-29.6-57.5-47-94.6-47s-72.2 17.4-94.6 47L6.5 284.7c-10.7 14.1-7.9 34.2 6.2 44.8s34.2 7.9 44.8-6.2l28.7-37.8L55 378.9C51.6 389.3 59.3 400 70.2 400L88 400z" />
    </Icon>
);

export default Children;