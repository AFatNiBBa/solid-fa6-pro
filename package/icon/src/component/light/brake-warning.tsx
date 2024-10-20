
import { Icon } from "../../index";

/**
 * A component that renders the `brake-warning` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brake-warning?s=light brake-warning}
 * @preview ![brake-warning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/brake-warning.svg)
 */
const BrakeWarning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm0 416a224 224 0 1 0 0-448 224 224 0 1 0 0 448zm16-336c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16s16-7.2 16-16l0-128zM320 376a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM77.5 100.6c4.8-7.4 2.6-17.3-4.8-22.1s-17.3-2.6-22.1 4.8C18.5 133.2 0 192.4 0 256s18.5 122.8 50.5 172.7c4.8 7.4 14.7 9.6 22.1 4.8s9.6-14.7 4.8-22.1C48.7 366.6 32 313.3 32 256s16.7-110.6 45.5-155.4zm512-17.3c-4.8-7.4-14.7-9.6-22.1-4.8s-9.6 14.7-4.8 22.1C591.3 145.4 608 198.7 608 256s-16.7 110.6-45.5 155.4c-4.8 7.4-2.6 17.3 4.8 22.1s17.3 2.6 22.1-4.8C621.4 378.8 640 319.6 640 256s-18.6-122.8-50.5-172.7z" />
    </Icon>
);

export default BrakeWarning;