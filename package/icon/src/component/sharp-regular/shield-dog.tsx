
import { Icon } from "../../index";

/**
 * A component that renders the `shield-dog` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-dog?s=sharp-regular shield-dog}
 * @preview ![shield-dog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/shield-dog.svg)
 */
const ShieldDog: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64.1 126L256 51.5 448 126c1 43.5-6.9 106.9-33.8 168.8C385.9 359.7 337.1 422.4 256 459.6c-81.1-37.1-129.9-99.9-158.1-164.8C71 232.9 63.1 169.5 64.1 126zm431.4-13l-1.2-20.5L475.1 85 267.6 4.5 256 0 244.4 4.5 36.9 85 17.8 92.5 16.6 113c-2.9 49.9 4.9 126.3 37.3 200.9c32.7 75.2 91 150 189.4 192.6L256 512l12.7-5.5c98.4-42.6 156.7-117.3 189.4-192.6c32.4-74.7 40.2-151 37.3-200.9zM160.9 270.2L144 304l128 64 0-64 48 0c44.2 0 80-35.8 80-80l0-48-80 0-16-32-64 0 0 64c0 35.3-28.7 64-64 64c-5.2 0-10.3-.6-15.1-1.8zM144 144l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 0-32-8 0-56 0zm112 48a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default ShieldDog;