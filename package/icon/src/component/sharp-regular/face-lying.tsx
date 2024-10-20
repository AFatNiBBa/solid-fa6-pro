
import { Icon } from "../../index";

/**
 * A component that renders the `face-lying` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-lying?s=sharp-regular face-lying}
 * @preview ![face-lying](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-lying.svg)
 */
const FaceLying: typeof Icon = x => (
    <Icon {...x}>
        <path d="M431.3 368L352 368l-24 0 0-48 24 0 88 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-152 0-24 0 0-48 24 0 152 0c7.7 0 15.1 1.2 22.1 3.4C448.1 126.1 361.2 48 256 48C141.1 48 48 141.1 48 256s93.1 208 208 208c73.6 0 138.3-38.3 175.3-96zm67.4-30.3C464.6 439 368.8 512 256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256c0 8.8-.4 17.6-1.3 26.2c.9 4.5 1.3 9.1 1.3 13.8c0 15.6-4.9 30-13.3 41.7zM144.4 176a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm160 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM195.2 390.4l-14.4 19.2-38.4-28.8 14.4-19.2C175.7 336.4 206 320 240 320c14.7 0 28.8 3.1 41.6 8.7l22 9.6-19.2 44-22-9.6c-6.8-3-14.4-4.6-22.4-4.6c-18.3 0-34.6 8.8-44.8 22.4z" />
    </Icon>
);

export default FaceLying;