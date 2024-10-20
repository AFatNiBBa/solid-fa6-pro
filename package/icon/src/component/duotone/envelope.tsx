
import { Icon, generic } from "../../index";

/**
 * A component that renders the `envelope` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope?s=duotone envelope}
 * @preview ![envelope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/envelope.svg)
 */
const Envelope: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c5.7 4.3 12.4 6.4 19.2 6.4s13.5-2.1 19.2-6.4L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4l0 272c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 112z" />
        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64z" />
    </Icon>
);

export default Envelope;