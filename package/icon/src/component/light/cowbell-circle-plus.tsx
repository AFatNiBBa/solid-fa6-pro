
import { Icon } from "../../index";

/**
 * A component that renders the `cowbell-circle-plus` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cowbell-circle-plus?s=light cowbell-circle-plus}
 * @preview ![cowbell-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/cowbell-circle-plus.svg)
 */
const CowbellCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M176 32l96 0c8.8 0 16 7.2 16 16l0 48L160 96l0-48c0-8.8 7.2-16 16-16zM128 48l0 48-16 0c-21.4 0-40.3 14.2-46.2 34.8l-64 224c-4.1 14.5-1.2 30.1 7.8 42.1S32.9 416 48 416l214.6 0c-2.9-10.3-4.9-21-5.9-32L48 384c-5 0-9.8-2.4-12.8-6.4s-4-9.2-2.6-14l64-224c2-6.9 8.2-11.6 15.4-11.6l32 0 160 0 32 0c7.1 0 13.4 4.7 15.4 11.6l18.2 63.8c9.9-3.7 20.2-6.6 30.8-8.6l-18.3-64C376.3 110.2 357.4 96 336 96l-16 0 0-48c0-26.5-21.5-48-48-48L176 0c-26.5 0-48 21.5-48 48zM256 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l-32 0c0 35.3 28.7 64 64 64c29.2 0 53.9-19.6 61.5-46.4c-3.8-5.7-7.2-11.5-10.3-17.6L256 448zm64-80a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm256 0a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM448 304c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-48z" />
    </Icon>
);

export default CowbellCirclePlus;