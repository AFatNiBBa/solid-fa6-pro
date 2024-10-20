
import { Icon } from "../../index";

/**
 * A component that renders the `phone-volume` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-volume?s=thin phone-volume}
 * @preview ![phone-volume](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/phone-volume.svg)
 */
const PhoneVolume: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 0c-4.4 0-8 3.6-8 8s3.6 8 8 8c128.1 0 232 103.9 232 232c0 4.4 3.6 8 8 8s8-3.6 8-8C512 111 401 0 264 0zm8 224a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 104c0 4.4 3.6 8 8 8c75.1 0 136 60.9 136 136c0 4.4 3.6 8 8 8s8-3.6 8-8c0-83.9-68.1-152-152-152c-4.4 0-8 3.6-8 8zm41.8 278.5c6.6 3.1 14.6 1.3 19.2-4.3l40.4-49.3c6.7-8.2 18-11 27.8-7l96 40c11.1 4.6 17.1 16.8 13.9 28.5l-24 88C468.3 488.8 458.8 496 448 496C209.4 496 16 302.6 16 64c0-10.8 7.2-20.3 17.7-23.2l88-24c11.6-3.2 23.8 2.8 28.5 13.9l40 96c4.1 9.8 1.3 21.1-7 27.8l-49.3 40.4c-5.7 4.7-7.5 12.6-4.3 19.2c34.8 73.8 94.5 133.5 168.3 168.3zM345 318.7L304.7 368C234.2 334.7 177.2 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6z" />
    </Icon>
);

export default PhoneVolume;