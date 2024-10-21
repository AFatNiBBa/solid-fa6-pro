
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-open-text` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-open-text?s=thin envelope-open-text}
 * @preview ![envelope-open-text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/envelope-open-text.svg)
 */
const EnvelopeOpenText: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16c-8.6 0-17 2.8-24 7.9L177.9 64l156.2 0L280 23.9C273 18.8 264.6 16 256 16zM120 64l31 0 71.5-53C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L361 64l31 0c30.9 0 56 25.1 56 56l0 8.5 38.1 28.2c16.3 12.1 25.9 31.1 25.9 51.4L512 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 208.1c0-20.3 9.6-39.4 25.9-51.4L64 128.5l0-8.5c0-30.9 25.1-56 56-56zM448 214.5l-16 13.1L432 120c0-22.1-17.9-40-40-40L120 80c-22.1 0-40 17.9-40 40l0 107.7L64 214.5l0-66.1L35.4 169.5C23.2 178.6 16 192.9 16 208.1l0 8.4 1.6 1.3L232.7 394.5c6.6 5.4 14.8 8.3 23.3 8.3s16.7-2.9 23.3-8.3L494.4 217.8l1.6-1.3 0-8.4c0-15.2-7.2-29.5-19.4-38.6L448 148.4l0 66.1zM16 448c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-210.8L289.4 406.9c-9.4 7.7-21.2 12-33.4 12s-24-4.2-33.4-12L16 237.2 16 448zM168 160l176 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-176 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zm0 80l176 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-176 0c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default EnvelopeOpenText;