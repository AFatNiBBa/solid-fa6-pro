
import { Icon } from "../../index";

/**
 * A component that renders the `cowbell` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cowbell?s=light cowbell}
 * @preview ![cowbell](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/cowbell.svg)
 */
const Cowbell: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M176 32l96 0c8.8 0 16 7.2 16 16l0 48L160 96l0-48c0-8.8 7.2-16 16-16zM128 48l0 48-16 0c-21.4 0-40.3 14.2-46.2 34.8l-64 224c-4.1 14.5-1.2 30.1 7.8 42.1S32.9 416 48 416l352 0c15.1 0 29.3-7.1 38.3-19.1s12-27.6 7.8-42.1l-64-224C376.3 110.2 357.4 96 336 96l-16 0 0-48c0-26.5-21.5-48-48-48L176 0c-26.5 0-48 21.5-48 48zm16 80l160 0 32 0c7.1 0 13.4 4.7 15.4 11.6l64 224c1.4 4.8 .4 10-2.6 14s-7.8 6.4-12.8 6.4L48 384c-5 0-9.8-2.4-12.8-6.4s-4-9.2-2.6-14l64-224c2-6.9 8.2-11.6 15.4-11.6l32 0zm80 384c35.3 0 64-28.7 64-64l-32 0c0 17.7-14.3 32-32 32s-32-14.3-32-32l-32 0c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default Cowbell;