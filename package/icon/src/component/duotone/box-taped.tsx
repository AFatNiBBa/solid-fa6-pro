
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `box-taped` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/box-taped?s=duotone box-taped}
 * @preview ![box-taped](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM5MC44NzUgNTMuODc1QzM4Ni41IDQwLjc1IDM3NC4zNzUgMzIgMzYwLjUgMzJIMjU1LjYyNUwyODcuNjI1IDE2MEg0NDYuMzc1QzQ0Ni43NSAxNTkuNSA0NDYuODc1IDE1OS4yNSA0NDcuMjUgMTU4Ljc1TDM5MC44NzUgNTMuODc1Wk04Ni43NSAzMkM3Mi44NzUgMzIgNjAuNzUgNDAuNzUgNTYuMzc1IDUzLjg3NUwwIDE1OC43NUMwLjM3NSAxNTkuMjUgMC41IDE1OS41IDAuODc1IDE2MEgxNTkuNjI1TDE5MS42MjUgMzJIODYuNzVaTTE1OS42MjUgMjcyQzE1OS42MjUgMjgxLjYgMTY2LjAyNSAyODggMTc1LjYyNSAyODhIMjcxLjYyNUMyODEuMjI1IDI4OCAyODcuNjI1IDI4MS42IDI4Ny42MjUgMjcyVjE2MEgxNTkuNjI1VjI3MloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDQ4IDE2MFY0MzJDNDQ4IDQ1OC41MSA0MjYuNTEgNDgwIDQwMCA0ODBINDhDMjEuNDkgNDgwIDAgNDU4LjUxIDAgNDMyVjE2MEgxNjBWMjcyQzE2MCAyODAuNzk5IDE2Ny4xOTkgMjg4IDE3NiAyODhIMjcyQzI4MC44MDEgMjg4IDI4OCAyODAuNzk5IDI4OCAyNzJWMTYwSDQ0OFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function BoxTaped(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M390.875 53.875C386.5 40.75 374.375 32 360.5 32H255.625L287.625 160H446.375C446.75 159.5 446.875 159.25 447.25 158.75L390.875 53.875ZM86.75 32C72.875 32 60.75 40.75 56.375 53.875L0 158.75C0.375 159.25 0.5 159.5 0.875 160H159.625L191.625 32H86.75ZM159.625 272C159.625 281.6 166.025 288 175.625 288H271.625C281.225 288 287.625 281.6 287.625 272V160H159.625V272Z" />
            <path d="M448 160V432C448 458.51 426.51 480 400 480H48C21.49 480 0 458.51 0 432V160H160V272C160 280.799 167.199 288 176 288H272C280.801 288 288 280.799 288 272V160H448Z" />
        </Icon>
    </>
}