
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flying-disc` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flying-disc?s=duotone flying-disc}
 * @preview ![flying-disc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/flying-disc.svg)
 */
const FlyingDisc: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M45.9 345c7.6 7.6 18.4 11.2 31.6 11.2c40.2 0 102-33.5 157.6-89.1C308.9 193.4 343.8 108.7 313 77.9s-115.4 4.1-189.2 77.9S15.2 314.3 45.9 345z" />
        <path d="M424.3 55.7c55.3 55.3 10.5 189.8-100.2 300.5S79 511.6 23.7 456.3C-1.5 431.1-5.9 389.6 7.1 341.4c3.2 9.5 8.4 18.5 16.2 26.3c15.6 15.6 36 20.7 55 20.5c18.8-.1 38.8-5.3 58.2-13.3c39-16.1 82-46 121.2-85.1s69-82.2 85.1-121.2c8-19.4 13.2-39.4 13.3-58.2c.1-19-5-39.5-20.5-55c-7.8-7.8-16.8-13-26.3-16.2c48.2-13 89.8-8.6 114.9 16.6z" />
    </Icon>
);

export default FlyingDisc;