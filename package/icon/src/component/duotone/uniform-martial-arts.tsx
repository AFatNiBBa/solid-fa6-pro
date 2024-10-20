
import { Icon, generic } from "../../index";

/**
 * A component that renders the `uniform-martial-arts` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/uniform-martial-arts?s=duotone uniform-martial-arts}
 * @preview ![uniform-martial-arts](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/uniform-martial-arts.svg)
 */
const UniformMartialArts: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 224.4L0 384c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-159.6c0-2.7 .7-5.3 2-7.7l46-83.7L144 288l109 0 54.6-143.3L246.4 18.1C241.1 7 229.9 0 217.6 0L208 0 180 0 164.4 0 160 0c-1 0-2 .1-3 .3c-32.1 2.5-61 20.9-76.7 49.5L13.9 170.5C4.8 187 0 205.6 0 224.4zM144 384l0 64c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-64-86.3 0 14.2 21.4c14.7 22.1 8.7 51.9-13.3 66.6s-51.9 8.7-66.6-13.3L320 422.5l-24.1 36.1c-14.7 22.1-44.5 28-66.6 13.3s-28-44.5-13.3-66.6L230.3 384 144 384zm143.2-96L496 288l0-154.9 46 83.7c1.3 2.4 2 5 2 7.7L544 384c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-159.6c0-18.9-4.8-37.4-13.9-54L559.7 49.7C544.1 21.2 515.1 2.8 483 .3c-1-.2-2-.3-3-.3l-4.4 0L460 0 432 0 419 0c-13.3 0-25.2 8.2-29.9 20.6L339.9 149.7 287.2 288z" />
        <path d="M496 288l-352 0 0 64 146.1 0-47.4 71.1c-4.9 7.4-2.9 17.3 4.4 22.2s17.3 2.9 22.2-4.4l50.7-76 50.7 76c4.9 7.4 14.8 9.3 22.2 4.4s9.3-14.8 4.4-22.2L349.9 352 496 352l0-64z" />
    </Icon>
);

export default UniformMartialArts;