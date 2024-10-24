
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-sunglasses` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-sunglasses?s=sharp-duotone-solid face-sunglasses}
 * @preview ![face-sunglasses](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-sunglasses.svg)
 */
const FaceSunglasses: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0-22.1 2.8-43.5 8.1-64l7.9 0 41.1 0c7.6 26.7 15.2 53.3 22.9 80l128 0 27.4-96 41.1 0L304 272l128 0 22.9-80 41.1 0 7.9 0c5.3 20.5 8.1 41.9 8.1 64c0 141.4-114.6 256-256 256S0 397.4 0 256zm18.6-96C56.6 66.2 148.6 0 256 0S455.4 66.2 493.4 160L464 160l0-32-192 0c0 5.3 0 10.7 0 16l-32 0c0-5.3 0-10.7 0-16L48 128c0 10.7 0 21.3 0 32l-29.4 0zM129.7 343.2C142.3 368.3 184.4 416 256 416s113.7-47.7 126.3-72.8l-28.6-14.3C344.9 346.3 312.4 384 256 384s-88.9-37.7-97.7-55.2l-28.6 14.3z" />
        <path d="M208 272L80 272 57.1 192 16 192 0 192l0-32 16 0 32 0 0-32 192 0 0 16 32 0 0-16 192 0 0 32 32 0 16 0 0 32-16 0-41.1 0L432 272l-128 0-27.4-96-41.1 0L208 272z" />
    </Icon>
);

export default FaceSunglasses;