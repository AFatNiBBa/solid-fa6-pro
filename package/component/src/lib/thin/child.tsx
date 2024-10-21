
import { Icon } from "../../index";

/**
 * A component that renders the `child` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/child?s=thin child}
 * @preview ![child](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/child.svg)
 */
const Child: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 112a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM160 0a64 64 0 1 1 0 128A64 64 0 1 1 160 0zm-1.5 176c-32.5 0-62.3 17.9-77.6 46.5L31.1 315.8c-2.1 3.9-6.9 5.4-10.8 3.3s-5.4-6.9-3.3-10.8L66.7 215c18.1-33.9 53.3-55 91.7-55l3 0c38.4 0 73.6 21.1 91.7 55l49.8 93.2c2.1 3.9 .6 8.7-3.3 10.8s-8.7 .6-10.8-3.3l-49.8-93.2C223.8 193.9 194 176 161.5 176l-3 0zM96 288l0 192c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80c0-17.7 14.3-32 32-32s32 14.3 32 32l0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-192c0-4.4 3.6-8 8-8s8 3.6 8 8l0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 80c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default Child;