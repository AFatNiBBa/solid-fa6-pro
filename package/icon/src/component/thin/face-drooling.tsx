
import { Icon } from "../../index";

/**
 * A component that renders the `face-drooling` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-drooling?s=thin face-drooling}
 * @preview ![face-drooling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/face-drooling.svg)
 */
const FaceDrooling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256C16 123.5 123.5 16 256 16s240 107.5 240 240c0 61.5-23.1 117.5-61.1 160c-2.9 3.3-2.7 8.4 .6 11.3s8.3 2.7 11.3-.6C487.3 381.4 512 321.6 512 256C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512c4.4 0 8-3.6 8-8s-3.6-8-8-8C123.5 496 16 388.5 16 256zm352 92.5L368 504c0 4.4 3.6 8 8 8s8-3.6 8-8l0-171.6c2.2-2.5 4.3-5 6.2-7.4c2.8-3.4 2.2-8.5-1.2-11.2s-8.5-2.2-11.2 1.2C354 344.7 313.4 376 256 376s-98-31.3-121.8-61c-2.8-3.5-7.8-4-11.2-1.2s-4 7.8-1.2 11.2c25.7 32.1 70.5 67 134.2 67c17.4 0 33.4-2.6 48-7l0 87c0 4.4 3.6 8 8 8s8-3.6 8-8l0-92.8c18.7-7.9 34.7-18.8 48-30.7zM208 168c4.4 0 8-3.6 8-8s-3.6-8-8-8c-52.7 0-80.3 40.9-87.5 61.3c-1.5 4.2 .7 8.7 4.8 10.2s8.7-.7 10.2-4.8c6.1-17 29.2-50.7 72.5-50.7zm168.5 50.7c1.5 4.2 6.1 6.3 10.2 4.8s6.3-6.1 4.8-10.2C384.3 192.9 356.7 152 304 152c-4.4 0-8 3.6-8 8s3.6 8 8 8c43.3 0 66.4 33.7 72.5 50.7z" />
    </Icon>
);

export default FaceDrooling;