
import { Icon } from "../../index";

/**
 * A component that renders the `tree-decorated` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree-decorated?s=light tree-decorated}
 * @preview ![tree-decorated](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/tree-decorated.svg)
 */
const TreeDecorated: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M236.4 5.9C233.3 2.2 228.8 0 224 0s-9.3 2.2-12.4 5.9L70.3 178.6c-4.1 5-6.3 11.2-6.3 17.6C64 211.6 76.4 224 91.8 224l18.9 0L38.1 314.8c-3.9 4.9-6.1 11.1-6.1 17.4C32 347.5 44.5 360 59.8 360l21.3 0L5.2 467.6C1.8 472.4 0 478 0 483.9C0 499.4 12.6 512 28.1 512L160 512l128 0 131.9 0c15.5 0 28.1-12.6 28.1-28.1c0-5.8-1.8-11.5-5.2-16.2L366.9 360l21.3 0c15.4 0 27.8-12.5 27.8-27.8c0-6.3-2.2-12.5-6.1-17.4L337.3 224l18.9 0c15.4 0 27.8-12.4 27.8-27.8c0-6.4-2.2-12.6-6.3-17.6L236.4 5.9zM412.4 480L288 480l-128 0L35.6 480l89.5-126.8c3.4-4.9 3.9-11.3 1.1-16.6s-8.2-8.6-14.2-8.6l-43.5 0 88-110c3.8-4.8 4.6-11.4 1.9-16.9s-8.3-9.1-14.4-9.1l-43.3 0L224 41.3 347.3 192 304 192c-6.2 0-11.8 3.5-14.4 9.1s-1.9 12.1 1.9 16.9l88 110L336 328c-6 0-11.5 3.3-14.2 8.6s-2.3 11.7 1.1 16.6L412.4 480zM184 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-152a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm24 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default TreeDecorated;