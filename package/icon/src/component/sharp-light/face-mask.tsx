
import { Icon } from "../../index";

/**
 * A component that renders the `face-mask` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-mask?s=sharp-light face-mask}
 * @preview ![face-mask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/face-mask.svg)
 */
const FaceMask: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M444.8 416C404.4 455.6 349 480 288 480s-116.4-24.4-156.8-64l34.1 0L208 448l160 0 42.7-32 34.1 0zm27.1-32L432 384l0-96 0-2 80-32 0 2c0 47.6-14.8 91.7-40.2 128zm37.4-163.3L420.9 256 176 256l-20.9 0L66.8 220.7C83.7 113.7 176.3 32 288 32s204.3 81.7 221.2 188.7zm30.4-12.2C517.3 89.8 413.2 0 288 0S58.7 89.8 36.4 208.5l-13.3-5.3L11.2 232.9l14.9 5.9 6.4 2.5c-.3 4.8-.4 9.7-.4 14.6c0 141.4 114.6 256 256 256s256-114.6 256-256c0-4.9-.1-9.8-.4-14.6l6.4-2.5 14.9-5.9-11.9-29.7-13.3 5.3zM64 254l80 32 0 2 0 96-39.8 0C78.8 347.7 64 303.6 64 256l0-2zm336 34l0 96-42.7 32-138.7 0L176 384l0-96 224 0zM200 312l0 32 16 0 144 0 16 0 0-32-16 0-144 0-16 0zm0 48l0 32 16 0 144 0 16 0 0-32-16 0-144 0-16 0zm40-184c8.8 0 16-7.2 16-16s-7.2-16-16-16c-55.4 0-93.6 23-107.3 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0C162.9 195.7 193 176 240 176zm180.7 27.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6C429.6 167 391.4 144 336 144c-8.8 0-16 7.2-16 16s7.2 16 16 16c47 0 77.1 19.7 84.7 27.3z" />
    </Icon>
);

export default FaceMask;