
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-fog` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-fog?s=light cloud-fog}
 * @preview ![cloud-fog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/cloud-fog.svg)
 */
const CloudFog: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 112c0-44.2 35.8-80 80-80c32.2 0 59.9 19 72.6 46.4c2.2 4.8 6.6 8.1 11.8 9s10.4-.8 14.1-4.5c11.6-11.7 27.7-19 45.5-19c35.3 0 64 28.7 64 64l0 .3c0 4.5 1.9 8.8 5.2 11.8s7.8 4.5 12.2 4.1c2.2-.2 4.3-.3 6.6-.3c39.8 0 72 32.2 72 72s-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72c0-33.5 22.9-61.7 53.9-69.7c8.2-2.1 13.3-10.3 11.7-18.6c-1-5.1-1.5-10.3-1.5-15.7zM576 216c0-55.2-43-100.3-97.3-103.8C471.2 66.7 431.6 32 384 32c-19.3 0-37.3 5.7-52.4 15.5C311.3 18.8 277.9 0 240 0C178.1 0 128 50.1 128 112c0 2.6 .1 5.3 .3 7.9C90.6 135.5 64 172.6 64 216c0 57.4 46.6 104 104 104l304 0c57.4 0 104-46.6 104-104zM0 400c0 8.8 7.2 16 16 16l544 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 384c-8.8 0-16 7.2-16 16zm64 96c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 480c-8.8 0-16 7.2-16 16zm224 0c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-320 0c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default CloudFog;