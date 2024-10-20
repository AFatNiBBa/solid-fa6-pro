
import { Icon } from "../../index";

/**
 * A component that renders the `drone` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/drone?s=regular drone}
 * @preview ![drone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/drone.svg)
 */
const Drone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 112C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c5.2 0 10.2-.3 15.2-1L88.7 171.6C64.9 162.3 48 139.1 48 112c0-35.3 28.7-64 64-64c27.1 0 50.3 16.9 59.6 40.7L223 127.2c.7-5 1-10.1 1-15.2zm-10.7 47.9l-39.8-29.9-29.7-22.3C141.7 92.1 128.2 80 112 80c-17.7 0-32 14.3-32 32c0 16.2 12.1 29.7 27.8 31.7l22.3 29.7 29.9 39.8 .1 .1 0 85.3-.1 .1-29.9 39.8-22.3 29.7C92.1 370.3 80 383.8 80 400c0 17.7 14.3 32 32 32c16.2 0 29.7-12.1 31.7-27.8l29.7-22.3 39.8-29.9 .1-.1 85.3 0 .1 .1 39.8 29.9 29.7 22.3c2.1 15.7 15.5 27.8 31.7 27.8c17.7 0 32-14.3 32-32c0-16.2-12.1-29.7-27.8-31.7l-22.3-29.7-29.9-39.8-.1-.1 0-85.3 .1-.1 29.9-39.8 22.3-29.7c15.7-2.1 27.8-15.5 27.8-31.7c0-17.7-14.3-32-32-32c-16.2 0-29.7 12.1-31.7 27.8l-29.7 22.3-39.8 29.9-.1 .1-85.3 0-.1-.1zM223 384.8l-51.3 38.5C162.3 447.1 139.1 464 112 464c-35.3 0-64-28.7-64-64c0-27.1 16.9-50.3 40.7-59.6L127.2 289c-5-.7-10.1-1-15.2-1C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-5.2-.3-10.2-1-15.2zM288 112c0 5.2 .3 10.2 1 15.2l51.3-38.5C349.7 64.9 372.9 48 400 48c35.3 0 64 28.7 64 64c0 27.1-16.9 50.3-40.7 59.6L384.8 223c5 .7 10.1 1 15.2 1c61.9 0 112-50.1 112-112S461.9 0 400 0S288 50.1 288 112zm1 272.8c-.7 5-1 10.1-1 15.2c0 61.9 50.1 112 112 112s112-50.1 112-112s-50.1-112-112-112c-5.2 0-10.2 .3-15.2 1l38.5 51.3c23.8 9.3 40.7 32.5 40.7 59.6c0 35.3-28.7 64-64 64c-27.1 0-50.3-16.9-59.6-40.7L289 384.8zM224 208l64 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default Drone;