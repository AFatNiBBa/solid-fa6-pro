
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-three-quarters` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-three-quarters?s=regular circle-three-quarters}
 * @preview ![circle-three-quarters](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjEuMjkgMjU2SDI1NS45OTlWNTAuNzA5QzI1NS45OTkgMzIuODM0IDI0MS4zOCAxOC40MTggMjI0LjA5NSAxOC40MThDMjIyLjUyNyAxOC40MTggMjIwLjkzMyAxOC41MzcgMjE5LjMyOSAxOC43ODNDODkuMDk1IDM4Ljc1IC02LjY1OSAxNjMuNDA2IDIwLjY4NSAzMDQuMTQ4QzM4Ljg2NCAzOTcuNzI3IDExNC4yNzMgNDczLjEzNSAyMDcuODUxIDQ5MS4zMTRDMjI0LjE2MyA0OTQuNDg0IDI0MC4yNTcgNDk2IDI1NS45OTkgNDk2QzM3Ni4wNzkgNDk2IDQ3NS41NjQgNDA3LjgxMSA0OTMuMjE2IDI5Mi42NjhDNDk2LjE3MSAyNzMuMzk2IDQ4MC43ODggMjU2IDQ2MS4yOSAyNTZaTTI1NS45OTkgNDQ4QzI0My4xMTQgNDQ4IDIyOS45OTUgNDQ2LjcyMSAyMTcuMDA1IDQ0NC4xOTVDMTQyLjI4IDQyOS42NzggODIuMzIxIDM2OS43MTkgNjcuODA0IDI5NC45OTRDNTcuNDcyIDI0MS44MDkgNjguNTAxIDE4OC43NjYgOTguODY0IDE0NS42MzVDMTI1LjE4NSAxMDguMjQ2IDE2NC4yNTMgODEuMzgzIDIwNy45OTkgNzAuMDU1VjI1NkMyMDcuOTk5IDI4Mi41MSAyMjkuNDg5IDMwNCAyNTUuOTk5IDMwNEg0NDEuOTQ2QzQyMC4zODggMzg3LjI4NyAzNDMuNTczIDQ0OCAyNTUuOTk5IDQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleThreeQuarters(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M461.29 256H255.999V50.709C255.999 32.834 241.38 18.418 224.095 18.418C222.527 18.418 220.933 18.537 219.329 18.783C89.095 38.75 -6.659 163.406 20.685 304.148C38.864 397.727 114.273 473.135 207.851 491.314C224.163 494.484 240.257 496 255.999 496C376.079 496 475.564 407.811 493.216 292.668C496.171 273.396 480.788 256 461.29 256ZM255.999 448C243.114 448 229.995 446.721 217.005 444.195C142.28 429.678 82.321 369.719 67.804 294.994C57.472 241.809 68.501 188.766 98.864 145.635C125.185 108.246 164.253 81.383 207.999 70.055V256C207.999 282.51 229.489 304 255.999 304H441.946C420.388 387.287 343.573 448 255.999 448Z" />
        </Icon>
    </>
}