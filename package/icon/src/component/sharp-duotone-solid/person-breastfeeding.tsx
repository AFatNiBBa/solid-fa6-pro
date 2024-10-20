
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-breastfeeding` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-breastfeeding?s=sharp-duotone-solid person-breastfeeding}
 * @preview ![person-breastfeeding](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-breastfeeding.svg)
 */
const PersonBreastfeeding: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M128 288l0 44.4 0 8.9 0 26.7c0 .7 0 1.4 .1 2.1l69.2 34.3 43 21.3L213.4 480l107.5 0c-17.2-12.1-34.5-24.1-51.7-36.2c7.7-11 15.3-21.9 23-32.9l-52.8-8.8L192 354.7l0-66.7-24 0-1.9 0L128 288zm104 44a44 44 0 1 0 88 0 44 44 0 1 0 -88 0z" />
        <path d="M144 80a80 80 0 1 1 160 0A80 80 0 1 1 144 80zM269.2 443.8l23-32.9-52.8-8.8L192 354.7l0-66.7-24 0-40 0 0 53.3 0 26.7c0 .7 0 1.4 .1 2.1l69.2 34.3 43 21.3-42.6 86-43-21.3L26.7 427 0 413.8 0 384l0-16 0-16 9.6-12.8 96-128L120 192l24 0 176 0 26.2 0 14.2 22 72 112 17.4 27.1-18.5 26.4-56 80-27.5 39.3-78.6-55zM276 376a44 44 0 1 0 0-88 44 44 0 1 0 0 88z" />
    </Icon>
);

export default PersonBreastfeeding;