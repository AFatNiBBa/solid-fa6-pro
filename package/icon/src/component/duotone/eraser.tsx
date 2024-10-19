
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `eraser` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/eraser?s=duotone eraser}
 * @preview ![eraser](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiA0NjcuOTk4QzUxMiA0NzQuNjI3IDUwNi42MjcgNDgwIDUwMCA0ODBIMTQzLjc3N0MxMzEuMSA0ODAgMTE4LjkzOSA0NzQuOTYzIDEwOS45NzUgNDY1Ljk5OEwxMy45NjkgMzY5Ljk5MkM0LjY1NiAzNjAuNjE2IDAgMzQ4LjMwMyAwIDMzNS45ODlTNC42NTYgMzExLjM2MiAxMy45NjkgMzAxLjk4NkwxNDkuOTc3IDE2NS45NzdMMTk1LjM1NSAyMTEuMzU1TDcwLjU5OCAzMzUuOTlMMTUwLjYwNCA0MTUuOTk0SDI2NS4zNTlMMzMyLjYxMyAzNDguNjE1TDE5NS4zNTUgMjExLjM1NUwzNzcuOTM5IDM5My45MzlMMzU1Ljg2NSA0MTUuOTk0SDQ1OS45OTZDNDg4LjcxNyA0MTUuOTk0IDUxMiA0MzkuMjc3IDUxMiA0NjcuOTk4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zNzcuOTYzIDM5My45MzlMMTUwIDE2NS45NzdMMjcwLjAwOCA0NS45NjlDMjc5LjM4NCAzNi42NTYgMjkxLjY5NyAzMiAzMDQuMDExIDMyUzMyOC42MzggMzYuNjU2IDMzOC4wMTQgNDUuOTY5TDQ5OC4wMjMgMjA1Ljk4QzUwNy4zMzYgMjE1LjM1NiA1MTEuOTkyIDIyNy42NyA1MTEuOTkyIDIzOS45ODNTNTA3LjMzNiAyNjQuNjA5IDQ5OC4wMjMgMjczLjk4NEwzNzcuOTYzIDM5My45MzlaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Eraser(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M512 467.998C512 474.627 506.627 480 500 480H143.777C131.1 480 118.939 474.963 109.975 465.998L13.969 369.992C4.656 360.616 0 348.303 0 335.989S4.656 311.362 13.969 301.986L149.977 165.977L195.355 211.355L70.598 335.99L150.604 415.994H265.359L332.613 348.615L195.355 211.355L377.939 393.939L355.865 415.994H459.996C488.717 415.994 512 439.277 512 467.998Z" />
            <path d="M377.963 393.939L150 165.977L270.008 45.969C279.384 36.656 291.697 32 304.011 32S328.638 36.656 338.014 45.969L498.023 205.98C507.336 215.356 511.992 227.67 511.992 239.983S507.336 264.609 498.023 273.984L377.963 393.939Z" />
        </Icon>
    </>
}