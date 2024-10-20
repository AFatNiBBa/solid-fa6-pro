
import { Icon } from "../../index";

/**
 * A component that renders the `check-to-slot` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check-to-slot?s=light check-to-slot}
 * @preview ![check-to-slot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/check-to-slot.svg)
 */
const CheckToSlot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M144 64c-8.8 0-16 7.2-16 16l0 304 320 0 0-304c0-8.8-7.2-16-16-16L144 64zM480 80l0 304 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0-32 0-320 0-32 0-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0L96 80c0-26.5 21.5-48 48-48l288 0c26.5 0 48 21.5 48 48zM48 320l16 0 0 32-16 0c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l480 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0-32 16 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48zM379.3 174L272.6 280.6c-6.2 6.2-16.4 6.2-22.6 0l-53.3-53.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l42 42 95.4-95.4c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
    </Icon>
);

export default CheckToSlot;