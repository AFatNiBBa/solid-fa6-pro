
import { Icon } from "../../index";

/**
 * A component that renders the `person-praying` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-praying?s=light person-praying}
 * @preview ![person-praying](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/person-praying.svg)
 */
const PersonPraying: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M256 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0A64 64 0 1 0 224 64a64 64 0 1 0 128 0zM200.5 176l.9 0c12.4 0 23.7 7.2 29 18.5l3.1 6.7c-.1 .2-.2 .5-.3 .7L157.1 384.6l-26.7-16.8c-13.1-8.2-18.4-24.6-12.7-39l53.1-132.7c4.9-12.1 16.6-20.1 29.7-20.1zm112 306.5l-128-80.6 67.3-161.5 12.4 26.5c9.2 19.7 34.9 24.7 50.8 9.9l95.9-89.1c6.5-6 6.9-16.1 .8-22.6s-16.1-6.9-22.6-.8l-95.9 89.1-33.8-72.4c-10.5-22.5-33.1-36.9-58-36.9l-.9 0c-26.2 0-49.7 15.9-59.4 40.2L88 316.9c-11.5 28.7-.8 61.5 25.3 77.9L248.6 480 48 480c-8.8 0-16 7.2-16 16s7.2 16 16 16l256 0c7.1 0 13.4-4.7 15.4-11.6s-.8-14.2-6.8-18z" />
    </Icon>
);

export default PersonPraying;