
import { Icon } from "../../index";

/**
 * A component that renders the `pen-field` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-field?s=regular pen-field}
 * @preview ![pen-field](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/pen-field.svg)
 */
const PenField: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M569.2 59.1L581.1 71c9.4 9.4 9.4 24.6 0 33.9L560 126.1 514.3 80.4l20.8-21.1c9.4-9.5 24.6-9.5 34.1-.1zM359.9 236.8L480.6 114.5 526.1 160 404.6 281.6c-3.3 3.3-7.5 5.6-12 6.5L343 298.5l10.4-49.7c.9-4.5 3.2-8.7 6.4-11.9zM501 25.5L325.7 203.1c-9.7 9.8-16.4 22.3-19.2 35.8l-18 85.7c-1.7 7.9 .8 16.2 6.5 21.9s14 8.2 21.9 6.5l85.5-17.9c13.7-2.9 26.2-9.7 36.1-19.6L615.1 138.9c28.1-28.1 28.1-73.7 0-101.8L603.1 25.2C574.9-3.1 529-2.9 501 25.5zM72 128c-39.8 0-72 32.2-72 72L0 440c0 39.8 32.2 72 72 72l432 0c39.8 0 72-32.2 72-72l0-128c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 128c0 13.3-10.7 24-24 24L72 464c-13.3 0-24-10.7-24-24l0-240c0-13.3 10.7-24 24-24l192 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L72 128zm56 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default PenField;