
import { Icon } from "../../index";

/**
 * A component that renders the `wifi-exclamation` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wifi-exclamation?s=light wifi-exclamation}
 * @preview ![wifi-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/wifi-exclamation.svg)
 */
const WifiExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M336 48l0 240c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-240c0-8.8 7.2-16 16-16s16 7.2 16 16zM4.7 161.7C75.4 91.7 169.4 45 274 34.3c-1.3 4.3-2 8.9-2 13.7l0 18.7C177 77.7 91.8 120.6 27.3 184.4c-6.3 6.2-16.4 6.2-22.6-.1s-6.2-16.4 .1-22.6zM116.7 276c41.3-41.2 95.2-69.9 155.3-80l0 32.5c-51.3 9.7-97.2 34.8-132.7 70.2c-6.3 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6zM368 196c60.1 10.1 114 38.8 155.3 80c6.3 6.2 6.3 16.4 0 22.6s-16.4 6.3-22.6 0c-35.5-35.4-81.4-60.5-132.7-70.2l0-32.5zm0-148c0-4.7-.7-9.3-2-13.7C470.6 45 564.6 91.7 635.3 161.7c6.3 6.2 6.3 16.3 .1 22.6s-16.3 6.3-22.6 .1C548.2 120.6 463 77.7 368 66.7L368 48zM320 448a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default WifiExclamation;