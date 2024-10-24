
import { Icon } from "../../index";

/**
 * A component that renders the `person-simple` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-simple?s=light person-simple}
 * @preview ![person-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/person-simple.svg)
 */
const PersonSimple: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M160 64A32 32 0 1 0 96 64a32 32 0 1 0 64 0zM64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM57.8 236l-4.1 49.3C52.1 304 66.8 320 85.6 320l84.9 0c18.7 0 33.4-16 31.9-34.7L198.2 236c-2.1-24.9-22.9-44-47.8-44l-44.8 0c-25 0-45.8 19.1-47.8 44zm-31.9-2.7C29.3 191.9 64 160 105.6 160l44.8 0c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6L192 496c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-144-64 0 0 144c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-147.7c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3z" />
    </Icon>
);

export default PersonSimple;