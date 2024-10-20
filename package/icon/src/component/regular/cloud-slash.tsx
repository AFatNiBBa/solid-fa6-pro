
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-slash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-slash?s=regular cloud-slash}
 * @preview ![cloud-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/cloud-slash.svg)
 */
const CloudSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-33.4-26.2C623.6 418.1 640 383 640 344c0-55.7-33.5-103.7-81.5-124.7c1-6.3 1.5-12.8 1.5-19.3c0-66.3-53.7-120-120-120c-17.4 0-33.8 3.7-48.7 10.3C360.4 54.6 314.9 32 264 32c-48.5 0-92.1 20.5-122.8 53.4L38.8 5.1zm140.4 110C200.9 93.4 230.9 80 264 80c36.3 0 68.8 16.1 90.9 41.7c13.8 16 36.5 21.1 55.9 12.5c8.9-3.9 18.7-6.2 29.2-6.2c39.8 0 72 32.2 72 72c0 4-.3 7.9-.9 11.7c-3.5 21.6 8.1 42.9 28.1 51.7C570.4 276.9 592 308 592 344c0 27.8-12.9 52.6-33.1 68.8L179.2 115.1zM426.5 432L144 432c-53 0-96-43-96-96c0-41.7 26.6-77.3 64-90.5c16.4-5.8 28.2-19.9 31.2-36.6L98.1 173.3C96.7 182 96 190.9 96 200l0 .2C40.1 220 0 273.3 0 336c0 79.5 64.5 144 144 144l320 0 23.4 0-60.9-48z" />
    </Icon>
);

export default CloudSlash;