
import { Icon } from "../../index";

/**
 * A component that renders the `person-cane` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-cane?s=light person-cane}
 * @preview ![person-cane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/person-cane.svg)
 */
const PersonCane: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M248 56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-80 0a56 56 0 1 1 112 0A56 56 0 1 1 168 56zM144 164l0 156 64 0 0-158.8c-3.4-.8-6.9-1.2-10.5-1.2l-34.2 0c-6.8 0-13.3 1.4-19.3 4zm-32 38.1L62.1 295.5c-4.2 7.8-13.9 10.7-21.7 6.6s-10.7-13.9-6.6-21.7L92.7 170.3c13.9-26 41-42.3 70.6-42.3l34.2 0c23.5 0 45.7 10.3 60.9 28.2l89.8 105.5c5.7 6.7 4.9 16.8-1.8 22.6s-16.8 4.9-22.6-1.8L240 183.9 240 496c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-144-64 0 0 144c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-293.8zM368 352c-8.8 0-16 7.2-16 16l0 8c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-8c0-26.5 21.5-48 48-48s48 21.5 48 48l0 128c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-128c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default PersonCane;