
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hamsa` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hamsa?s=duotone hamsa}
 * @preview ![hamsa](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hamsa.svg)
 */
const Hamsa: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 322.6c0 8.6 3.2 16.9 9 23.3L95.4 441c41.1 45.2 99.4 71 160.6 71s119.4-25.8 160.6-71L503 345.9c5.8-6.4 9-14.7 9-23.3c0-19.1-15.5-34.6-34.6-34.6L432 288c-8.8 0-16-7.2-16-16l0-200c0-22.1-17.9-40-40-40s-40 17.9-40 40l0 132c0 11-9 20-20 20s-20-9-20-20l0-164c0-22.1-17.9-40-40-40s-40 17.9-40 40l0 164c0 11-9 20-20 20s-20-9-20-20l0-132c0-22.1-17.9-40-40-40s-40 17.9-40 40l0 200c0 8.8-7.2 16-16 16l-45.4 0C15.5 288 0 303.5 0 322.6zM160 352c0-5.2 1.8-10.1 5.4-13.8C179.2 323.8 217.6 288 256 288s76.8 35.8 90.6 50.2c3.6 3.7 5.4 8.7 5.4 13.8s-1.8 10.1-5.4 13.8C332.8 380.2 294.4 416 256 416s-76.8-35.8-90.6-50.2c-3.6-3.7-5.4-8.7-5.4-13.8z" />
        <path d="M224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Hamsa;