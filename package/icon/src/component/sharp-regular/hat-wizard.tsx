
import { Icon } from "../../index";

/**
 * A component that renders the `hat-wizard` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-wizard?s=sharp-regular hat-wizard}
 * @preview ![hat-wizard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hat-wizard.svg)
 */
const HatWizard: typeof Icon = x => (
    <Icon {...x}>
        <path d="M368 192L410.5 64.4 432 0 371.3 30.4 176 128 48 416l52.5 0L212.9 163.2 349.8 94.8l-27.4 82.1-5.8 17.3 7.2 16.8L411.8 416l52.2 0L368 192zM237.7 416L248 392l56-24-56-24-24-56-24 56-56 24 56 24 10.3 24 27.4 0zM0 448l0 64 32 0 448 0 32 0 0-64-32 0L32 448 0 448zM256 256l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32z" />
    </Icon>
);

export default HatWizard;