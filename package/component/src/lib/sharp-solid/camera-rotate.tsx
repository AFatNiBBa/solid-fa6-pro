
import { Icon } from "../../index";

/**
 * A component that renders the `camera-rotate` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-rotate?s=sharp-solid camera-rotate}
 * @preview ![camera-rotate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/camera-rotate.svg)
 */
const CameraRotate: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 32L202.7 96 64 96l0 384 512 0 0-384L437.3 96 416 32 224 32zM448 272l-88 0-16-16 27-27c-13.6-13.4-31.9-21-51-21c-19.2 0-37.7 7.6-51.3 21.3L249 249 215 215l19.7-19.7C257.4 172.7 288 160 320 160c31.8 0 62.4 12.6 85 35l27-27 16 16 0 88zM192 304l88 0 16 16-27 27c13.6 13.4 31.9 21 51 21c19.2 0 37.7-7.6 51.3-21.3L391 327 425 361l-19.7 19.7C382.6 403.3 352 416 320 416c-31.8 0-62.4-12.6-85-35l-27 27-16-16 0-88z" />
    </Icon>
);

export default CameraRotate;