
import { Icon } from "../../index";

/**
 * A component that renders the `shield-dog` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-dog?s=sharp-solid shield-dog}
 * @preview ![shield-dog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/shield-dog.svg)
 */
const ShieldDog: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 5.7l11.5 4.4L475 90.2l19.2 7.4 1.2 20.6c2.9 49.7-4.9 125.6-37.3 199.8C425.4 392.8 367 467.1 268.6 509.4L256 514.8l-12.6-5.4C145 467.1 86.6 392.8 53.9 318C21.4 243.7 13.6 167.8 16.6 118.1l1.2-20.6L37 90.2l207.5-80L256 5.7zM160.9 286.2L144 320l128 64 0-64 48 0c44.2 0 80-35.8 80-80l0-48-80 0-16-32-64 0 0 64c0 35.3-28.7 64-64 64c-5.2 0-10.3-.6-15.1-1.8zM144 160l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 0-32-8 0-56 0zm112 48a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default ShieldDog;