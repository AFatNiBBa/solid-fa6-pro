
import { Icon, generic } from "../../index";

/**
 * A component that renders the `blinds-raised` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blinds-raised?s=duotone blinds-raised}
 * @preview ![blinds-raised](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/blinds-raised.svg)
 */
const BlindsRaised: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 107.6c0-2.4 .4-4.7 1.2-7L16.1 59.8C20.8 62.5 26.2 64 32 64l96 0 0 64L20.4 128C9.1 128 0 118.9 0 107.6zm0 96.3c0-2.6 .5-5.1 1.4-7.5L16 160l112 0 0 64L20.1 224C9 224 0 215 0 203.9zM160 64l320 0c5.8 0 11.2-1.5 15.9-4.2l14.9 40.9c.8 2.2 1.2 4.6 1.2 7c0 11.3-9.1 20.4-20.4 20.4L160 128l0-64zm0 96l336 0 14.6 36.4c1 2.4 1.4 4.9 1.4 7.5c0 11.1-9 20.1-20.1 20.1L160 224l0-64z" />
        <path d="M0 32C0 14.3 14.3 0 32 0L480 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L160 64l0 354.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3L128 64 32 64C14.3 64 0 49.7 0 32z" />
    </Icon>
);

export default BlindsRaised;