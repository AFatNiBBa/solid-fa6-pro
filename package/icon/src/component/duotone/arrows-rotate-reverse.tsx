
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-rotate-reverse` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-rotate-reverse?s=duotone arrows-rotate-reverse}
 * @preview ![arrows-rotate-reverse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrows-rotate-reverse.svg)
 */
const ArrowsRotateReverse: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M42.7 320c0 3.5 .6 7.1 1.8 10.6C55.3 361.3 73 390 97.4 414.4C141.1 458.1 198.4 480 255.8 480c57.3 0 114.6-21.9 158.4-65.6l17.6-17.5 0 35.1c0 17.7 14.3 32 32 32s32-14.3 32-32l0-111.6 0-.4c0-1.6-.1-3.2-.4-4.8c-.2-1.3-.5-2.6-.8-3.8c-1.4-5.1-4.1-9.9-8.1-14c-3.9-4-8.7-6.7-13.7-8.2c-1.5-.4-3-.8-4.6-1c-1.6-.2-3.2-.3-4.8-.3l-111.6 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l34.4 0L369 369.1c-62.6 62.6-163.9 62.6-226.3 .1c-17.5-17.5-30.1-38-37.8-59.8c-5.9-16.7-24.2-25.4-40.8-19.5c-13.1 4.6-21.4 17-21.4 30.2z" />
        <path d="M406.6 202.6c-7.7-21.8-20.2-42.3-37.8-59.8c-62.5-62.5-163.8-62.5-226.3 0L125.5 160l34.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L48.3 224c0 0 0 0 0 0l-.4 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32s32 14.3 32 32l0 35.2L97.4 97.6c87.5-87.5 229.3-87.5 316.8 0c24.4 24.4 42.1 53.1 52.9 83.7c5.9 16.7-2.9 34.9-19.5 40.8s-34.9-2.9-40.8-19.5z" />
    </Icon>
);

export default ArrowsRotateReverse;