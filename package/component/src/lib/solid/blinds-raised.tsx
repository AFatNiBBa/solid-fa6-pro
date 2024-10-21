
import { Icon } from "../../index";

/**
 * A component that renders the `blinds-raised` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blinds-raised?s=solid blinds-raised}
 * @preview ![blinds-raised](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/blinds-raised.svg)
 */
const BlindsRaised: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 0C14.3 0 0 14.3 0 32C0 43.9 6.5 54.2 16.1 59.8L1.2 100.6c-.8 2.2-1.2 4.6-1.2 7C0 118.9 9.1 128 20.4 128L128 128l0-64 32 0 0 64 331.6 0c11.3 0 20.4-9.1 20.4-20.4c0-2.4-.4-4.7-1.2-7L495.9 59.8C505.5 54.2 512 43.9 512 32c0-17.7-14.3-32-32-32L32 0zM144 512c26.5 0 48-21.5 48-48c0-20.9-13.4-38.7-32-45.3L160 224l331.9 0c11.1 0 20.1-9 20.1-20.1c0-2.6-.5-5.1-1.4-7.5L496 160l-336 0 0 64-32 0 0-64L16 160 1.4 196.4c-1 2.4-1.4 4.9-1.4 7.5C0 215 9 224 20.1 224L128 224l0 194.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48z" />
    </Icon>
);

export default BlindsRaised;