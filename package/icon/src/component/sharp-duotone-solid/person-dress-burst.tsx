
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-dress-burst` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-dress-burst?s=sharp-duotone-solid person-dress-burst}
 * @preview ![person-dress-burst](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-dress-burst.svg)
 */
const PersonDressBurst: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M4.4 215.2L100 236.6l-.4 98L176 273.2l76.4 61.4-.4-98 95.6-21.4-76.9-60.8 42.9-88.1L218.2 88.5 176 0 133.8 88.5 38.4 66.3l42.9 88.1L4.4 215.2z" />
        <path d="M432 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm-20.6 80l17.5 0 102.2 0 17.5 0 9.4 14.8 81.7 128-53.9 34.4-42-65.8L592 384l-40 0 0 96 0 32-64 0 0-32 0-96-16 0 0 96 0 32-64 0 0-32 0-96-40 0 48.2-144.6-42 65.8-53.9-34.4 81.7-128 9.4-14.8z" />
    </Icon>
);

export default PersonDressBurst;