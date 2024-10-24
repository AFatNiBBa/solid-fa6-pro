
import { Icon } from "../../index";

/**
 * A component that renders the `soap` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/soap?s=light soap}
 * @preview ![soap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/soap.svg)
 */
const Soap: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0A64 64 0 1 1 128 64zM96 192l129.3 0c1.9 11.5 5.9 22.3 11.5 32L96 224c-35.3 0-64 28.7-64 64l0 128c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64l-12.8 0c5.6-9.7 9.6-20.5 11.5-32l1.3 0c53 0 96 43 96 96l0 128c0 53-43 96-96 96L96 512c-53 0-96-43-96-96L0 288c0-53 43-96 96-96zm64 80l160 0 32 0c44.2 0 80 35.8 80 80s-35.8 80-80 80l-192 0c-44.2 0-80-35.8-80-80s35.8-80 80-80zm-48 80c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-192 0c-26.5 0-48 21.5-48 48zM400 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM352 176a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default Soap;