
import { Icon } from "../../index";

/**
 * A component that renders the `police-box` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/police-box?s=solid police-box}
 * @preview ![police-box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/police-box.svg)
 */
const PoliceBox: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 0c8.8 0 16 7.2 16 16l0 16 80 0c17.7 0 32 14.3 32 32c17.7 0 32 14.3 32 32l0 368 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 512c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0L32 96c0-17.7 14.3-32 32-32c0-17.7 14.3-32 32-32l80 0 0-16c0-8.8 7.2-16 16-16zM96 136l0 24 32 0 0-32-24 0c-4.4 0-8 3.6-8 8zm0 40l0 24c0 4.4 3.6 8 8 8l24 0 0-32-32 0zm72-48l-24 0 0 32 32 0 0-24c0-4.4-3.6-8-8-8zm-24 48l0 32 24 0c4.4 0 8-3.6 8-8l0-24-32 0zm72-48c-4.4 0-8 3.6-8 8l0 24 32 0 0-32-24 0zm24 48l-32 0 0 24c0 4.4 3.6 8 8 8l24 0 0-32zm16-48l0 32 32 0 0-24c0-4.4-3.6-8-8-8l-24 0zm32 48l-32 0 0 32 24 0c4.4 0 8-3.6 8-8l0-24zM96 256l0 48c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16l0-48c0-8.8-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default PoliceBox;