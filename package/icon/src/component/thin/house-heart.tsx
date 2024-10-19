
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `house-heart` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/house-heart?s=thin house-heart}
 * @preview ![house-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzkuNTU5IDI0Mi44MjhDMjY3LjY5NCAyMzAuNTc0IDI1MS40NzEgMjI0IDIzNS40MDMgMjI0QzIwMC4zMDEgMjI0IDE3OC4yNzggMjU0LjE5MiAxNzguMjc4IDI4My41ODdDMTc4LjI3OCAyOTkuMDA5IDE4My45NjYgMzE0LjQzMiAxOTUuMzQ3IDMyNi4yMDdMMjc4LjEyNyA0MTEuNzk3QzI4MC44MzQgNDE0LjYwMSAyODQuNDA2IDQxNiAyODcuOTc3IDQxNkMyOTEuNTQ5IDQxNiAyOTUuMTE5IDQxNC42MDEgMjk3LjgyOCA0MTEuNzk3TDM4MC42MDcgMzI2LjIwN0MzOTIuMDExIDMxNC40MjcgMzk3LjcxIDI5OC45OTUgMzk3LjcxIDI4My41NjZDMzk3LjcxIDI1NC4xODggMzc1LjY2MiAyMjQgMzQwLjU4OSAyMjRDMzI0LjUyMyAyMjQgMzA4LjI5OSAyMzAuNTc4IDI5Ni40MzQgMjQyLjgyOEwyODcuOTk2IDI1MS41MzVMMjc5LjU1OSAyNDIuODI4Wk0zMDcuOTI2IDI1My45NjFDMzE2LjUxOSAyNDUuMDkgMzI4LjQyNiAyNDAgMzQwLjU4OSAyNDBDMzY1Ljc5MSAyNDAgMzgxLjcwOCAyNjEuNzEgMzgxLjcwOCAyODMuNTQzQzM4MS43MDggMjk1LjM0OCAzNzcuMTc5IDMwNi43NDQgMzY5LjEwNSAzMTUuMDgyTDI4Ny45NzkgMzk4Ljk2OUwyMDYuODUzIDMxNS4wOUMxOTguOCAzMDYuNzU3IDE5NC4yOCAyOTUuMzY3IDE5NC4yOCAyODMuNTY5QzE5NC4yOCAyODIuODg0IDE5NC4yOTUgMjgyLjE5OCAxOTQuMzI1IDI4MS41MTJDMTk0LjkyMyAyNjguMDQ5IDIwNS40MjEgMjQwIDIzNS40MDMgMjQwQzI0Ny41NzEgMjQwIDI1OS40NzUgMjQ1LjA4NiAyNjguMDY5IDI1My45NjFMMjg3Ljk5NiAyNzQuNTI3TDMwNy45MjYgMjUzLjk2MVpNNTc1Ljk5MyAyNTUuOTg3QzU3NS45OTMgMjUzLjc4NSA1NzUuMDg4IDI1MS41OTIgNTczLjMwOCAyNTAuMDE0TDUxMS45OTggMTk1LjcwOVY0Ny45OThDNTExLjk5OCAzOS4xNjIgNTA0LjgzNCAzMS45OTggNDk1Ljk5OCAzMS45OThIMzk5Ljk5N0MzOTEuMTYxIDMxLjk5OCAzODMuOTk3IDM5LjE2MiAzODMuOTk3IDQ3Ljk5OFY4Mi4zMzhMMjkzLjMwOSAyLjAxNEMyOTEuNzkyIDAuNjcxIDI4OS44OTQgMCAyODcuOTk2IDBTMjg0LjIgMC42NzEgMjgyLjY4NCAyLjAxNEwyLjY4NSAyNTAuMDE0QzAuOTA1IDI1MS41OTIgMCAyNTMuNzg1IDAgMjU1Ljk4N0MwIDI2MC4zMDkgMy40NzkgMjYzLjk4NSA3Ljk2OCAyNjMuOTg1QzkuODY1IDI2My45ODUgMTEuNzczIDI2My4zMTcgMTMuMzEgMjYxLjk4Mkw2My45OTcgMjE3LjgxNFY0NDcuOTk4QzYzLjk5NyA0ODMuMzQ0IDkyLjY1MSA1MTEuOTk4IDEyNy45OTYgNTExLjk5OEg0NDcuOTk2QzQ4My4zNDIgNTExLjk5OCA1MTEuOTk2IDQ4My4zNDQgNTExLjk5NiA0NDcuOTk4VjIxNy44MTRMNTYyLjY4MyAyNjEuOTgyQzU2NC4yMTQgMjYzLjMyNiA1NjYuMDg5IDI2My45OTggNTY3Ljk5NSAyNjMuOTk4QzU3Mi40NTQgMjYzLjk5OCA1NzUuOTkzIDI2MC4zNTkgNTc1Ljk5MyAyNTUuOTg3Wk00OTUuOTk2IDQ0Ny45OThDNDk1Ljk5NiA0NzQuNTA4IDQ3NC41MDYgNDk1Ljk5OCA0NDcuOTk2IDQ5NS45OThIMTI3Ljk5NkMxMDEuNDg3IDQ5NS45OTggNzkuOTk3IDQ3NC41MDggNzkuOTk3IDQ0Ny45OThWMjAzLjU5MkwyODcuOTk2IDE4LjcwMUw0OTUuOTk2IDIwMy41OTJWNDQ3Ljk5OFpNNDk1Ljk5OCAxODEuNTM3TDM5OS45OTcgOTYuNTFWNDcuOTk4SDQ5NS45OThWMTgxLjUzN1ogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function HouseHeart(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M279.559 242.828C267.694 230.574 251.471 224 235.403 224C200.301 224 178.278 254.192 178.278 283.587C178.278 299.009 183.966 314.432 195.347 326.207L278.127 411.797C280.834 414.601 284.406 416 287.977 416C291.549 416 295.119 414.601 297.828 411.797L380.607 326.207C392.011 314.427 397.71 298.995 397.71 283.566C397.71 254.188 375.662 224 340.589 224C324.523 224 308.299 230.578 296.434 242.828L287.996 251.535L279.559 242.828ZM307.926 253.961C316.519 245.09 328.426 240 340.589 240C365.791 240 381.708 261.71 381.708 283.543C381.708 295.348 377.179 306.744 369.105 315.082L287.979 398.969L206.853 315.09C198.8 306.757 194.28 295.367 194.28 283.569C194.28 282.884 194.295 282.198 194.325 281.512C194.923 268.049 205.421 240 235.403 240C247.571 240 259.475 245.086 268.069 253.961L287.996 274.527L307.926 253.961ZM575.993 255.987C575.993 253.785 575.088 251.592 573.308 250.014L511.998 195.709V47.998C511.998 39.162 504.834 31.998 495.998 31.998H399.997C391.161 31.998 383.997 39.162 383.997 47.998V82.338L293.309 2.014C291.792 0.671 289.894 0 287.996 0S284.2 0.671 282.684 2.014L2.685 250.014C0.905 251.592 0 253.785 0 255.987C0 260.309 3.479 263.985 7.968 263.985C9.865 263.985 11.773 263.317 13.31 261.982L63.997 217.814V447.998C63.997 483.344 92.651 511.998 127.996 511.998H447.996C483.342 511.998 511.996 483.344 511.996 447.998V217.814L562.683 261.982C564.214 263.326 566.089 263.998 567.995 263.998C572.454 263.998 575.993 260.359 575.993 255.987ZM495.996 447.998C495.996 474.508 474.506 495.998 447.996 495.998H127.996C101.487 495.998 79.997 474.508 79.997 447.998V203.592L287.996 18.701L495.996 203.592V447.998ZM495.998 181.537L399.997 96.51V47.998H495.998V181.537Z " />
        </Icon>
    </>
}