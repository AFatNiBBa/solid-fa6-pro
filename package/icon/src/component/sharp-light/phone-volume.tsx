
import { Icon } from "../../index";

/**
 * A component that renders the `phone-volume` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-volume?s=sharp-light phone-volume}
 * @preview ![phone-volume](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/phone-volume.svg)
 */
const PhoneVolume: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280.4 355.3l21.3 12.3L319 350.2l40.7-40.7L475.8 356 453.3 480l-5.3 0C218.2 480 32 293.7 32 64l0-5.3L156 36.2l46.5 116.1-40.7 40.7-17.3 17.3 12.3 21.3c29.6 51.4 72.4 94.1 123.7 123.7zM512 336L352 272l-55.6 55.6c-46.5-26.8-85.2-65.5-112-112L240 160 176 0 0 32 0 64C0 311.4 200.6 512 448 512l32 0 32-176zM256 32c123.7 0 224 100.3 224 224l32 0C512 114.6 397.4 0 256 0l0 32zm32 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96 0l32 0c0-88.4-71.6-160-160-160l0 32c70.7 0 128 57.3 128 128z" />
    </Icon>
);

export default PhoneVolume;