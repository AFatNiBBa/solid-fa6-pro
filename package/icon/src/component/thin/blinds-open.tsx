
import { Icon } from "../../index";

/**
 * A component that renders the `blinds-open` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blinds-open?s=thin blinds-open}
 * @preview ![blinds-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/blinds-open.svg)
 */
const BlindsOpen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 16c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16L152 80l-16 0L32 80c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l448 0zM32 96l104 0 0 80 0 16 0 64.7c-22.7 3.8-40 23.6-40 47.3c0 12.3 4.6 23.5 12.2 32c.6 .7 1.2 1.3 1.8 1.9c8.7 8.7 20.7 14.1 33.9 14.1c14.2 0 27-6.2 35.8-16c7.6-8.5 12.2-19.7 12.2-32c0-23.8-17.3-43.5-40-47.3l0-64.7 0-16 0-80 328 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32L32 0C14.3 0 0 14.3 0 32L0 64C0 81.7 14.3 96 32 96zM144 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM8 176c-4.4 0-8 3.6-8 8s3.6 8 8 8l96 0 0-16L8 176zM8 336c-4.4 0-8 3.6-8 8s3.6 8 8 8l72 0c-3.7-4.9-6.8-10.3-9.3-16L8 336zm496 16c4.4 0 8-3.6 8-8s-3.6-8-8-8l-286.7 0c-2.5 5.7-5.6 11.1-9.3 16l296 0zm0-160c4.4 0 8-3.6 8-8s-3.6-8-8-8l-320 0 0 16 320 0zM0 504c0 4.4 3.6 8 8 8l496 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L8 496c-4.4 0-8 3.6-8 8z" />
    </Icon>
);

export default BlindsOpen;