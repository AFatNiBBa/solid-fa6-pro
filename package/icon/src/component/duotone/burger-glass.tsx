
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `burger-glass` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/burger-glass?s=duotone burger-glass}
 * @preview ![burger-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMxOS45MTEgMEgzMi4wOUMxMy4wMTYgMCAtMS44NDUgMTYuNDk0IDAuMTg2IDM1LjQwOEw0MS40NCA0ODMuNDA4QzQzLjE4NiA0OTkuNjcgNTYuOTQ2IDUxMiA3My4zNDIgNTEySDI3Mi40MTFDMjYyLjI1NiA0OTguNTg4IDI1NiA0ODIuMDc4IDI1NiA0NjMuOTk4QzI1NiA0NDkuMzQyIDI2Mi42MDYgNDM2LjE5NyAyNzIuOTkzIDQyNy4zODVDMjYyLjQ1MiA0MTUuOTczIDI1NiA0MDAuNzIzIDI1NiAzODMuOTk4QzI1NiAzNjQuOTc1IDI2NC4zNDQgMzQ3Ljg2MyAyNzcuNTYzIDMzNi4xMjlDMjcxLjk4NyAzMzEuMTcyIDI2Ny4yMzUgMzI1LjE4IDI2My42MDYgMzE4LjMzQzI1Mi4zMTUgMjk3LjAyNyAyNTMuNzE5IDI3MS4zODUgMjY3LjMxNSAyNTEuMzQyQzI4My45OTMgMjI2Ljg5MSAzMDguNTU5IDIwNi41NjQgMzM3LjQ3NSAxOTEuMTI1TDM1MS44MTUgMzUuNDA4QzM1My44NDYgMTYuNDk0IDMzOC45ODUgMCAzMTkuOTExIDBaTTI3Ni4wNzcgMTYwSDc1LjkyNEw2Ny4wODMgNjRIMjg0LjkxOEwyNzYuMDc3IDE2MFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNjI0IDQ0Ny45OThIMzA0QzI5NS4xMjUgNDQ3Ljk5OCAyODggNDU1LjEyMyAyODggNDYzLjk5OEMyODggNDkwLjQ5OCAzMDkuNSA1MTEuOTk4IDMzNiA1MTEuOTk4SDU5MkM2MTguNSA1MTEuOTk4IDY0MCA0OTAuNDk4IDY0MCA0NjMuOTk4QzY0MCA0NTUuMTIzIDYzMi44NzUgNDQ3Ljk5OCA2MjQgNDQ3Ljk5OFpNMzIwIDQxNS45OThINjA4QzYyNS42MjUgNDE1Ljk5OCA2NDAgNDAxLjYyMyA2NDAgMzgzLjk5OFM2MjUuNjI1IDM1MS45OTggNjA4IDM1MS45OThIMzIwQzMwMi4zNzUgMzUxLjk5OCAyODggMzY2LjM3MyAyODggMzgzLjk5OFMzMDIuMzc1IDQxNS45OTggMzIwIDQxNS45OThaTTMxOS4yNSAzMTkuOTk4SDYwOC43NUM2MzQuMTI1IDMxOS45OTggNjQ4Ljc1IDI5MC43NDggNjM0LjI1IDI2OS4zNzNDNjA0Ljc1IDIyNi4xMjMgNTQwIDE5Mi4xMjMgNDY0IDE5MS45OThTMzIzLjI1IDIyNi4xMjMgMjkzLjc1IDI2OS4zNzNDMjc5LjI1IDI5MC43NDggMjkzLjg3NSAzMTkuOTk4IDMxOS4yNSAzMTkuOTk4Wk01NDQgMjM5Ljk5OEM1NTIuODc1IDIzOS45OTggNTYwIDI0Ny4xMjMgNTYwIDI1NS45OThTNTUyLjg3NSAyNzEuOTk4IDU0NCAyNzEuOTk4UzUyOCAyNjQuODczIDUyOCAyNTUuOTk4UzUzNS4xMjUgMjM5Ljk5OCA1NDQgMjM5Ljk5OFpNNDY0IDIyMy45OThDNDcyLjg3NSAyMjMuOTk4IDQ4MCAyMzEuMTIzIDQ4MCAyMzkuOTk4UzQ3Mi44NzUgMjU1Ljk5OCA0NjQgMjU1Ljk5OFM0NDggMjQ4Ljg3MyA0NDggMjM5Ljk5OFM0NTUuMTI1IDIyMy45OTggNDY0IDIyMy45OThaTTM4NCAyMzkuOTk4QzM5Mi44NzUgMjM5Ljk5OCA0MDAgMjQ3LjEyMyA0MDAgMjU1Ljk5OFMzOTIuODc1IDI3MS45OTggMzg0IDI3MS45OThTMzY4IDI2NC44NzMgMzY4IDI1NS45OThTMzc1LjEyNSAyMzkuOTk4IDM4NCAyMzkuOTk4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BurgerGlass(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M319.911 0H32.09C13.016 0 -1.845 16.494 0.186 35.408L41.44 483.408C43.186 499.67 56.946 512 73.342 512H272.411C262.256 498.588 256 482.078 256 463.998C256 449.342 262.606 436.197 272.993 427.385C262.452 415.973 256 400.723 256 383.998C256 364.975 264.344 347.863 277.563 336.129C271.987 331.172 267.235 325.18 263.606 318.33C252.315 297.027 253.719 271.385 267.315 251.342C283.993 226.891 308.559 206.564 337.475 191.125L351.815 35.408C353.846 16.494 338.985 0 319.911 0ZM276.077 160H75.924L67.083 64H284.918L276.077 160Z" />
            <path d="M624 447.998H304C295.125 447.998 288 455.123 288 463.998C288 490.498 309.5 511.998 336 511.998H592C618.5 511.998 640 490.498 640 463.998C640 455.123 632.875 447.998 624 447.998ZM320 415.998H608C625.625 415.998 640 401.623 640 383.998S625.625 351.998 608 351.998H320C302.375 351.998 288 366.373 288 383.998S302.375 415.998 320 415.998ZM319.25 319.998H608.75C634.125 319.998 648.75 290.748 634.25 269.373C604.75 226.123 540 192.123 464 191.998S323.25 226.123 293.75 269.373C279.25 290.748 293.875 319.998 319.25 319.998ZM544 239.998C552.875 239.998 560 247.123 560 255.998S552.875 271.998 544 271.998S528 264.873 528 255.998S535.125 239.998 544 239.998ZM464 223.998C472.875 223.998 480 231.123 480 239.998S472.875 255.998 464 255.998S448 248.873 448 239.998S455.125 223.998 464 223.998ZM384 239.998C392.875 239.998 400 247.123 400 255.998S392.875 271.998 384 271.998S368 264.873 368 255.998S375.125 239.998 384 239.998Z" />
        </Icon>
    </>
}