
import { Icon } from "../../index";

/**
 * A component that renders the `turn-left` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-left?s=thin turn-left}
 * @preview ![turn-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/turn-left.svg)
 */
const TurnLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 272l0 89.1c0 3.8-3.1 6.9-6.9 6.9c-1.8 0-3.5-.7-4.7-1.9L16.8 225.9c-.5-.5-.8-1.2-.8-1.9s.3-1.4 .8-1.9L164.4 81.9c1.3-1.2 3-1.9 4.7-1.9c3.8 0 6.9 3.1 6.9 6.9l0 89.1c0 8.8 7.2 16 16 16l208 0c53 0 96 43 96 96l0 152c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-152c0-17.7-14.3-32-32-32l-208 0c-8.8 0-16 7.2-16 16zM5.8 237.5L153.4 377.7c4.3 4 9.9 6.3 15.8 6.3c12.6 0 22.9-10.2 22.9-22.9l0-73.1 0-16 16 0 192 0c8.8 0 16 7.2 16 16l0 152c0 22.1 17.9 40 40 40l16 0c22.1 0 40-17.9 40-40l0-152c0-61.9-50.1-112-112-112l-192 0-16 0 0-16 0-73.1C192 74.2 181.8 64 169.1 64c-5.9 0-11.5 2.3-15.8 6.3L5.8 210.5C2.1 214 0 218.9 0 224s2.1 10 5.8 13.5z" />
    </Icon>
);

export default TurnLeft;