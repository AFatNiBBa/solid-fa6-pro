
import { Icon } from "../../index";

/**
 * A component that renders the `person-walking` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-walking?s=sharp-light person-walking}
 * @preview ![person-walking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/person-walking.svg)
 */
const PersonWalking: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M224 56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-80 0a56 56 0 1 1 112 0A56 56 0 1 1 144 56zM123.7 163.5L76.7 194.7 46.6 262.5l-6.5 14.6-29.2-13 6.5-14.6 32-72 1.9-4.2 3.9-2.6 72-48 6.1-4 7 1.9 88 24 8.5 2.3 2.6 8.4 30.3 98.6 43.3 28.8-17.8 26.6-48-32-4.7-3.2-1.7-5.4-15-48.7L187.3 331l47.2 40.9 3.5 3 1.3 4.5 32 107.2 4.6 15.3-30.7 9.2-4.6-15.3L210 393 109.4 305.8C94.9 293.3 89.3 273.4 95 255.2l28.7-91.8zm35-4.7l-33.1 106c-1.9 6.1 0 12.7 4.8 16.9l30.9 26.8 47.1-136.1-49.7-13.6zm-53 186.2l25 21.6L94.3 439.2c-.8 1.5-1.8 2.9-3 4.2l-56 56L24 510.6 1.4 488l11.3-11.3 54.2-54.2 38.8-77.6z" />
    </Icon>
);

export default PersonWalking;