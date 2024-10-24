
import { Icon } from "../../index";

/**
 * A component that renders the `prescription` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/prescription?s=light prescription}
 * @preview ![prescription](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/prescription.svg)
 */
const Prescription: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M31.1 0C13.9 0 0 13.9 0 31.1L0 208l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80 105.4 0 128 128L132.7 484.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L288 374.6 420.7 507.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L310.6 352 443.3 219.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L288 329.4 182.4 223.8C241.3 220.5 288 171.7 288 112C288 50.1 237.9 0 176 0L31.1 0zM144 192s0 0 0 0L32 192 32 32l144 0c44.2 0 80 35.8 80 80s-35.8 80-80 80l-32 0z" />
    </Icon>
);

export default Prescription;