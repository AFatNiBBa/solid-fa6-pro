
import { Icon } from "../../index";

/**
 * A component that renders the `house-turret` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-turret?s=sharp-solid house-turret}
 * @preview ![house-turret](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/house-turret.svg)
 */
const HouseTurret: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 0L96 0l0 96 32 0 0-96 96 0 0 96 32 0 0-96 96 0 0 96 0 32 0 6.3L235.5 231.4 224 241l0 15 0 256L64 512l0-224L0 224l0-96L0 96 0 0zM256 256l96-80 96-80L640 256l0 256-352 0-32 0 0-32 0-224zM176 128c-22.1 0-40 17.9-40 40l0 40 80 0 0-40c0-22.1-17.9-40-40-40zM496 272l-96 0 0 96 96 0 0-96z" />
    </Icon>
);

export default HouseTurret;