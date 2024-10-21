
import { Icon } from "../../index";

/**
 * A component that renders the `car-wrench` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-wrench?s=sharp-light car-wrench}
 * @preview ![car-wrench](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/car-wrench.svg)
 */
const CarWrench: typeof Icon = x => (
    <Icon {...x}>
        <path d="M88 40C62.6 40 41.2 56.9 34.3 80L80 80l16 0 0 32-16 0-45.7 0c6.9 23.1 28.3 40 53.7 40c22 0 41-12.6 50.2-31.1l4.4-8.9 9.9 0 207 0 9.9 0 4.4 8.9C383 139.4 402 152 424 152c25.4 0 46.8-16.9 53.7-40L432 112l-16 0 0-32 16 0 45.7 0c-6.9-23.1-28.3-40-53.7-40c-22 0-41 12.6-50.2 31.1L369.4 80l-9.9 0-207 0-9.9 0-4.4-8.9C129 52.6 110 40 88 40zM0 96C0 47.4 39.4 8 88 8c30.9 0 58.1 15.9 73.8 40l188.5 0C365.9 23.9 393.1 8 424 8c48.6 0 88 39.4 88 88s-39.4 88-88 88c-30.9 0-58.1-15.9-73.8-40l-188.5 0c-15.7 24.1-42.9 40-73.8 40C39.4 184 0 144.6 0 96zm166.1 80l9.9 0 160 0 9.9 0 4.4 8.8L401.9 288l14.1 0 32 0 0 32 0 96 0 16 0 32 0 48-32 0 0-48L96 464l0 48-32 0 0-48 0-32 0-16 0-96 0-32 32 0 14.1 0 51.6-103.2 4.4-8.8zM416 320l-23.7 0c-.2 0-.4 0-.7 0l-271.4 0c-.2 0-.4 0-.7 0L96 320l0 96 0 16 320 0 0-16 0-96zM326.1 208l-140.2 0-40 80 220.2 0-40-80zM144 352a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm200 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default CarWrench;