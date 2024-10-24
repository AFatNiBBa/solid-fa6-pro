
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-praying` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-praying?s=sharp-duotone-solid person-praying}
 * @preview ![person-praying](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-praying.svg)
 */
const PersonPraying: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M224 64a64 64 0 1 0 128 0A64 64 0 1 0 224 64z" />
        <path d="M176 144l-24.1 0-11.2 21.4L79.8 280.9c-20.2 38.5-9.4 85.9 25.6 111.8L158.6 432 72 432l-40 0 0 80 40 0 208 0 23.8-72.2L187.7 354l45-90 22.9 31.5 24.9 34.2L313.3 303l72.1-59 31-25.3-50.7-61.9-31 25.3-39.4 32.2-39.1-53.8-12-16.5L224 144l-48 0z" />
    </Icon>
);

export default PersonPraying;