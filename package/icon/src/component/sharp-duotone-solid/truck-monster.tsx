
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-monster` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-monster?s=sharp-duotone-solid truck-monster}
 * @preview ![truck-monster](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/truck-monster.svg)
 */
const TruckMonster: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 352l0 64 20.6 0c2.2 7.4 5.2 14.6 8.8 21.3L46.9 451.9l45.3 45.3 14.6-14.6c6.7 3.6 13.8 6.6 21.3 8.8l0 20.6 64 0 0-20.6c7.4-2.2 14.6-5.2 21.3-8.8l14.6 14.6 45.3-45.3-14.6-14.6c3.6-6.7 6.6-13.8 8.8-21.3l20.6 0 0-64-20.6 0c-2.2-7.4-5.2-14.6-8.8-21.3l14.6-14.6-45.3-45.3-14.6 14.6c-6.7-3.6-13.8-6.6-21.3-8.8l0-20.6-64 0 0 20.6c-7.4 2.2-14.6 5.2-21.3 8.8L92.1 270.9 46.9 316.1l14.6 14.6c-3.6 6.7-6.6 13.8-8.8 21.3L32 352zm176 32a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm144-32l0 64 20.6 0c2.2 7.4 5.2 14.6 8.8 21.3l-14.6 14.6 45.3 45.3 14.6-14.6c6.7 3.6 13.8 6.6 21.3 8.8l0 20.6 64 0 0-20.6c7.4-2.2 14.6-5.2 21.3-8.8l14.6 14.6 45.3-45.3-14.6-14.6c3.6-6.7 6.6-13.8 8.8-21.3l20.6 0 0-64-20.6 0c-2.2-7.4-5.2-14.6-8.8-21.3l14.6-14.6-45.3-45.3-14.6 14.6c-6.7-3.6-13.8-6.6-21.3-8.8l0-20.6-64 0 0 20.6c-7.4 2.2-14.6 5.2-21.3 8.8l-14.6-14.6-45.3 45.3 14.6 14.6c-3.6 6.7-6.6 13.8-8.8 21.3L352 352zm176 32a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
        <path d="M224 0l32 0L384 0l16 0 9.6 12.8L496 128l112 0 0 96 32 0 0 64-32 0c-29.2-38.9-75.7-64-128-64s-98.8 25.1-128 64l-64 0c-29.2-38.9-75.7-64-128-64s-98.8 25.1-128 64L0 288l0-64 32 0 0-96 192 0 0-96 0-32zM368 64l-80 0 0 64 128 0L368 64z" />
    </Icon>
);

export default TruckMonster;