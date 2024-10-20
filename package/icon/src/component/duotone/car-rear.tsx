
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-rear` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-rear?s=duotone car-rear}
 * @preview ![car-rear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/car-rear.svg)
 */
const CarRear: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 391.4L32 448c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-48-64 0c-.7 0-1.5 0-2.2 0s-1.4-.1-2.2-.1c-1.4-.1-2.9-.2-4.3-.4c-2.8-.4-5.6-.9-8.2-1.7c-5.4-1.5-10.5-3.6-15.2-6.3zM109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4c-8.7 24.9-17.4 49.7-26.1 74.6zM384 400l0 48c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-56.6c-9.4 5.4-20.3 8.6-32 8.6l-64 0z" />
        <path d="M165.4 96l181.2 0c13.6 0 25.7 8.6 30.2 21.4L402.9 192l-293.8 0 26.1-74.6c4.5-12.8 16.6-21.4 30.2-21.4zm-90.6 .3L39.6 196.8C16.4 206.4 0 229.3 0 256l0 80c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-80c0-26.7-16.4-49.6-39.6-59.2L437.2 96.3C423.7 57.8 387.4 32 346.6 32L165.4 32c-40.8 0-77.1 25.8-90.6 64.3zM208 272l96 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM48 280c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm360-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default CarRear;