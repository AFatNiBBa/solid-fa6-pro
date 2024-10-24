
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bowl-soft-serve` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowl-soft-serve?s=sharp-duotone-solid bowl-soft-serve}
 * @preview ![bowl-soft-serve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bowl-soft-serve.svg)
 */
const BowlSoftServe: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 240l0 80 16 0 16 0 384 0 16 0 16 0 0-80c0-41.7-32-76-72.8-79.7c5.6-9.5 8.8-20.5 8.8-32.3C416 57.3 358.7 0 288 0L256 0l10.8 16.3c3.4 5 5.2 11 5.2 17c0 17-13.7 30.7-30.7 30.7L160 64c-35.3 0-64 28.7-64 64c0 11.8 3.2 22.8 8.8 32.3C64 164 32 198.3 32 240z" />
        <path d="M48 320l16 0 384 0 16 0 0 16 0 8c0 57.4-46.6 104-104 104l-32 0 24 64-192 0 24-64-32 0C94.6 448 48 401.4 48 344l0-8 0-16z" />
    </Icon>
);

export default BowlSoftServe;