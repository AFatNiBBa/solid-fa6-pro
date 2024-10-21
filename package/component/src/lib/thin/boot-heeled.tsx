
import { Icon } from "../../index";

/**
 * A component that renders the `boot-heeled` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boot-heeled?s=thin boot-heeled}
 * @preview ![boot-heeled](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/boot-heeled.svg)
 */
const BootHeeled: typeof Icon = x => (
    <Icon {...x}>
        <path d="M29.1 0C13 0 0 13 0 29.1c0 2.6 .3 5.2 1 7.7C5.8 54.9 32 156.6 32 232c0 16.9-4.2 41.6-9.7 66.4c-5.4 24.7-12 48.9-16.6 64.9c-3.7 13-5.8 26.4-5.8 40L0 440l0 48c0 13.3 10.7 24 24 24l72 0c13.3 0 24-10.7 24-24l0-40 7 0c9.9 0 19.7 2.3 28.6 6.8L248.2 501c14.4 7.2 30.4 11 46.5 11L472 512l32 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-24 0 0-37.2c0-19.4-10.1-37.5-26.6-47.7L313.9 325.3c-26-16-41.9-44.4-41.9-74.9L272 24c0-13.3-10.7-24-24-24L29.1 0zM16 448l88 0 0 40c0 4.4-3.6 8-8 8l-72 0c-4.4 0-8-3.6-8-8l0-40zm96-16l-96 0 0-28.7c0-12 1.8-24 5.1-35.6C25.7 351.6 32.4 327 38 301.9c5.5-24.9 10-51.1 10-69.9C48 154.3 21.2 50.6 16.5 32.7c-.3-1.2-.5-2.4-.5-3.5C16 21.9 21.9 16 29.1 16L112 16l0 232c0 4.4 3.6 8 8 8s8-3.6 8-8l0-232 120 0c4.4 0 8 3.6 8 8l0 226.4c0 36.1 18.7 69.6 49.5 88.6L445 424.8c11.8 7.3 19 20.2 19 34.1l0 37.2-169.3 0c-13.7 0-27.1-3.2-39.4-9.3l-92.5-46.3c-11.1-5.6-23.4-8.4-35.8-8.4l-15 0z" />
    </Icon>
);

export default BootHeeled;