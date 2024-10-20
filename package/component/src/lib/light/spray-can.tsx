
import { Icon } from "../../index";

/**
 * A component that renders the `spray-can` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spray-can?s=light spray-can}
 * @preview ![spray-can](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/spray-can.svg)
 */
const SprayCan: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 32l0 64 32 0 0-64c0-17.7-14.3-32-32-32L128 0C110.3 0 96 14.3 96 32l0 64 32 0 0-64 64 0zm96 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm-64 72c35.3 0 64 28.7 64 64l0 216c0 22.1-17.9 40-40 40L72 480c-22.1 0-40-17.9-40-40l0-216c0-35.3 28.7-64 64-64l128 0zM96 128c-53 0-96 43-96 96L0 440c0 39.8 32.2 72 72 72l176 0c39.8 0 72-32.2 72-72l0-216c0-53-43-96-96-96L96 128zm64 144a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 128a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM408 64a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm24 72a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM480 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM408 160a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default SprayCan;