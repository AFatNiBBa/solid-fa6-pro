
import { Icon } from "../../index";

/**
 * A component that renders the `building-shield` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-shield?s=sharp-regular building-shield}
 * @preview ![building-shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/building-shield.svg)
 */
const BuildingShield: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 48l288 0 0 178.9 48-18.6L384 48l0-48L336 0 48 0 0 0 0 48 0 464l0 48 48 0 288 0 26.1 0c-19.2-13.7-35.7-30-49.5-48L240 464l0-112-96 0 0 112-96 0L48 48zM296 216l-80 0 0 80 40 0 0-38.2 40-15.5 0-26.3zM88 88l0 80 80 0 0-80L88 88zm208 0l-80 0 0 80 80 0 0-80zM88 216l0 80 80 0 0-80-80 0zm439.3 96.4c-5.2 61-38.8 121.7-95.3 148l0-184.9 95.3 36.9zM432 512c96-32 144-130.2 144-216l0-16.2L432 224 288 279.8l0 16.2c0 85.8 48 184 144 216z" />
    </Icon>
);

export default BuildingShield;