
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-sledding` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-sledding?s=sharp-duotone-solid person-sledding}
 * @preview ![person-sledding](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-sledding.svg)
 */
const PersonSledding: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M-8.4 258.2l21.3 11.1 416 216 10.9 5.6 10.9-5.5 48-24 21.5-10.7-21.5-42.9-21.5 10.7-37.1 18.5c-18.7-9.7-37.5-19.5-56.2-29.2c-21.3-11.1-42.7-22.2-64-33.2c-35.1-18.2-70.2-36.4-105.3-54.6l-42.3-22c-45.8-23.8-91.6-47.5-137.4-71.3L13.8 215.6-8.4 258.2z" />
        <path d="M352 80a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM128 128l32 0 160 0 13.3 0 9.4 9.4 12.8 12.8 3.2 3.2L381.3 176l-22.6 22.6L301.3 256l50.7 0 32 0 0 32 0 96 0 23.9-64-33.2 0-54.6-105.3 0-42.3-22c-12.8-20.3-10.5-49.8 13.8-66L246.3 192 160 192l-32 0 0-64z" />
    </Icon>
);

export default PersonSledding;