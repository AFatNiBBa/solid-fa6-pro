
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-ski-jumping` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-ski-jumping?s=sharp-duotone-solid person-ski-jumping}
 * @preview ![person-ski-jumping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-ski-jumping.svg)
 */
const PersonSkiJumping: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M7.1 469l22 42.7 21.3-11L499 269.3l13-6.7 0-14.6 0-56 0-24-48 0 0 24 0 41.4C369.3 282.2 274.5 331.1 179.8 380c-28.2 14.6-56.5 29.1-84.7 43.7L28.5 458 7.1 469z" />
        <path d="M352 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM128 96l32 0 160 0 13.3 0 9.4 9.4 13.8 13.8 25.9 25.9-29.2 22.2L230.1 260.8l-6.4 7.5c-2.4 2.8-4.4 6.1-5.7 9.6L179.8 380 95.1 423.7l63-168.3c3.9-10.5 9.7-20.3 17-28.8L232.1 160 160 160l-32 0 0-64z" />
    </Icon>
);

export default PersonSkiJumping;