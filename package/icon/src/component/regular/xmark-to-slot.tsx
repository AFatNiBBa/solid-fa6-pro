
import { Icon } from "../../index";

/**
 * A component that renders the `xmark-to-slot` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/xmark-to-slot?s=regular xmark-to-slot}
 * @preview ![xmark-to-slot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/xmark-to-slot.svg)
 */
const XmarkToSlot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M144 80l0 280 288 0 0-280L144 80zM96 360L96 80c0-26.5 21.5-48 48-48l288 0c26.5 0 48 21.5 48 48l0 280c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0-288 0-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM64 288l0 48-16 0 0 96 480 0 0-96-16 0 0-48 16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l16 0zM207 135c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
    </Icon>
);

export default XmarkToSlot;