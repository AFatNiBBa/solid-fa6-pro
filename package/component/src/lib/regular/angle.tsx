
import { Icon } from "../../index";

/**
 * A component that renders the `angle` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle?s=regular angle}
 * @preview ![angle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/angle.svg)
 */
const Angle: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M253.3 67.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2l-208 400c-3.9 7.4-3.6 16.4 .8 23.5S15.6 480 24 480l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L63.5 432 253.3 67.1zM242 175.5l-22.6 43.4c19.3 15.8 36.5 34 51.3 54.1l40.8-25.6c-19.6-27.2-43-51.4-69.5-71.9zM322.7 392l48.8 0c-6-36.9-18-71.8-34.7-103.8l-40.8 25.6c12.4 24.3 21.5 50.6 26.8 78.2z" />
    </Icon>
);

export default Angle;