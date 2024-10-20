
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sickle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sickle?s=duotone sickle}
 * @preview ![sickle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sickle.svg)
 */
const Sickle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 181C128 81 209 0 309 0l11 0c90.1 0 165.8 62.1 186.4 145.8c.2 .9 .3 1.8 .3 2.7c0 6.2-5.2 11.4-11.9 11.4c-3.9 0-7.5-1.9-9.9-4.9C458.9 122.9 419.5 104 377.8 104C301.7 104 240 165.7 240 241.8l0 9.8c0 20.7 5.2 39.7 12.2 58.6c2.2 6 .9 12.8-3.7 17.3L224 352l-23 23-16-16-32-32-16-16 24.8-24.8C139.9 255.8 128 219 128 181z" />
        <path d="M129 303c-9.4-9.4-24.6-9.4-33.9 0L79 319c-9.4 9.4-9.4 24.6 0 33.9l7 7L7 439c-9.4 9.4-9.4 24.6 0 33.9l32 32c9.4 9.4 24.6 9.4 33.9 0l79-79 7 7c9.4 9.4 24.6 9.4 33.9 0l16-16c9.4-9.4 9.4-24.6 0-33.9l-24-24-32-32-24-24z" />
    </Icon>
);

export default Sickle;