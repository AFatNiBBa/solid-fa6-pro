
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-fog` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-fog?s=sharp-thin cloud-fog}
 * @preview ![cloud-fog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/cloud-fog.svg)
 */
const CloudFog: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M464 128l0 16 16 0c44.2 0 80 35.8 80 80l0 80-80 0-320 0-80 0 0-80c0-34.8 22.2-64.5 53.3-75.5l10.7-3.8 0-11.3 0-21.5c0-53 43-96 96-96c32.4 0 61.1 16.1 78.5 40.8l8.9 12.6 12.9-8.4C352.9 52.8 367.9 48 384 48c44.2 0 80 35.8 80 80zM64 320l16 0 80 0 320 0 80 0 16 0 0-16 0-80c0-53-43-96-96-96c0-53-43-96-96-96c-19.3 0-37.3 5.7-52.4 15.5C311.3 18.8 277.9 0 240 0C178.1 0 128 50.1 128 112l0 21.5C90.7 146.6 64 182.2 64 224l0 80 0 16zM0 400l0 16 8 0 560 0 8 0 0-16-8 0L8 400l-8 0zm64 96l0 16 8 0 144 0 8 0 0-16-8 0L72 496l-8 0zm224 0l0 16 8 0 336 0 8 0 0-16-8 0-336 0-8 0z" />
    </Icon>
);

export default CloudFog;