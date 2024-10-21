
import { Icon } from "../../index";

/**
 * A component that renders the `xmark-to-slot` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/xmark-to-slot?s=light xmark-to-slot}
 * @preview ![xmark-to-slot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/xmark-to-slot.svg)
 */
const XmarkToSlot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M144 64c-8.8 0-16 7.2-16 16l0 304 320 0 0-304c0-8.8-7.2-16-16-16L144 64zM480 80l0 304 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0-32 0-320 0-32 0-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0L96 80c0-26.5 21.5-48 48-48l288 0c26.5 0 48 21.5 48 48zM48 320l16 0 0 32-16 0c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l480 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0-32 16 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48zM212.7 148.7c6.2-6.2 16.4-6.2 22.6 0L288 201.4l52.7-52.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L310.6 224l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L288 246.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 224l-52.7-52.7c-6.2-6.2-6.2-16.4 0-22.6z" />
    </Icon>
);

export default XmarkToSlot;