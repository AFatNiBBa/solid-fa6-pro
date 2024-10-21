
import { Icon, generic } from "../../index";

/**
 * A component that renders the `meat` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meat?s=sharp-duotone-solid meat}
 * @preview ![meat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/meat.svg)
 */
const Meat: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 380c0 33.1 26.9 60 60 60l12 0 0 12c0 33.1 26.9 60 60 60s60-26.9 60-60c0-16.2-6.4-30.9-16.8-41.7L201.5 384 176 384l-48-48 0-25.5-26.4 26.3C90.9 326.4 76.2 320 60 320c-33.1 0-60 26.9-60 60zM332.4 124.4c-8.9 8.9-3.8 28.5 11.5 43.8s34.9 20.4 43.8 11.5c3-3 4.4-7.1 4.4-11.9c0-9.6-5.7-21.7-15.9-31.9s-22.3-15.9-31.9-15.9c-4.8 0-8.9 1.4-11.9 4.4z" />
        <path d="M243.6 19.6C283.7-20.4 371.9 2.8 440.5 71.5s91.9 156.8 51.8 196.9l-40.5 40.5C403.9 357 338.7 384 270.7 384L176 384l-48-48 0-94.7c0-67.9 27-133 75-181l40.7-40.7zm64 184.8c49.6 49.6 113.3 66.4 142.2 37.4s12.2-92.6-37.4-142.2S299.1 33.2 270.2 62.2s-12.2 92.6 37.4 142.2z" />
    </Icon>
);

export default Meat;