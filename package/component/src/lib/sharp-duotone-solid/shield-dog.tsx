
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield-dog` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-dog?s=sharp-duotone-solid shield-dog}
 * @preview ![shield-dog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shield-dog.svg)
 */
const ShieldDog: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 133.1c0 49.1 9.5 115.6 37.9 180.9c32.7 75.2 91 150 189.4 192.6L256 512l12.7-5.5c98.4-42.6 156.7-117.3 189.4-192.6c32.4-74.7 40.2-151 37.3-200.9l-1.2-20.5L475.1 85 267.6 4.5 256 0 244.4 4.5 36.9 85 17.8 92.5 16.6 113c-.4 6.3-.6 13-.6 20.1zM128 160l72 0 8 0c8 0 16 0 24 0c24 0 48 0 72 0l16 32c26.7 0 53.3 0 80 0c0 16 0 32 0 48.3c0 1.4 0 2.7-.1 4.1c-.1 1.2-.2 2.5-.3 3.8c-.3 2.7-.7 5.3-1.2 7.9c-1.1 5.2-2.6 10.2-4.7 15c-4 9.6-9.9 18.2-17.1 25.4C362.1 311 342.1 320 320 320l-48 0c0 21.3 0 42.7 0 64c-42.7-21.3-85.3-42.7-128-64c8-16 16-32 24-48l-.3 0c-21.9-.2-39.7-18-39.7-40l0-72z" />
        <path d="M144 320l24-48c22.1 0 40-17.9 40-40l0-72 24 0 72 0 16 32 80 0 0 48c0 44.2-35.8 80-80 80l-48 0 0 64L144 320zm128-96a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default ShieldDog;