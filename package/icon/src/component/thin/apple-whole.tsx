
import { Icon } from "../../index";

/**
 * A component that renders the `apple-whole` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apple-whole?s=thin apple-whole}
 * @preview ![apple-whole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/apple-whole.svg)
 */
const AppleWhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 96l-16 0 0-16c0-35.3 28.7-64 64-64l16 0 0 16c0 35.3-28.7 64-64 64zm0 16c44.2 0 80-35.8 80-80l0-16c0-8.8-7.2-16-16-16L288 0c-44.2 0-80 35.8-80 80l0 16c0 8.8 7.2 16 16 16l16 0zM16 288c0-36 8.5-72.9 25.1-100.3C57.4 160.7 80.8 144 112 144c24.1 0 54.2 9.4 76.9 18.2c22.5 8.8 47.8 8.8 70.3 0c22.7-8.8 52.7-18.2 76.9-18.2c31.2 0 54.6 16.7 70.9 43.7C423.5 215.1 432 252 432 288c0 60.7-19 113.3-46.8 150.4c-28 37.3-63.7 57.6-97.2 57.6c-9.5 0-22.2-2.8-34.1-6.4c-19.4-5.8-40.3-5.8-59.7 0c-11.9 3.6-24.7 6.4-34.1 6.4c-33.5 0-69.2-20.3-97.2-57.6C35 401.3 16 348.7 16 288zm96-160C35.7 128 0 211.7 0 288C0 416 80 512 160 512c11.9 0 26.5-3.4 38.8-7.1c16.4-4.9 34.1-4.9 50.5 0c12.2 3.7 26.8 7.1 38.8 7.1c80 0 160-96 160-224c0-76.3-35.7-160-112-160c-27.3 0-59.7 10.3-82.7 19.3c-18.8 7.3-39.9 7.3-58.7 0C171.7 138.3 139.3 128 112 128z" />
    </Icon>
);

export default AppleWhole;