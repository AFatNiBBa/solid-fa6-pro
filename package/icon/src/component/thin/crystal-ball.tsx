
import { Icon } from "../../index";

/**
 * A component that renders the `crystal-ball` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crystal-ball?s=thin crystal-ball}
 * @preview ![crystal-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/crystal-ball.svg)
 */
const CrystalBall: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 224c0 55.9-22 106.6-57.9 144l21.5 0c32.7-38.9 52.4-89.2 52.4-144C448 100.3 347.7 0 224 0S0 100.3 0 224c0 54.8 19.7 105.1 52.4 144l21.5 0C38 330.6 16 279.9 16 224C16 109.1 109.1 16 224 16s208 93.1 208 208zM80 400c-2.7 0-5.2 1.3-6.7 3.6L28.4 470.9c-2.9 4.3-4.4 9.4-4.4 14.7C24 500.2 35.8 512 50.4 512l347.2 0c14.6 0 26.4-11.8 26.4-26.4c0-5.2-1.5-10.3-4.4-14.7l-44.9-67.4c-1.5-2.2-4-3.6-6.7-3.6L80 400zM41.8 479.8L84.3 416l279.4 0 42.5 63.8c1.1 1.7 1.8 3.7 1.8 5.8c0 5.8-4.7 10.4-10.4 10.4L50.4 496c-5.8 0-10.4-4.7-10.4-10.4c0-2.1 .6-4.1 1.8-5.8zM288 152c-4.4 0-8 3.6-8 8l0 56-56 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l56 0 0 56c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56 56 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-56 0 0-56c0-4.4-3.6-8-8-8zM144 104c-4.4 0-8 3.6-8 8l0 24-24 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l24 0 0 24c0 4.4 3.6 8 8 8s8-3.6 8-8l0-24 24 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-24 0 0-24c0-4.4-3.6-8-8-8z" />
    </Icon>
);

export default CrystalBall;