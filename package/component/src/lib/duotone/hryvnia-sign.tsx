
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hryvnia-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hryvnia-sign?s=duotone hryvnia-sign}
 * @preview ![hryvnia-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hryvnia-sign.svg)
 */
const HryvniaSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 208c0 17.7 14.3 32 32 32l123.5 0 91.8-52.5c.7-.4 1.3-.8 2-1.2s1.3-.8 1.9-1.3c1.2-.9 2.4-1.8 3.6-2.8c2.3-1.9 4.4-4.1 6.2-6.4L32 176c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32l20.3 0c7.5-26.1 24.2-49 47.5-64L32 272c-17.7 0-32 14.3-32 32zm123.1 32L352 336c17.7 0 32-14.3 32-32s-14.3-32-32-32l-123.5 0-91.8 52.5c-.7 .4-1.3 .8-2 1.2s-1.3 .8-1.9 1.3c-1.2 .9-2.4 1.8-3.6 2.8c-2.3 1.9-4.4 4.1-6.2 6.4zm161.1-96l67.8 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-20.3 0c-7.5 26.1-24.2 49-47.5 64z" />
        <path d="M179.6 96c-21 0-41.3 7.1-57.7 20.2L116 121c-13.8 11-33.9 8.8-45-5s-8.8-33.9 5-45l5.9-4.7C109.7 44.1 144.1 32 179.6 32L223 32c62.4 0 113 50.6 113 113c0 40.5-21.7 78-56.9 98.1L136.7 324.5c-15.3 8.7-24.7 25-24.7 42.5c0 27.1 21.9 49 49 49l43.4 0c21 0 41.3-7.1 57.7-20.2L268 391c13.8-11 33.9-8.8 45 5s8.8 33.9-5 45l-5.9 4.7c-27.7 22.2-62.2 34.3-97.7 34.3L161 480C98.6 480 48 429.4 48 367c0-40.6 21.7-78 56.9-98.1l142.4-81.4c15.3-8.7 24.7-25 24.7-42.5c0-27.1-21.9-49-49-49l-43.4 0z" />
    </Icon>
);

export default HryvniaSign;