
import { Icon, generic } from "../../index";

/**
 * A component that renders the `meat` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meat?s=duotone meat}
 * @preview ![meat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/meat.svg)
 */
const Meat: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 380c0 33.1 26.9 60 60 60c6.3 0 12 5.7 12 12c0 33.1 26.9 60 60 60s60-26.9 60-60c0-5-.6-9.8-1.8-14.5c-4.2-16.9-5.2-37.1 7.2-49.4l6.3-6.3c-36.7-7.9-65.6-36.8-73.5-73.5l-6.3 6.3c-12.3 12.3-32.5 11.4-49.4 7.2C69.8 320.6 65 320 60 320c-33.1 0-60 26.9-60 60zM332.4 124.4c-8.9 8.9-3.8 28.5 11.5 43.8s34.9 20.4 43.8 11.5c3-3 4.4-7.1 4.4-11.9c0-9.6-5.7-21.7-15.9-31.9s-22.3-15.9-31.9-15.9c-4.8 0-8.9 1.4-11.9 4.4z" />
        <path d="M243.6 19.6C283.7-20.4 371.9 2.8 440.5 71.5s91.9 156.8 51.8 196.9l-40.5 40.5C403.9 357 338.7 384 270.8 384L224 384c-53 0-96-43-96-96l0-46.7c0-67.9 27-133 75-181l40.7-40.7zm64 184.8c49.6 49.6 113.3 66.4 142.2 37.4s12.2-92.6-37.4-142.2S299.1 33.2 270.2 62.2s-12.2 92.6 37.4 142.2z" />
    </Icon>
);

export default Meat;