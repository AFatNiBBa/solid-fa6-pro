
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `podium` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/podium?s=duotone podium}
 * @preview ![podium](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwMCAxOTJMMzcwLjg4MiA0ODMuMTg0QzM2OS4yNDYgNDk5LjU0MyAzNTUuNDggNTEyIDMzOS4wNCA1MTJIMTA4Ljk2QzkyLjUyIDUxMiA3OC43NTQgNDk5LjU0MyA3Ny4xMTggNDgzLjE4NEw0OCAxOTJINDAwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00NDggMTY4VjE2OEM0NDggMTgxLjI1NSA0MzcuMjU1IDE5MiA0MjQgMTkySDI0QzEwLjc0NSAxOTIgMCAxODEuMjU1IDAgMTY4VjE2OEMwIDE1NC43NDUgMTAuNzQ1IDE0NCAyNCAxNDRINzkuMzc1Qzg2LjEyNSA5MC4yNSAxMjUuODc1IDQ2Ljg3NSAxNzcuODc1IDM1LjI1QzE4My41IDE1IDIwMiAwIDIyNCAwTDI4Ni4xOTcgMEMzMDkuNDEgMCAzMzAuNjk5IDE1LjY4NiAzMzUuMDgzIDM4LjQ4MUMzNDAuOTgyIDY5LjE1MiAzMTcuNjEzIDk2IDI4OCA5NkgyMjRDMjEwLjc1IDk2IDE5OC43NSA5MC42MjUgMTkwLjEyNSA4Mi4wMDFDMTU4LjEyNSA4OC43NSAxMzMuNzUgMTEzLjEyNSAxMjcuMzc1IDE0NEg0MjRDNDM3LjI1NSAxNDQgNDQ4IDE1NC43NDUgNDQ4IDE2OFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Podium(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M400 192L370.882 483.184C369.246 499.543 355.48 512 339.04 512H108.96C92.52 512 78.754 499.543 77.118 483.184L48 192H400Z" />
            <path d="M448 168V168C448 181.255 437.255 192 424 192H24C10.745 192 0 181.255 0 168V168C0 154.745 10.745 144 24 144H79.375C86.125 90.25 125.875 46.875 177.875 35.25C183.5 15 202 0 224 0L286.197 0C309.41 0 330.699 15.686 335.083 38.481C340.982 69.152 317.613 96 288 96H224C210.75 96 198.75 90.625 190.125 82.001C158.125 88.75 133.75 113.125 127.375 144H424C437.255 144 448 154.745 448 168Z" />
        </Icon>
    </>
}