
import { Icon, generic } from "../../index";

/**
 * A component that renders the `police-box` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/police-box?s=duotone police-box}
 * @preview ![police-box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/police-box.svg)
 */
const PoliceBox: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 488c0 13.3 10.7 24 24 24l336 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0L32 464l-8 0c-13.3 0-24 10.7-24 24zM96 136l0 24 32 0 0-32-24 0c-4.4 0-8 3.6-8 8zm0 40l0 24c0 4.4 3.6 8 8 8l24 0 0-32-32 0zm48-48l0 32 32 0 0-24c0-4.4-3.6-8-8-8l-24 0zm0 48l0 32 24 0c4.4 0 8-3.6 8-8l0-24-32 0zM176 16l0 16 32 0 0-16c0-8.8-7.2-16-16-16s-16 7.2-16 16zm32 120l0 24 32 0 0-32-24 0c-4.4 0-8 3.6-8 8zm0 40l0 24c0 4.4 3.6 8 8 8l24 0 0-32-32 0zm48-48l0 32 32 0 0-24c0-4.4-3.6-8-8-8l-24 0zm0 48l0 32 24 0c4.4 0 8-3.6 8-8l0-24-32 0z" />
        <path d="M96 32C78.3 32 64 46.3 64 64C46.3 64 32 78.3 32 96l0 368 320 0 0-368c0-17.7-14.3-32-32-32c0-17.7-14.3-32-32-32L96 32zm0 104c0-4.4 3.6-8 8-8l24 0 0 32-32 0 0-24zm0 40l32 0 0 32-24 0c-4.4 0-8-3.6-8-8l0-24zm72-48c4.4 0 8 3.6 8 8l0 24-32 0 0-32 24 0zm-24 48l32 0 0 24c0 4.4-3.6 8-8 8l-24 0 0-32zm72-48l24 0 0 32-32 0 0-24c0-4.4 3.6-8 8-8zm24 48l0 32-24 0c-4.4 0-8-3.6-8-8l0-24 32 0zm16-48l24 0c4.4 0 8 3.6 8 8l0 24-32 0 0-32zm32 48l0 24c0 4.4-3.6 8-8 8l-24 0 0-32 32 0zM96 256c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48z" />
    </Icon>
);

export default PoliceBox;