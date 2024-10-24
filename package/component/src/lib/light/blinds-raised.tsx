
import { Icon } from "../../index";

/**
 * A component that renders the `blinds-raised` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blinds-raised?s=light blinds-raised}
 * @preview ![blinds-raised](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/blinds-raised.svg)
 */
const BlindsRaised: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 0C14.3 0 0 14.3 0 32L0 64C0 81.7 14.3 96 32 96l96 0 0 322.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3L160 96l320 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32L32 0zm0 32l448 0 0 32L32 64l0-32zm96 432a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM35.9 160l9.8-32-33.5 0L.9 165c-.6 2-.9 4.1-.9 6.1C0 182.7 9.3 192 20.9 192L96 192l0-32-60.1 0zm0 96l9.8-32-33.5 0L.9 261c-.6 2-.9 4.1-.9 6.1C0 278.7 9.3 288 20.9 288L96 288l0-32-60.1 0zM192 256l0 32 299.1 0c11.5 0 20.9-9.3 20.9-20.9c0-2.1-.3-4.1-.9-6.1l-11.4-37-33.5 0 9.8 32L192 256zm0-96l0 32 299.1 0c11.5 0 20.9-9.3 20.9-20.9c0-2.1-.3-4.1-.9-6.1l-11.4-37-33.5 0 9.8 32L192 160z" />
    </Icon>
);

export default BlindsRaised;