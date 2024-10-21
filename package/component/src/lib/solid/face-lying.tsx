
import { Icon } from "../../index";

/**
 * A component that renders the `face-lying` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-lying?s=solid face-lying}
 * @preview ![face-lying](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/face-lying.svg)
 */
const FaceLying: typeof Icon = x => (
    <Icon {...x}>
        <path d="M494 350.5c-4.5 1-9.2 1.5-14 1.5l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l192 0c11.2 0 21.7 2.9 30.9 7.9C498.8 101.8 389.3 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c108 0 200.4-66.9 238-161.5zM144.4 176a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm160 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM188.8 393.6c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4C180.7 351.1 208.6 336 240 336c13.6 0 26.6 2.8 38.4 8c8.1 3.5 11.8 13 8.3 21.1s-13 11.8-21.1 8.3c-7.8-3.4-16.5-5.3-25.6-5.3c-20.9 0-39.5 10-51.2 25.6z" />
    </Icon>
);

export default FaceLying;