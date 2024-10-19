
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `trash-arrow-up` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/trash-arrow-up?s=thin trash-arrow-up}
 * @preview ![trash-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDcuMDI3IDEyOEM0MDIuNzg3IDEyOCAzOTkuMjc5IDEzMS4zMDUgMzk5LjAyNyAxMzUuNTM3TDM3OS43MTkgNDYwLjM3NUMzNzguNDY5IDQ4MC4wMTYgMzYxLjQ2OSA0OTYgMzQxLjc4MSA0OTZIMTA2LjIxOUM4Ni41MzEgNDk2IDY5LjUzMSA0ODAuMDE2IDY4LjMxMiA0NjAuNDA2TDQ4Ljk3MyAxMzUuNTM3QzQ4LjcyMSAxMzEuMzAzIDQ1LjIxMyAxMjggNDAuOTczIDEyOEMzNi4zNjEgMTI4IDMyLjY5OSAxMzEuODg1IDMyLjk3NSAxMzYuNDlMNTIuMzQ0IDQ2MS4zNzVDNTQuMDk0IDQ4OS4yOTcgNzguMjUgNTEyIDEwNi4yMTkgNTEySDM0MS43ODFDMzY5Ljc1IDUxMiAzOTMuOTA2IDQ4OS4yOTcgMzk1LjY4NyA0NjEuMzQ0TDQxNS4wMjUgMTM2LjQ4OEM0MTUuMjk5IDEzMS44ODMgNDExLjYzOSAxMjggNDA3LjAyNyAxMjhaTTQ0MCA2NEgzMjMuMzgzTDMwMi40MzggMjIuMTI1QzI5NS42MjUgOC40NjkgMjgxLjkzOCAwIDI2Ni42NTYgMEgxODEuMzQ0QzE2Ni4wNjIgMCAxNTIuMzc1IDguNDY5IDE0NS41NjIgMjIuMTA5TDEyNC42MTcgNjRIOEMzLjU5NCA2NCAwIDY3LjU3OCAwIDcyUzMuNTk0IDgwIDggODBINDQwQzQ0NC40MDYgODAgNDQ4IDc2LjQyMiA0NDggNzJTNDQ0LjQwNiA2NCA0NDAgNjRaTTE0Mi41MDggNjRMMTU5Ljg3NSAyOS4yNUMxNjMuOTY5IDIxLjA3OCAxNzIuMTg4IDE2IDE4MS4zNDQgMTZIMjY2LjY1NkMyNzUuODEyIDE2IDI4NC4wMzEgMjEuMDc4IDI4OC4xMjUgMjkuMjY2TDMwNS40OTIgNjRIMTQyLjUwOFpNMjI0IDQ0OC4wMUMyMjguNDA2IDQ0OC4wMSAyMzIgNDQ0LjQzMiAyMzIgNDQwLjAxVjIxOC4xOTFMMzE0LjU5OCAyOTMuODk1QzMxNi4xMjkgMjk1LjMxNiAzMTguMDY2IDI5Ni4wMDQgMzIwLjAwNCAyOTYuMDA0QzMyMi4xNiAyOTYuMDA0IDMyNC4zMTYgMjk1LjEyOSAzMjUuOTEgMjkzLjQxQzMyOC44NzkgMjkwLjE2IDMyOC42NiAyODUuMDk4IDMyNS40MSAyODIuMTExTDIyOS40MDYgMTk0LjEwOUMyMjYuMzQ0IDE5MS4yOTcgMjIxLjY1NiAxOTEuMjk3IDIxOC41OTQgMTk0LjEwOUwxMjIuNTkgMjgyLjExMUMxMTkuMzQgMjg1LjA5OCAxMTkuMTIxIDI5MC4xNiAxMjIuMDkgMjkzLjQxQzEyNS4xNTIgMjk2LjY5MSAxMzAuMTg0IDI5Ni45MSAxMzMuNDAyIDI5My44OTVMMjE2IDIxOC4xOTFWNDQwLjAxQzIxNiA0NDQuNDMyIDIxOS41OTQgNDQ4LjAxIDIyNCA0NDguMDFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TrashArrowUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M407.027 128C402.787 128 399.279 131.305 399.027 135.537L379.719 460.375C378.469 480.016 361.469 496 341.781 496H106.219C86.531 496 69.531 480.016 68.312 460.406L48.973 135.537C48.721 131.303 45.213 128 40.973 128C36.361 128 32.699 131.885 32.975 136.49L52.344 461.375C54.094 489.297 78.25 512 106.219 512H341.781C369.75 512 393.906 489.297 395.687 461.344L415.025 136.488C415.299 131.883 411.639 128 407.027 128ZM440 64H323.383L302.438 22.125C295.625 8.469 281.938 0 266.656 0H181.344C166.062 0 152.375 8.469 145.562 22.109L124.617 64H8C3.594 64 0 67.578 0 72S3.594 80 8 80H440C444.406 80 448 76.422 448 72S444.406 64 440 64ZM142.508 64L159.875 29.25C163.969 21.078 172.188 16 181.344 16H266.656C275.812 16 284.031 21.078 288.125 29.266L305.492 64H142.508ZM224 448.01C228.406 448.01 232 444.432 232 440.01V218.191L314.598 293.895C316.129 295.316 318.066 296.004 320.004 296.004C322.16 296.004 324.316 295.129 325.91 293.41C328.879 290.16 328.66 285.098 325.41 282.111L229.406 194.109C226.344 191.297 221.656 191.297 218.594 194.109L122.59 282.111C119.34 285.098 119.121 290.16 122.09 293.41C125.152 296.691 130.184 296.91 133.402 293.895L216 218.191V440.01C216 444.432 219.594 448.01 224 448.01Z" />
        </Icon>
    </>
}