
import { Icon } from "../../index";

/**
 * A component that renders the `face-expressionless` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-expressionless?s=thin face-expressionless}
 * @preview ![face-expressionless](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/face-expressionless.svg)
 */
const FaceExpressionless: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm160 80l192 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-192 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zM128 200c0-4.4 3.6-8 8-8l80 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-80 0c-4.4 0-8-3.6-8-8zm168-8l80 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-80 0c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default FaceExpressionless;