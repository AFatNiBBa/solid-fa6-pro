
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bow-arrow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bow-arrow?s=sharp-duotone-solid bow-arrow}
 * @preview ![bow-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bow-arrow.svg)
 */
const BowArrow: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M2.7 144l22.6 22.6c47.7 47.7 95.4 95.4 143 143c11.3 11.3 22.6 22.6 33.9 33.9l143 143L368 509.3 413.3 464 401 451.7c28.1-38 47-81.6 47-131.7c0-58-19.6-116-58.8-163.3c-15.2 15.2-30.3 30.3-45.5 45.5C370.6 236.8 384 278.4 384 320c0 29.9-10.2 58.3-28.9 85.8c-35.8-35.8-71.6-71.6-107.5-107.5c-11.3-11.3-22.6-22.6-33.9-33.9L106.2 156.9C133.7 138.2 162.1 128 192 128c41.6 0 83.2 13.4 117.7 40.3l45.5-45.5C308 83.6 250 64 192 64c-50.1 0-93.7 18.9-131.7 47L48 98.7 2.7 144z" />
        <path d="M512 0L352 32l47 47s0 0 0 0L213.7 264.4l33.9 33.9L433 113s0 0 0 0l47 47L512 0zM202.3 343.6l-33.9-33.9-18.5 18.5L96 312 0 408l80 24 24 80 96-96-16.2-53.9 18.5-18.5z" />
    </Icon>
);

export default BowArrow;