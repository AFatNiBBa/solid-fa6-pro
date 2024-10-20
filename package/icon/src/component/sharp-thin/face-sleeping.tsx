
import { Icon } from "../../index";

/**
 * A component that renders the `face-sleeping` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-sleeping?s=sharp-thin face-sleeping}
 * @preview ![face-sleeping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/face-sleeping.svg)
 */
const FaceSleeping: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256C16 123.5 123.5 16 256 16c35.4 0 69.1 7.7 99.3 21.4l6.6-14.6C329.6 8.2 293.8 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256c0-37.8-8.2-73.6-22.9-105.9l-14.6 6.6C488.3 186.9 496 220.6 496 256c0 132.5-107.5 240-240 240S16 388.5 16 256zM224 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm80 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm47.6-112c-14.6 0-30.2-8.6-41-27.9l-3.9-7-13.9 7.8 3.9 7c13.1 23.4 33.6 36.1 55 36.1s41.8-12.7 55-36.1l3.9-7-13.9-7.8-3.9 7c-10.9 19.3-26.4 27.9-41 27.9zm-233-27.9l-3.9-7-13.9 7.8 3.9 7c13.1 23.4 33.6 36.1 55 36.1s41.8-12.7 55-36.1l3.9-7-13.9-7.8-3.9 7c-10.9 19.3-26.4 27.9-41 27.9s-30.2-8.6-41-27.9zM288 96l0 16 8 0 67.2 0L291 169.8l-3 2.4 0 3.8 0 8 0 8 8 0 80 0 8 0 0-16-8 0-67.2 0L381 118.2l3-2.4 0-3.8 0-8 0-8-8 0-80 0-8 0zM424 0l-8 0 0 16 8 0 67.2 0L419 73.8l-3 2.4 0 3.8 0 8 0 8 8 0 80 0 8 0 0-16-8 0-67.2 0L509 22.2l3-2.4 0-3.8 0-8 0-8-8 0L424 0z" />
    </Icon>
);

export default FaceSleeping;