
import { Icon } from "../../index";

/**
 * A component that renders the `face-pouting` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-pouting?s=sharp-thin face-pouting}
 * @preview ![face-pouting](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/face-pouting.svg)
 */
const FacePouting: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm97.1-85.1l-1.4-14.8C347 364.7 305.8 328 256 328s-91 36.7-95.6 84.2l-1.4 14.8 13.1-6.9c24-12.6 52.8-20 84-20c31.1 0 60 7.4 84 20l13.1 6.9zM332.8 399c-23.1-9.6-49.2-15-76.8-15c-27.6 0-53.7 5.4-76.7 15c9.8-31.7 40.3-55 76.7-55s66.9 23.3 76.8 55zM176.4 256a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm176-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM130.5 168.4l-7.6-2.5-5.1 15.2 7.6 2.5 96 32 7.6 2.5 5.1-15.2-7.6-2.5-96-32zm256 15.2l7.6-2.5-5.1-15.2-7.6 2.5-96 32-7.6 2.5 5.1 15.2 7.6-2.5 96-32z" />
    </Icon>
);

export default FacePouting;