
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-seat-reclined` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-seat-reclined?s=sharp-duotone-solid person-seat-reclined}
 * @preview ![person-seat-reclined](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-seat-reclined.svg)
 */
const PersonSeatReclined: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M26.7 134.4l5.9 31.5 48 256L85.4 448l26.6 0 160 0 32 0 0-64-32 0-133.4 0L95.5 154.1l-5.9-31.5L26.7 134.4z" />
        <path d="M128 80a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm7 80l41 0 32 0 25 0 6.1 24.2L241 192l79 0 32 0 0 64-32 0-63 0 8 32 87 0 22.1 0 7.8 20.7 34.7 91.7 19.2-6 30.5-9.6 19.1 61.1-30.5 9.6-48 15.1-28.8 9-10.7-28.3L329.9 352 240 352l-7 0c-29.4 0-55-20-62.1-48.5L145 199.8 135 160z" />
    </Icon>
);

export default PersonSeatReclined;