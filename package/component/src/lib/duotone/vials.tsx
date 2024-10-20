
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vials` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vials?s=duotone vials}
 * @preview ![vials](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/vials.svg)
 */
const Vials: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 46.3 14.3 32 32 32l56 0 48 0 56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 304c0 44.2-35.8 80-80 80s-80-35.8-80-80L32 96C14.3 96 0 81.7 0 64zM88 96l0 160 0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144 0-160L88 96zM288 64c0-17.7 14.3-32 32-32l56 0 48 0 56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 304c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-304c-17.7 0-32-14.3-32-32zm88 32l0 160 0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144 0-160-48 0z" />
        <path d="M136 256l-48 0 0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144zm288 0l-48 0 0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144z" />
    </Icon>
);

export default Vials;