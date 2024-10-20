
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cowbell-circle-plus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cowbell-circle-plus?s=duotone cowbell-circle-plus}
 * @preview ![cowbell-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cowbell-circle-plus.svg)
 */
const CowbellCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 368c0 10.3 3.3 20.5 9.7 28.9C18.7 408.9 32.9 416 48 416l214.6 0c-4.3-15.3-6.6-31.4-6.6-48c0-86.4 62.3-158.3 144.4-173.2l-18.3-64C376.3 110.2 357.4 96 336 96l-16 0 0-56c0-22.1-17.9-40-40-40L168 0c-22.1 0-40 17.9-40 40l0 56-16 0c-21.4 0-40.3 14.2-46.2 34.8l-64 224C.6 359.2 0 363.6 0 368zm160 80c0 35.3 28.7 64 64 64c29.2 0 53.9-19.6 61.5-46.4c-3.8-5.7-7.2-11.5-10.3-17.6L160 448zM176 48l96 0 0 48-96 0 0-48z" />
        <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-80c-8.8 0-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default CowbellCirclePlus;