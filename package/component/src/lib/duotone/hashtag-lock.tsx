
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hashtag-lock` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hashtag-lock?s=duotone hashtag-lock}
 * @preview ![hashtag-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hashtag-lock.svg)
 */
const HashtagLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 352c0 17.7 14.3 32 32 32l58.2 0-9.8 58.7c-2.9 17.4 8.9 33.9 26.3 36.8c1.8 .3 3.6 .4 5.3 .4c15.4 0 28.9-11.1 31.5-26.7L155.1 384l95.1 0-9.8 58.7c-2.9 17.4 8.9 33.9 26.3 36.8c1.8 .3 3.6 .4 5.3 .4c15.4 0 28.9-11.1 31.5-26.7L320 354.7l0-2.6c0-8.1 1.5-15.9 4.3-23.1L347.1 192l38.5 0c16.6-16.3 38.2-27.4 62.4-30.9c0-.4 0-.8 0-1.1c0-17.7-14.3-32-32-32l-58.2 0 9.8-58.7c2.9-17.4-8.9-33.9-26.3-36.8s-33.9 8.9-36.8 26.3L292.9 128l-95.1 0 9.8-58.7c2.9-17.4-8.9-33.9-26.3-36.8s-33.9 8.9-36.8 26.3L132.9 128 64 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l58.2 0L100.9 320 32 320c-17.7 0-32 14.3-32 32zm165.8-32l21.3-128 95.1 0L260.9 320l-95.1 0z" />
        <path d="M432 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default HashtagLock;