
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hospitals` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hospitals?s=duotone hospitals}
 * @preview ![hospitals](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hospitals.svg)
 */
const Hospitals: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M256 48c0-26.5 21.5-48 48-48L528 0c26.5 0 48 21.5 48 48l0 208-144 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l144 0 0 64-144 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l144 0 0 80c0 26.5-21.5 48-48 48l-216.6 0c5.4-9.4 8.6-20.3 8.6-32l0-352c0-35.3-28.7-64-64-64l0-16zm112 88l0 16c0 8.8 7.2 16 16 16l24 0 0 24c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-24 24 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-24 0 0-24c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16l0 24-24 0c-8.8 0-16 7.2-16 16z" />
        <path d="M408 96l0 24-24 0c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l24 0 0 24c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-24 24 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-24 0 0-24c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16zM48 96C21.5 96 0 117.5 0 144L0 384l144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L0 416l0 48c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L48 96zm88 80l16 0c8.8 0 16 7.2 16 16l0 24 24 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-24 0 0 24c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-24-24 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16l24 0 0-24c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default Hospitals;