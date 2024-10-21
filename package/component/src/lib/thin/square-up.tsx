
import { Icon } from "../../index";

/**
 * A component that renders the `square-up` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-up?s=thin square-up}
 * @preview ![square-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-up.svg)
 */
const SquareUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm224 16c7.2 0 14.2 2.9 19.3 8L343 219.7c5.7 5.7 9 13.5 9 21.7c0 16.9-13.7 30.6-30.6 30.6L272 272l0 88c0 22.1-17.9 40-40 40l-16 0c-22.1 0-40-17.9-40-40l0-88-49.4 0C109.7 272 96 258.3 96 241.4c0-8.1 3.2-15.9 9-21.7L204.7 120c5.1-5.1 12.1-8 19.3-8zm-8 19.3L116.3 231c-2.7 2.7-4.3 6.5-4.3 10.3c0 8.1 6.5 14.6 14.6 14.6l57.4 0c4.4 0 8 3.6 8 8l0 96c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-96c0-4.4 3.6-8 8-8l57.4 0c8.1 0 14.6-6.5 14.6-14.6c0-3.9-1.5-7.6-4.3-10.3L232 131.3c-2.1-2.1-5-3.3-8-3.3s-5.9 1.2-8 3.3z" />
    </Icon>
);

export default SquareUp;