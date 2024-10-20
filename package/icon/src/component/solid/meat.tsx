
import { Icon } from "../../index";

/**
 * A component that renders the `meat` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meat?s=solid meat}
 * @preview ![meat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/meat.svg)
 */
const Meat: typeof Icon = x => (
    <Icon {...x}>
        <path d="M243.6 19.6C283.7-20.4 371.9 2.8 440.5 71.5s91.9 156.8 51.8 196.9l-40.5 40.5C403.9 357 338.7 384 270.8 384l-58.2 0c-7.1 0-13.9 2.8-18.9 7.8c-10.3 10.3-9.7 26.9-5 40.7c2.1 6.1 3.2 12.7 3.2 19.5c0 33.1-26.9 60-60 60s-60-26.9-60-60c0-6.3-5.7-12-12-12c-33.1 0-60-26.9-60-60s26.9-60 60-60c6.8 0 13.4 1.1 19.5 3.2c13.8 4.7 30.4 5.3 40.7-5c5-5 7.8-11.8 7.8-18.9l0-58.1c0-67.9 27-133 75-181l40.7-40.7zm64 184.8c49.6 49.6 113.3 66.4 142.2 37.4s12.2-92.6-37.4-142.2S299.1 33.2 270.2 62.2s-12.2 92.6 37.4 142.2zm36.3-36.3c-15.3-15.3-20.4-34.9-11.5-43.8s28.5-3.7 43.8 11.5s20.4 34.9 11.5 43.8s-28.5 3.7-43.8-11.5z" />
    </Icon>
);

export default Meat;