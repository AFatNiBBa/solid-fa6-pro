
import { Icon } from "../../index";

/**
 * A component that renders the `mars-stroke-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-stroke-right?s=sharp-light mars-stroke-right}
 * @preview ![mars-stroke-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mars-stroke-right.svg)
 */
const MarsStrokeRight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 256a144 144 0 1 1 288 0A144 144 0 1 1 64 256zm319.3-16C375.2 150.3 299.8 80 208 80C110.8 80 32 158.8 32 256s78.8 176 176 176c91.8 0 167.2-70.3 175.3-160l48.7 0 0 48 0 16 32 0 0-16 0-48 81.4 0-44.7 44.7L489.4 328 512 350.6l11.3-11.3 72-72L606.6 256l-11.3-11.3-72-72L512 161.4 489.4 184l11.3 11.3L545.4 240 464 240l0-48 0-16-32 0 0 16 0 48-48.7 0z" />
    </Icon>
);

export default MarsStrokeRight;