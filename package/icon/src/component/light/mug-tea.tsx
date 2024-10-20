
import { Icon } from "../../index";

/**
 * A component that renders the `mug-tea` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug-tea?s=light mug-tea}
 * @preview ![mug-tea](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/mug-tea.svg)
 */
const MugTea: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M144 96L64 96l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-80 0-176-32 0L176 96l0 40.5 36.5 30.4C219.8 173 224 182 224 191.5l0 64.5c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64.5c0-9.5 4.2-18.5 11.5-24.6L144 136.5 144 96zm16-32l192 0 32 0 80 0c61.9 0 112 50.1 112 112s-50.1 112-112 112l-48 0 0 64c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L32 96c0-17.7 14.3-32 32-32l96 0zM464 96l-48 0 0 160 48 0c44.2 0 80-35.8 80-80s-35.8-80-80-80zM128 256l64 0 0-64.5-32-26.7-32 26.7 0 64.5z" />
    </Icon>
);

export default MugTea;