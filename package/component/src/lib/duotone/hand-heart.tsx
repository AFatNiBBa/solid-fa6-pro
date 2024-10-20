
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-heart` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-heart?s=duotone hand-heart}
 * @preview ![hand-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hand-heart.svg)
 */
const HandHeart: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M11 284.4c-15.2 16-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64l19.2 0c97.2 0 176-78.8 176-176l0-208c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 176c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 272c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4zm197 78.2c0-23.5 19.1-42.6 42.6-42.6l1.1 0c14.6 0 28.3 7.3 36.4 19.5c8.1-12.2 21.7-19.5 36.4-19.5l1.1 0c23.5 0 42.6 19.1 42.6 42.6c0 12.1-5.1 23.6-14.1 31.6l-55.2 49.7c-3 2.7-6.9 4.1-10.7 4.1s-7.7-1.4-10.7-4.1l-55.2-49.7c-9-8.1-14.1-19.6-14.1-31.6z" />
        <path d="M250.6 320c-23.5 0-42.6 19.1-42.6 42.6c0 12.1 5.1 23.6 14.1 31.6l55.2 49.7c6.1 5.5 15.3 5.5 21.4 0l55.2-49.7c9-8.1 14.1-19.6 14.1-31.6c0-23.5-19.1-42.6-42.6-42.6l-1.1 0c-14.6 0-28.3 7.3-36.4 19.5c-8.1-12.2-21.7-19.5-36.4-19.5l-1.1 0z" />
    </Icon>
);

export default HandHeart;